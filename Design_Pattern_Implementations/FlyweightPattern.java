import java.util.*;
interface Vehicle{
    void displayVehicle();
}
class Car implements Vehicle{
    private String brand;
    public Car(String model){
        this.brand=brand;

    }
    public void displayVehicle(){
        System.out.println("Car belongs to "+brand+" company");
    }
}
class Bike implements Vehicle{
    private String brand;
    public Bike(String model){
        this.brand=brand;

    }
    public void displayVehicle(){
        System.out.println("Bike belongs to "+brand+" company");
    }
}
class VehicleFactory{
    private HashMap<String,Vehicle> vehiclesMap=new HashMap<>();
    public Vehicle getVehicle(String model,String brand){
        Vehicle vehicle=vehiclesMap.get(model);
        if(vehicle==null){
            switch(model){
                case "car":
                    vehicle=new Car(brand);
                    break;
                case "bike":
                    vehicle=new Bike(brand);
                    break;
                
    
            }
        vehiclesMap.put(model,vehicle);
        }
        return vehicle;
        
    }
}
class FlyweightPattern{
    public static void main(String[] args){
        VehicleFactory factory=new VehicleFactory();
        Vehicle benzCar=factory.getVehicle("car","mercedes");
        Vehicle dukeBike=factory.getVehicle("bike","Duke");
        Vehicle benzCar2=factory.getVehicle("car","mercedes");
        System.out.println("HashCode of benzCar "+ benzCar.hashCode());
        System.out.println("HashCode of benzCar2 "+ benzCar2.hashCode());


    }
}

/*
Output-
HashCode of benzCar  1523554304
HashCode of benzCar2 1523554304
*/