// src/api/fetch/fetchCompanies.ts

import { useQuery } from "@tanstack/react-query";
import { Company } from "@/types/companyProduct";

interface FetchCompaniesResponse {
  data: Company[];
  total: number;
}

const fetchCompanies = async (
  page: number,
  limit: number
): Promise<FetchCompaniesResponse> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}api/v1/company?page=${page}&limit=${limit}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  console.log("Fetched companies data:", data);
  return data;
};

export const useCompanies = (page: number, limit: number) => {
  return useQuery<FetchCompaniesResponse, Error>({
    queryKey: ["companies", page, limit],
    queryFn: () => fetchCompanies(page, limit),
  });
};
