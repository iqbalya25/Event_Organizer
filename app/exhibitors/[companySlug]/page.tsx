// app/[companySlug]/page.tsx

import React from "react";
import { notFound } from "next/navigation";
import { staticData } from "@/constants/companyList";
import CompanyProfile from "./companyprofile";

interface PageProps {
  params: { companySlug: string };
}

const ExhibitorPage: React.FC<PageProps> = ({ params }) => {
  const { companySlug } = params;
  const company = staticData.find((c) => c.slug === companySlug);

  if (!company) {
    notFound();
  }

  return (
    <div>
      <CompanyProfile params={{ companySlug }} />
    </div>
  );
};

export default ExhibitorPage;

export async function generateStaticParams() {
  return staticData.map((company) => ({
    companySlug: company.slug,
  }));
}
