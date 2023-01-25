interface Prototype{
    public Prototype clone();
}
class Employee implements Prototype{
    private String name;
    Employee(String name){
        this.name=name;
    }
    public void setName(String name){
        this.name=name;
    }
    public String getName(){
        return name;
    }
    public Prototype clone(){
        return new Employee(name);
    }
}
class PrototypePattern{
    public static void main(String[] args){
        Employee employee1=new Employee("Vamsi");
        Employee employee2=(Employee) employee1.clone();
        System.out.println(employee1.getName());
        System.out.println(employee2.getName());
        employee2.setName("Sashank");
        System.out.println(employee2.getName());

    }
}
/*
 Output-
 Vamsi
 Vamsi
 Sashank
 */