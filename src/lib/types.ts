export type Direction = "next" | "previous";
export type SortBy = "relevant" | "recent";

export type JobItem = {
  id: number;
  badgeLetters: string;
  company: string;
  daysAgo: number;
  relevanceScore: number;
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
