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
  products: string[];
}
