// Define the MajorCredits interface
interface MajorCredits {
  brand: 'Major';
  credits: number;
}

// Define the MinorCredits interface
interface MinorCredits {
  brand: 'Minor';
  credits: number;
}

// Create a function to sum the credits of two Major subjects
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    brand: 'Major',
    credits: subject1.credits + subject2.credits,
  };
}

// Create a function to sum the credits of two Minor subjects
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    brand: 'Minor',
    credits: subject1.credits + subject2.credits,
  };
}

