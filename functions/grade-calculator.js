// Challenge
const gradeCal = function( studentScore, totalScore ) {
  if (typeof studentScore !== 'number' || typeof totalScore !== 'number') {
    throw Error('Please provide numbers only')
  }
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

try {
  const result = gradeCal(50, 60);
  console.log(result);
} catch (e) {
  console.log(e.message)
}


