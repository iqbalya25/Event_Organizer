import { ReactNode } from "react";

export interface Partner {
  logo: ReactNode;
  status: string;
  companyname: string;
  location: string;
  description: string;
  stand: string;
}

const PartnersList: Partner[] = [
  {
    logo: "./logo1.png",
    status: "exhibitors2024",
    companyname: "Siemens",
    location: "Hamburg",
    description: "Automation Company",
    stand: "Hall A A6",
  },
  {
    logo: "./logo2.png",
    status: "exhibitors2024",
    companyname: "ABB",
    location: "London",
    description: "Automation Company",
    stand: "Hall B B1",
  },
  {
    logo: "./logo3.png",
    status: "conferences2024",
    companyname: "SCHNEIDER",
    location: "Paris",
    description: "Automation Company",
    stand: "Hall B B3",
  },
  {
    logo: "./logo4.png",
    status: "conferences2024",
    companyname: "MITSUBISHI ELECTRIC",
    location: "Japan",
    description: "Automation Company",
    stand: "Hall C B2",
  },
];

export default PartnersList;
