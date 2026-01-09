import { GoogleGenAI, Type } from "@google/genai";
import { AuditResult, AuditRequest } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const performBusinessAudit = async (request: AuditRequest): Promise<AuditResult> => {
  const model = "gemini-3-pro-preview";

  const prompt = `
    Perform a simulated SEO and Google Business Profile visibility audit for the business "${request.businessName}" located in "${request.city}" (Category: ${request.category}).

    Use Google Search to find real information about this business if possible, or similar businesses in that area to provide context.

    Analyze:
    1. Likelihood of appearing in the "Map Pack" (Top 3).
    2. Review volume and sentiment (if available, otherwise estimate based on typical local competition).
    3. Website/Profile optimization status.

    Return the response in strictly valid JSON format matching this schema:
    {
      "visibilityScore": number (0-100),
      "summary": "A 2-sentence executive summary of their online presence.",
      "strengths": ["List 2-3 strong points"],
      "weaknesses": ["List 2-3 weak points or missing elements"],
      "recommendations": ["List 3 actionable steps to improve ranking"]
    }
  `;

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        tools: [{ googleSearch: {} }],
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            visibilityScore: { type: Type.INTEGER },
            summary: { type: Type.STRING },
            strengths: { type: Type.ARRAY, items: { type: Type.STRING } },
            weaknesses: { type: Type.ARRAY, items: { type: Type.STRING } },
            recommendations: { type: Type.ARRAY, items: { type: Type.STRING } },
          },
          required: ["visibilityScore", "summary", "strengths", "weaknesses", "recommendations"],
        },
      },
    });

    const text = response.text || "{}";
    const data = JSON.parse(text);
    
    // Extract sources if available
    const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
    const sources = groundingChunks
      .filter((chunk: any) => chunk.web?.uri && chunk.web?.title)
      .map((chunk: any) => ({
        title: chunk.web.title,
        uri: chunk.web.uri,
      }));

    return {
      businessName: request.businessName,
      location: request.city,
      visibilityScore: data.visibilityScore || 50,
      summary: data.summary || "Unable to fully analyze profile.",
      strengths: data.strengths || [],
      weaknesses: data.weaknesses || [],
      recommendations: data.recommendations || [],
      sources: sources,
    };

  } catch (error) {
    console.error("Audit failed:", error);
    // Return a fallback mock if the AI fails or API key is invalid (graceful degradation)
    return {
      businessName: request.businessName,
      location: request.city,
      visibilityScore: 45,
      summary: "We couldn't access live data right now, but typically local businesses in this sector miss out on 40% of leads due to incomplete profiles.",
      strengths: ["Local presence exists"],
      weaknesses: ["Potential missing reviews", "Unclaimed profile risks", "Lack of regular updates"],
      recommendations: ["Claim and verify GBP", "Implement a review strategy", "Add high-quality photos"],
      sources: []
    };
  }
};
