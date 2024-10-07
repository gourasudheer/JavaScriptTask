class Loan {
    constructor(employeeName, loanAmount, monthlyIncome, accountBalance) {
        this.employeeName = employeeName;
        this.loanAmount = loanAmount;
        this.monthlyIncome = monthlyIncome;
        this.accountBalance = accountBalance;
        this.status = "Pending";
    }
}
class LoanManager {
    constructor(minIncomeRequirement = 30000, minBalanceRequirement = 5000) {
        this.minIncomeRequirement = minIncomeRequirement;
        this.minBalanceRequirement = minBalanceRequirement;
        this.loanApplications = []; 
    }
    applyLoan(employeeName, loanAmount, monthlyIncome, accountBalance) {
        const loan = new Loan(employeeName, loanAmount, monthlyIncome, accountBalance);
        this.loanApplications.push(loan);
        console.log(`Loan application submitted for ${employeeName} for amount: ${loanAmount}`);
    }
    approveLoan(employeeName) {
        const loan = this.loanApplications.find(l => l.employeeName === employeeName && l.status === "Pending");

        if (loan) {
            if (loan.monthlyIncome >= this.minIncomeRequirement && loan.accountBalance >= this.minBalanceRequirement) {
                loan.status = "Approved";
                console.log(`Loan approved for ${loan.employeeName} for amount: ${loan.loanAmount}`);
            } else {
                console.log(`Loan application for ${loan.employeeName} cannot be approved. Eligibility criteria not met.`);
            }
        } else {
            console.log(`No pending loan application found for ${employeeName}.`);
        }
    }
    rejectLoan(employeeName) {
        const loan = this.loanApplications.find(l => l.employeeName === employeeName && l.status === "Pending");

        if (loan) {
            loan.status = "Rejected";
            console.log(`Loan rejected for ${loan.employeeName}.`);
        } else {
            console.log(`No pending loan application found for ${employeeName}.`);
        }
    }
    viewLoanStatus(employeeName) {
        const loan = this.loanApplications.find(l => l.employeeName === employeeName);

        if (loan) {
            console.log(`Loan status for ${employeeName}: ${loan.status}`);
        } else {
            console.log(`No loan application found for ${employeeName}.`);
        }
    }
}
const loanManager = new LoanManager();
loanManager.applyLoan("Sudheer", 50000, 35000, 10000);
loanManager.applyLoan("Mallesh", 60000, 40000, 8000);
loanManager.applyLoan("Sagar", 50000, 30000, 2500);
loanManager.approveLoan("Sudheer"); 
loanManager.approveLoan("Mallesh");   
loanManager.approveLoan("Sagar");  
loanManager.viewLoanStatus("Sudheer");  
loanManager.viewLoanStatus("Mallesh");     
loanManager.viewLoanStatus("Sagar");
