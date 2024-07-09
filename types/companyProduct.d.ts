// types/Company.ts
export interface ProductType {
  id: string;
  name: string;
  description: string;
  photoUrl: string;
}

export interface Company {
  slug: string;
  status: string;
  title: string;
  location: {
    description: string;
    icon: string;
    link: string;
    title: string;
  };
  name: string;
  address: string;
  country: string;
  description: string;
  products: ProductType[];
}
