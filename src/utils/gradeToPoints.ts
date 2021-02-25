import { Grade, Subject } from "../contexts/ScoresContext";

const higherPoints = [100, 88, 77, 66, 56, 46, 37, 0];
const ordinaryPoints = [56, 46, 37, 28, 20, 12, 0, 0];

export default function gradeToPoints(grade: Grade, subject: Subject): number {
  const extraPoints =
    subject === "Mathematics" &&
    grade.charAt(0) === "H" &&
    parseInt(grade.charAt(1), 10) < 7;

  if (grade.length === 1) {
    let points = 0;

    switch (grade.charAt(0)) {
      case "D":
        points = 66;
        break;
      case "M":
        points = 46;
        break;
      case "P":
        points = 28;
        break;

      default:
        break;
    }

    return points;
  }

  const rate = grade.charAt(0) === "H" ? higherPoints : ordinaryPoints;
  const extra = extraPoints ? 25 : 0;

  return rate[parseInt(grade.charAt(1), 10) - 1] + extra;
}
