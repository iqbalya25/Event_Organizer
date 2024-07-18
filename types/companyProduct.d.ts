// types/Company.ts

export interface Product {
  name: string;
  description: string;
  imageUrl: string | null;
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
