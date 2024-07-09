// data/companiesData.ts

import { Company } from "@/types/companyProduct";

export const staticData: Company[] = [
  {
    slug: "company-1",
    status: "Active",
    title: "Company 1",
    location: {
      description: "Hall A B2",
      icon: "A",
      link: "",
      title: "Hall A",
    },
    name: "Company 1",
    address: "123 Main St",
    country: "Country 1",
    description: "Description for Company 1",
    products: [
      {
        id: "prod1",
        name: "Product 1",
        description: "This is a description for Product 1",
        photoUrl: "/images/product1.jpg",
      },
      {
        id: "prod2",
        name: "Product 2",
        description: "This is a description for Product 2",
        photoUrl: "/images/product2.jpg",
      },
    ],
  },
];
