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
  {
    slug: "company-2",
    status: "Active",
    title: "Company 2",
    location: {
      description: "Hall B B3",
      icon: "B",
      link: "",
      title: "Hall B",
    },
    name: "Company 2",
    address: "456 Main St",
    country: "Country 2",
    description: "Description for Company 2",
    products: [
      {
        id: "prod3",
        name: "Product 3",
        description: "This is a description for Product 3",
        photoUrl: "/images/product3.jpg",
      },
      {
        id: "prod4",
        name: "Product 4",
        description: "This is a description for Product 4",
        photoUrl: "/images/product4.jpg",
      },
    ],
  },
];
