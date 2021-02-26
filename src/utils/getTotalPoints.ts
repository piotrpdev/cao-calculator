import { Score } from "../contexts/ScoresContext";
import gradeToPoints from "./gradeToPoints";

export default function getTotalPoints(scores: Score[]): number {
  const pretotal: number[] = [0];

  scores.forEach(({ grade, subject }) => {
    pretotal.push(gradeToPoints(grade, subject));
  });

  pretotal.sort((a, b) => {
    if (a < b) {
      return 1;
    }
    if (a > b) {
      return -1;
    }
    return 0;
  });

  return pretotal.slice(0, 6).reduce((a, b) => a + b);
}
