abstract class Payment{
    void submitDetails();
    void verifyOtp();
    void showPaymentStatus();
    public void pay(){
        submitDetails();
        verifyOtp();
        showPaymentStatus();
    }
}
class CreditCardPayment extends Payment{
    public void submitDetails(){
        System.out.println("Enter name,credit card no.,cvv,amount,captcha and click submit");
        System.out.println("Please enter the otp sent to your registerd mobile number and click submit ");
    }
    public void verifyOtp(){
        System.out.println("Payment Processing.....");
    }
    public void showPaymentStatus(){
        System.out.println("Payment Successful");
    }
}
class NetBanking extends Payment{
    private boolean paymentSuccess=false;
    public void submitDetails(){
        System.out.println("Enter user name,amount,captcha and click submit");
        System.out.println("Please enter the otp sent to your registerd mobile number and click submit ");
    }
    public void verifyOtp(){
        System.out.println("Payment Processing.....");
    }
    public void showPaymentStatus(){
        System.out.println("Payment Successful");
    }
}
class TemplatePattern{
    public static void main(String[] args){
        Payment creditCardPayment=new CreditCardPayment();
        creditCardPayment.pay();
    }
}
/*
Output-
Enter name,credit card no.,cvv,amount,captcha and click submit
Please enter the otp sent to your registerd mobile number and click submit 
Payment Processing.....
Payment Successful
*/