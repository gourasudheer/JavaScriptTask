class Loan {
    constructor(loanAmount, interestRate, loanTerm) {
      this.loanAmount = loanAmount; 
      this.interestRate = interestRate / 100; // we are converting interest rate percentage to decimal point 
      this.loanTerm = loanTerm; 
      this.emisPaid = 0; 
    }
    calculateMonthlyPayment() {
      const monthlyInterestRate = this.interestRate / 12; 
      const numberOfMonths = this.loanTerm * 12; 
  
      // formula: P * r * (1 + r)^n / [(1 + r)^n - 1]
      const emi = (this.loanAmount * monthlyInterestRate * Math.pow((1 + monthlyInterestRate), numberOfMonths)) /
                  (Math.pow((1 + monthlyInterestRate), numberOfMonths) - 1);
      
      return emi.toFixed(2);
    }
    payEMI() {
      this.emisPaid += 1;
      this.emisPaid +=30;
    }
    checkLoanStatus() {
        const monthlyEMI = this.calculateMonthlyPayment();  // Get the calculated EMI
        const totalEMIs = this.loanTerm * 12;  // Total number of EMIs
        const paidAmount = this.emisPaid * monthlyEMI;  // Total paid so far
        const remainingEMIs = totalEMIs - this.emisPaid;  // EMIs left to be paid
        const remainingAmount = remainingEMIs * monthlyEMI;  // Remaining balance
    
        // Log loan status instead of returning
        console.log("Loan Status:");
        console.log("EMIs Paid: " + this.emisPaid);
        console.log("Remaining EMIs: " + remainingEMIs);
        console.log("Paid: ₹" + paidAmount.toFixed(2));
        console.log("Remaining Amount: ₹" + remainingAmount.toFixed(2));
      }
    
    }
  
  // Example usage:
  const loan = new Loan(500000, 6.3, 10); // Loan amount: 500000, Interest rate: 7.5%, Loan term: 10 years
  console.log("Display Monthly EMI:", loan.calculateMonthlyPayment()); // Calculate and display monthly EMI
  loan.payEMI(); // Pay one EMI
loan.payEMI();
  console.log("Loan Status:", loan.checkLoanStatus()); // Check loan status after 2 EMIs
  