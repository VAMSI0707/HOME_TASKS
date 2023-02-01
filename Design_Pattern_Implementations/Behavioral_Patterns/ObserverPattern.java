import java.util.*;
interface Subscriber{
    void recieveMagazine();
}
class MagazineSubscriber implements Subscriber{
    private String subscriberName;
    public MagazineSubscriber(String subscriberName){
        this.subscriberName=subscriberName;
    }
    public void recieveMagazine(){
        System.out.println("Magazine received by "+subscriberName);
    }
}
interface Magazine{
    void addSubscriber(Subscriber subscriber);
    void removeSubscriber(Subscriber subscriber);
    void sendMagazine();
}
class SportsMagazine implements Magazine{
    private ArrayList<Subscriber> subscriberList=new ArrayList<>();
    public void addSubscriber(Subscriber subscriber){
        subscriberList.add(subscriber);
    }
     public void removeSubscriber(Subscriber subscriber){
        subscriberList.remove(subscriber);
    }
    public void sendMagazine(){
        for(var subscriber:subscriberList){
            subscriber.recieveMagazine();
        }
    }
}
class ObserverPattern{
    public static void main(String[] args){
        Magazine sportsMagazine=new SportsMagazine();
        Subscriber subscriber1=new MagazineSubscriber("Vamsi");
        Subscriber subscriber2=new MagazineSubscriber("Sashank");
        sportsMagazine.addSubscriber(subscriber1);
        sportsMagazine.addSubscriber(subscriber2);
        sportsMagazine.sendMagazine();
        sportsMagazine.removeSubscriber(subscriber2);
        sportsMagazine.sendMagazine();

    }
}
/*
Output-
Magazine received by Vamsi
Magazine received by Sashank
(After removing sashank as a subscriber)
Magazine received by Vamsi

*/