class Student {
    constructor(name, gpa) {
        this.name = name; 
        this.gpa = gpa;
    }
}
class ScholarshipScheme {
    constructor(eligibilityGPA = 7.5) {
        this.eligibilityGPA = eligibilityGPA;
    }
    checkEligibility(student) {
        if (student.gpa >= this.eligibilityGPA) {
            console.log(`Congratulations, ${student.name}! You are eligible for the scholarshipscheme.`);
        } else {
            console.log(`Sorry, ${student.name}. You are not eligible for the scholarshipscheme.`);
        }
    }
}
const student1 = new Student("Sudheer", 8.0);
const student2 = new Student("Subash", 7.0);
const scholarshipscheme = new ScholarshipScheme();
scholarshipscheme.checkEligibility(student1); 
scholarshipscheme.checkEligibility(student2); 
