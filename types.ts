import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface PricingTier {
  name: string;
  price: string;
  features: string[];
  cta: string;
  highlight?: boolean;
}

export interface AuditResult {
  businessName: string;
  location: string;
  visibilityScore: number;
  summary: string;
  strengths: string[];
  weaknesses: string[];
  recommendations: string[];
  sources: { title: string; uri: string }[];
}

export interface AuditRequest {
  businessName: string;
  city: string;
  category: string;
}