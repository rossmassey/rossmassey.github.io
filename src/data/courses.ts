export interface Course {
  department: string;
  course: string;
  title: string;
  term: string;
  order: number;
}

export interface Institution {
  id: string;
  name: string;
  gpa?: string;
  termLabel: string;
  courses: Course[];
}

export const institutions: Institution[] = [
  {
    id: 'ucsd',
    name: 'University of California, San Diego',
    gpa: '3.38',
    termLabel: 'Quarter',
    courses: [
      { department: 'BILD', course: '3', title: 'Organismic and Evolutionary Biology', term: 'Fall 2014', order: 1 },
      { department: 'MATH', course: '20C', title: 'Calculus and Analytic Geometry for Science and Engineering', term: 'Fall 2014', order: 1 },
      { department: 'BILD', course: '1', title: 'The Cell', term: 'Winter 2015', order: 2 },
      { department: 'CHEM', course: '140A', title: 'Organic Chemistry I', term: 'Winter 2015', order: 2 },
      { department: 'TDAC', course: '1', title: 'Intro to Acting', term: 'Winter 2015', order: 2 },
      { department: 'BICD', course: '100', title: 'Genetics', term: 'Spring 2015', order: 3 },
      { department: 'BILD', course: '2', title: 'Multicellular Life', term: 'Spring 2015', order: 3 },
      { department: 'CHEM', course: '140B', title: 'Organic Chemistry II', term: 'Summer Session I 2015', order: 4 },
      { department: 'PHYS', course: '2B', title: 'Electricity and Magnetism', term: 'Summer Session II 2015', order: 5 },
      { department: 'PSYC', course: '104', title: 'Social Psychology', term: 'Fall 2015', order: 6 },
      { department: 'ANTH', course: '111', title: 'Advanced Principles of Human Evolution', term: 'Winter 2016', order: 7 },
      { department: 'ANTH', course: '141', title: 'The Evolution of Human Diet', term: 'Winter 2016', order: 7 },
      { department: 'ANTH', course: '102', title: 'Humans are Cultural Animals', term: 'Winter 2016', order: 7 },
      { department: 'CSE', course: '8A', title: 'Intro to Computer Science: Java I', term: 'Winter 2016', order: 7 },
      { department: 'CSE', course: '8B', title: 'Intro to Computer Science: Java II', term: 'Spring 2016', order: 8 },
      { department: 'CSE', course: '20', title: 'Intro to Discrete Mathematics', term: 'Spring 2016', order: 8 },
      { department: 'CSE', course: '12', title: 'Basic Data Structures and Object Oriented Design', term: 'Summer Session I 2016', order: 9 },
      { department: 'CSE', course: '15L', title: 'Software Tools and Techniques Lab', term: 'Summer Session I 2016', order: 9 },
      { department: 'MGT', course: '45', title: 'Principles of Accounting', term: 'Summer Session II 2016', order: 10 },
      { department: 'CSE', course: '21', title: 'Mathematics for Algorithms and Systems', term: 'Fall 2016', order: 11 },
      { department: 'CSE', course: '30', title: 'Computer Organization and Systems Programming', term: 'Fall 2016', order: 11 },
      { department: 'MATH', course: '18', title: 'Linear Algebra', term: 'Fall 2016', order: 11 },
      { department: 'CSE', course: '100', title: 'Advanced Data Structures', term: 'Winter 2017', order: 12 },
      { department: 'CSE', course: '105', title: 'Theory of Computability', term: 'Winter 2017', order: 12 },
      { department: 'CSE', course: '101', title: 'Design and Analysis of Algorithms', term: 'Spring 2017', order: 13 },
      { department: 'CSE', course: '140', title: 'Components and Design Techniques for Digital Systems', term: 'Spring 2017', order: 13 },
      { department: 'CSE', course: '140L', title: 'Digital Systems Laboratory', term: 'Spring 2017', order: 13 },
      { department: 'MATH', course: '109', title: 'Mathematical Reasoning', term: 'Spring 2017', order: 13 },
      { department: 'MATH', course: '103A', title: 'Modern Algebra I', term: 'Summer Session I 2017', order: 14 },
      { department: 'MATH', course: '103B', title: 'Modern Algebra II', term: 'Summer Session II 2017', order: 15 },
      { department: 'CSE', course: '110', title: 'Software Engineering', term: 'Fall 2017', order: 16 },
      { department: 'MATH', course: '20D', title: 'Intro to Differential Equations', term: 'Fall 2017', order: 16 },
      { department: 'CSE', course: '141', title: 'Intro to Computer Architecture', term: 'Winter 2018', order: 17 },
      { department: 'MATH', course: '170A', title: 'Introduction to Numerical Analysis: Linear Algebra', term: 'Winter 2018', order: 17 },
      { department: 'MATH', course: '170B', title: 'Introduction to Numerical Analysis: Approximation and Nonlinear Equations', term: 'Spring 2018', order: 18 },
      { department: 'MATH', course: '183', title: 'Statistical Methods', term: 'Spring 2018', order: 18 },
      { department: 'MATH', course: '184A', title: 'Combinatorics', term: 'Spring 2018', order: 18 },
      { department: 'ANTH', course: '23', title: 'Debating Multiculturalism', term: 'Summer Session I 2018', order: 19 },
      { department: 'MATH', course: '20E', title: 'Vector Calculus', term: 'Summer Session I 2018', order: 19 },
      { department: 'MATH', course: '168A', title: 'Combinatorial Game Theory', term: 'Summer Session II 2018', order: 20 },
    ],
  },
  {
    id: 'mesa',
    name: 'San Diego Community College',
    gpa: '4.00',
    termLabel: 'Semester',
    courses: [
      { department: 'ANTH', course: '103', title: 'Intro to Cultural Anthropology', term: 'Fall 2012', order: 1 },
      { department: 'HUMN', course: '106', title: 'World Religions', term: 'Fall 2012', order: 1 },
      { department: 'MUSI', course: '111', title: 'Jazz - History and Development', term: 'Fall 2012', order: 1 },
      { department: 'ASTR', course: '111', title: 'Descriptive Astronomy', term: 'Spring 2013', order: 2 },
      { department: 'GEOG', course: '102', title: 'Cultural Geography', term: 'Spring 2013', order: 2 },
      { department: 'MATH', course: '116', title: 'College Algebra', term: 'Spring 2013', order: 2 },
      { department: 'PHIL', course: '205', title: 'Critical Thinking and Writing', term: 'Spring 2013', order: 2 },
      { department: 'ANTH', course: '102', title: 'Intro to Physical Anthropology', term: 'Fall 2013', order: 3 },
      { department: 'CHEM', course: '152', title: 'Intro to General Chemistry', term: 'Fall 2013', order: 3 },
      { department: 'CHEM', course: '152L', title: 'Intro to General Chemistry Laboratory', term: 'Fall 2013', order: 3 },
      { department: 'SPAN', course: '101', title: '1st Course in Spanish', term: 'Fall 2013', order: 3 },
      { department: 'MATH', course: '150', title: 'Calculus with Analytic Geometry I', term: 'Fall 2013', order: 3 },
      { department: 'GEOG', course: '101', title: 'Physical Geography', term: 'Fall 2013', order: 3 },
      { department: 'CHEM', course: '200', title: 'General Chemistry I', term: 'Spring 2014', order: 4 },
      { department: 'CHEM', course: '200L', title: 'General Chemistry I Lab', term: 'Spring 2014', order: 4 },
      { department: 'MATH', course: '151', title: 'Calculus with Analytic Geometry II', term: 'Spring 2014', order: 4 },
      { department: 'PHYS', course: '195', title: 'Mechanics', term: 'Spring 2014', order: 4 },
      { department: 'CHEM', course: '201', title: 'General Chemistry II', term: 'Summer 2014', order: 5 },
      { department: 'CHEM', course: '201L', title: 'General Chemistry II Lab', term: 'Summer 2014', order: 5 },
    ],
  },
];
