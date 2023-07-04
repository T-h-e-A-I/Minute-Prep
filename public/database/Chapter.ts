import Subject from "../../src/components/Home/Subject";
// id        Int       @id @default(autoincrement())
//   name      String
//   contents  Content[]
//   subject   Subject   @relation(fields: [subjectId], references: [id])
//   subjectId Int
export type Chapter = {
  id: number;
  name: string;
  subjectId: number;
};
export const chapters = [
  {
    id: 111,
    name: "ভেক্টর",
    subjetctId: 1,
  },
  {
    id: 113,
    name: "নিউটোনিয়ান বলবিদ্যা",
    subjectId: 1,
  },
  {
    id: 123,
    name: "চলতড়িৎ",
    subjectId: 1,
  },
  {
    id: 313,
    name: "সরলরেখা",
    subjectId: 3,
  },
  {
    id: 317,
    name: "সংযুক্ত ও যৌগিক কোণের ত্রিকোণমিতিক অনুপাত",
    subjectId: 3,
  },
  {
    id: 323,
    name: "জটিল সংখ্যা",
    subjectId: 3,
  },
];
