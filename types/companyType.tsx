import { Product } from "./productType";

export interface Company {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
  city: string;
  websiteUrl: string;
  profileUrl: string;
  about: string;
  slug: string;
  products: Product[];
}
