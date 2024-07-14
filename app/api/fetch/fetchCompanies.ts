import { useQuery } from "@tanstack/react-query";
import { Company } from "@/types/companyProduct";

const fetchCompanies = async (): Promise<Company[]> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}api/v1/company`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  console.log("Fetched events data:", data);
  return data.data;
};

export const useCompanies = () => {
  return useQuery<Company[], Error>({
    queryKey: ["companies"],
    queryFn: fetchCompanies,
  });
};
