import { Img } from "@chakra-ui/react";
import { ReactNode } from "react";

export interface partnersList {
  logo: ReactNode;
  status: string;
  companyname: string;
  location: string;
  description: string;
  stand: string;
}

export const PartnersList: partnersList[] = [
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
    companyname: "MITSUBISHI ELECTRIc",
    location: "Japan",
    description: "Automation Company",
    stand: "Hall C B2",
  },
];
