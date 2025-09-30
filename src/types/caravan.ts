export interface Caravan {
  id: number;
  title: string;
  date: string;
  location: string;
  beneficiaries: number;
  image: string;
  status: "completed" | "upcoming";
  description: string;
}
