export type Direction = "next" | "previous";

export type JobItem = {
  id: number;
  badgeLetters: string;
  company: string;
  daysAgo: number;
  relevenceScore: number;
  title: string;
};

export type JobItemExpanded = JobItem & {
  description: string;
  qualifications: string[];
  reviews: string[];
  duration: string;
  salary: string;
  location: string;
  coverImgURL: string;
  companyURL: string;
  badgeBgColor: string;
};
