// transactionList.ts
export interface Transaction {
  id: number;
  companyName: string;
  amount: number;
  date: string;
  status: string;
}

const generateRandomDate = (start: Date, end: Date): string => {
  const date = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
  return date.toISOString().split("T")[0]; // Format as YYYY-MM-DD
};

export const generateDummyData = (
  type: "day" | "month" | "year"
): Transaction[] => {
  const data: Transaction[] = [];
  const statusOptions = ["Completed", "Pending"];

  let startDate: Date;
  let endDate: Date;

  switch (type) {
    case "day":
      startDate = new Date();
      endDate = new Date();
      endDate.setDate(endDate.getDate() + 30);
      break;
    case "month":
      startDate = new Date(new Date().getFullYear(), 0, 1);
      endDate = new Date(new Date().getFullYear(), 11, 31);
      break;
    case "year":
      startDate = new Date(new Date().getFullYear() - 5, 0, 1);
      endDate = new Date();
      break;
    default:
      startDate = new Date();
      endDate = new Date();
  }

  for (let i = 0; i < 50; i++) {
    data.push({
      id: i + 1,
      companyName: `Company ${String.fromCharCode(65 + (i % 26))}`,
      amount: Math.floor(Math.random() * 5000) + 1000,
      date: generateRandomDate(startDate, endDate),
      status: statusOptions[Math.floor(Math.random() * statusOptions.length)],
    });
  }

  return data;
};
