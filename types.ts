export interface TourPackage {
  id: string;
  title: string;
  description: string;
  price: string;
  imageKeyword: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: 'Instagram' | 'Facebook';
}