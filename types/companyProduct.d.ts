// types/Company.ts

export interface Product {
  name: string;
  description: string;
  companyId: number | null;
  imageUrl: string | null;
  slug: string;
}

export interface Company {
  id: number | null;
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
  city: string;
  websiteUrl: string;
  profileUrl: string;
  about: string | null;
  slug: string;
  products: Product[];
}
