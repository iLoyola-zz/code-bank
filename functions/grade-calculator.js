// Challenge
const gradeCal = function( studentScore, totalScore ) {
  const grade = studentScore / totalScore * 100;
  let letterGrade = '';
  if (grade >= 90) {
    letterGrade = 'C';
  } else if (grade >= 80) {
    letterGrade = 'B';
  } else if (grade >= 70) {
    letterGrade = 'C';
  } else if (grade >= 60) {
    letterGrade = 'D';
  } else {
    letterGrade = 'F'
  }
  return `You got a B (${grade}%)!`;
};

const result = gradeCal(50, 60);
console.log(result);