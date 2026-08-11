export function gradeStudent(score: number, isBonus: boolean, isPremium: boolean, attendance: number): string {
  let grade: string;
  if (score >= 90) grade = 'A';
  else if (score >= 80) grade = 'B';
  else if (score >= 70) grade = 'C';
  else if (score >= 60) grade = 'D';
  else grade = 'F';

  if (isBonus && score < 100) grade += '+';
  if (isPremium && attendance >= 0.9) grade += ' (honors)';
  else if (isPremium && attendance < 0.5) grade += ' (probation)';
  if (attendance < 0.75 && !isPremium) grade += ' (attendance-warning)';

  return grade;
}
