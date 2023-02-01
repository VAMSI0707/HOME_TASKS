import java.util.*;
interface Payment{
    void payAmount(double amount);
}
class CreditCardPayment implements Payment{
    private String name;
    private int cvv;
    private String creditCardNumber;
    CreditCardPayment(String creditCardNumber,String name,int cvv){
        this.name=name;
        this.cvv=cvv;
        this.creditCardNumber=creditCardNumber;
    }
    public void payAmount(double amount){
        System.out.println("An amount of "+amount+" received via credit card");
    }
}
class UPIPayment implements Payment{
    private String upiId;
    UPIPayment(String upiId){
        this.upiId=upiId;
    }
    public void payAmount(double amount){
        System.out.println("An amount of "+amount+" received via UPI");
    }
}
class ShoppingCart{
    private ArrayList<Item> itemList;
    
    public ShoppingCart(){
        this.itemList=new ArrayList<>();
    }
    public void addItem(Item item){
        itemList.add(item);
    }
    public void removeItem(Item item){
        itemList.remove(item);
    }
    public double calculateOrderAmount(){
        double total=0;
        for(var item:itemList){
            total+=item.getPrice();
        }

        return total;
    }
    public void pay(Payment paymentMethod){
        paymentMethod.payAmount(calculateOrderAmount());
    }
}
class Item{
    private double itemPrice;
    public Item(double itemPrice){
        this.itemPrice=itemPrice;
    }
    public double getPrice(){
        return this.itemPrice;
    }
}
class StrategyPattern{
    public static void main(String[] args){
        ShoppingCart itemCart=new ShoppingCart();
        Item item1=new Item(334);
        Item item2=new Item(666);
        itemCart.addItem(item1);
        itemCart.addItem(item2);
        itemCart.calculateOrderAmount();
        Payment creditCardPayment=new CreditCardPayment("234567890123","VAMSI K",111);
        itemCart.pay(creditCardPayment);
    }
}
/*
Output-
An amount of 1000.0 received via credit card
*/