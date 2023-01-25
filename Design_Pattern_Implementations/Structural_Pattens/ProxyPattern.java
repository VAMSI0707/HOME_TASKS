interface Bank{
    void deposit(double amount);
    void withdraw(double amount);
    double checkBalance();
}
class HDFC implements Bank{
    private double balance;
    public HDFC(){
        this.balance=0;
    }
    public void deposit(double depositedAmount){
        this.balance+=depositedAmount;
        System.out.println("An amount of "+depositedAmount+" was credited");
    }
    public void withdraw(double withdrawAmount){
        if(this.balance>0 && this.balance>=withdrawAmount){
            this.balance-=withdrawAmount;
            System.out.println("An amount of "+withdrawAmount+" was debited");
        }
        else{
            System.out.println("Less balance available than required withdrawal amount");
        }
    }
    public double checkBalance(){
        return this.balance;
    }
}
class HDFCATM implements Bank{
    private HDFC gunturHDFC;
    public HDFCATM(){
        this.gunturHDFC=new HDFC();
    }
    public void deposit(double depositedAmount){
        this.gunturHDFC.deposit(depositedAmount);
    }
    public void withdraw(double withdrawAmount){
        this.gunturHDFC.withdraw(withdrawAmount);
    }
    public double checkBalance(){
        return this.gunturHDFC.checkBalance();
    }
}
class ProxyPattern{
    public static void main(String[] args){
        Bank hdfcAtm=new HDFCATM();
        hdfcAtm.withdraw(10000);
        hdfcAtm.deposit(50000);
        hdfcAtm.withdraw(10000);
        System.out.println("Available balance is "+hdfcAtm.checkBalance());
        


    }
}
/*
Output-
Less balance available than required withdrawal amount
An amount of 50000.0 was credited
An amount of 10000.0 was debited
Available balance is 40000.0
*/