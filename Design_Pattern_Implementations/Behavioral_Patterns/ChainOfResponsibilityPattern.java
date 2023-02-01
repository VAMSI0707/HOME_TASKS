interface LoanApprover{
    void setSuperior(LoanApprover superior);
    void approveLoan(double loanAmount);
}
class BankManager implements LoanApprover{
    private LoanApprover superior;
    public void setSuperior(LoanApprover superior){
        this.superior=superior;
    }
    public void approveLoan(double loanAmount){
        if(loanAmount<=500000){
            System.out.println("A loan of amount "+loanAmount+" is approved by manager"); 
        }
        else{
            superior.approveLoan(loanAmount);
        }
    }
}
class BankDirector implements LoanApprover{
    private LoanApprover superior;
    public void setSuperior(LoanApprover superior){
        this.superior=superior;
    }
    public void approveLoan(double loanAmount){
        if(loanAmount<=5000000){
            System.out.println("A Loan of amount "+loanAmount+" is approved by Director"); 
        }
        else{
            superior.approveLoan(loanAmount);
        }
    }
}
class BankCEO implements LoanApprover{
    private LoanApprover superior;
    public void setSuperior(LoanApprover superior){
        
    }
    public void approveLoan(double loanAmount){
        if(loanAmount<=50000000){
            System.out.println("A Loan of amount "+loanAmount+" is approved by CEO"); 
        }
        else{
            System.out.println("A Loan of amount "+loanAmount+" cannot be processed further");
        }
    }
}
class CorPattern{
    public static void main(String[] args){
        LoanApprover manager=new BankManager();
        LoanApprover director=new BankDirector();
        LoanApprover ceo=new BankCEO();
        manager.setSuperior(director);
        director.setSuperior(ceo);
        manager.approveLoan(100000);
        manager.approveLoan(1000000);
        manager.approveLoan(100000000);
    }

}
/*
Output-
A loan of amount 100000.0 is approved by manager
A Loan of amount 1000000.0 is approved by Director
A Loan of amount 100000000.0 cannot be processed further
*/