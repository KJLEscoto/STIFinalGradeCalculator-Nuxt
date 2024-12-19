export const gradingSystem = [
  { range: [97.5, 100], grade: 1.0, description: 'Excellent'},
  { range: [94.5, 97.49], grade: 1.25, description: 'Very Good'},
  { range: [91.5, 94.49], grade: 1.5, description: 'Very Good'},
  { range: [88.5, 91.49], grade: 1.75, description: 'Very Good'},
  { range: [85.5, 88.49], grade: 2.0, description: 'Satisfactory'},
  { range: [81.5, 85.49], grade: 2.25, description: 'Satisfactory'},
  { range: [77.5, 81.49], grade: 2.5, description: 'Satisfactory'},
  { range: [73.5, 77.49], grade: 2.75, description: 'Fair'},
  { range: [69.5, 73.49], grade: 3.0, description: 'Fair'},
  { range: [0, 69.49], grade: 5.0, description: 'Failed'},
];

// Helper function to get grade and description
export function getFinalGrade(numericalValue) {
  const result = gradingSystem.find(
    (grade) => numericalValue >= grade.range[0] && numericalValue <= grade.range[1]
  );
  return result
    ? { grade: result.grade, description: result.description }
    : { grade: '-', description: 'Out of Range' };
}

