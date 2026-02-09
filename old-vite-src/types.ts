
export interface PricingCard {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

export interface FeatureRow {
  name: string;
  free: string | boolean;
  pro: string | boolean;
  enterprise: string | boolean;
}

export enum SectionID {
  Hero = 'hero',
  Pain = 'pain',
  Solution = 'solution',
  Pricing = 'pricing',
  Features = 'features',
  Upgrade = 'upgrade',
  Enterprise = 'enterprise',
  Footer = 'footer'
}
