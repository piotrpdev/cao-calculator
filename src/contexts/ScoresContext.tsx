import React from "react";

export const gradeValues = [
  "H1",
  "H2",
  "H3",
  "H4",
  "H5",
  "H6",
  "H7",
  "H8",
  "O1",
  "O2",
  "O3",
  "O4",
  "O5",
  "O6",
  "O7",
  "O8",
  "D",
  "M",
  "P",
] as const;

export type Grade = typeof gradeValues[number];

export const subjectValues = [
  "Accounting",
  "Agricultural Economics",
  "Agricultural Science",
  "Ancient Greek",
  "Applied Mathematics",
  "Arabic",
  "Art",
  "Biology",
  "Bulgarian",
  "Business",
  "Chemistry",
  "Classical Studies",
  "Construction Studies",
  "Croatian",
  "Czech",
  "Danish",
  "DCG",
  "Dutch",
  "Economics",
  "Engineering",
  "English",
  "Estonian",
  "Finnish",
  "French",
  "Geography",
  "German",
  "History",
  "Home Economics",
  "Hungarian",
  "Irish",
  "Italian",
  "Japanese",
  "Latin",
  "Latvian",
  "Link Modules",
  "Lithuanian",
  "Mathematics",
  "Modern Greek",
  "Music",
  "Physics",
  "Polish",
  "Portuguese",
  "Religious Education",
  "Romanian",
  "Russian",
  "Slovakian",
  "Spanish",
  "Swedish",
  "Technology",
] as const;

export type Subject = typeof subjectValues[number];

export type Score = {
  id: string;
  grade: Grade;
  subject: Subject;
  points: number;
};

export type ScoresContextType = { scores: Score[]; totalPoints: number };

const ScoresContext = React.createContext<{
  data: ScoresContextType;
  setScores: React.Dispatch<React.SetStateAction<ScoresContextType>>;
}>({
  data: {
    scores: [
      { id: "awdaw", grade: "H4", subject: "Mathematics", points: 91 },
      { id: "afaw", grade: "H4", subject: "English", points: 66 },
    ],
    totalPoints: 0,
  },
  setScores: () => {
    return null;
  },
});

export default ScoresContext;
