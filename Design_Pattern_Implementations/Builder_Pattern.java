class Employee{
    //Mandatory fields
    private final String firstName;
    private final String lastName;
    //Optional fields
    private final String middleName;
    private final String department;

    Employee(EmployeeBuilder builder){
        this.firstName=builder.firstName;
        this.lastName=builder.lastName;
        this.middleName=builder.middleName;
        this.department=builder.department;
    }
    public String getFirstName(){
        return firstName;
    }
    public String getLastName(){
        return lastName;
    }
    public String getDepartment(){
        return department;
    }
    public String getMiddleName(){
        return middleName;
    }
    public String toString(){
        return "First name : "+ firstName +" Middle name : "+middleName+" Last name : "+lastName+" Department : "+department;
    }
}
class EmployeeBuilder{
    //Mandatory fields
    String firstName;
    String lastName;
    //Optional fields
    String middleName;
    String department;
    public EmployeeBuilder(String firstName,String lastName){
        this.firstName=firstName;
        this.lastName=lastName;
    }
    public EmployeeBuilder setDepartment(String department){
        this.department=department;
        return this;
    }
    public EmployeeBuilder setMiddleName(String middleName){
        this.middleName=middleName;
        return this;
    }
    public Employee createEmployee(){
        return new Employee(this);
    }
}
class BuilderPattern{
    public static void main(String args[]){
        EmployeeBuilder employeebuilder=new EmployeeBuilder("Vamsi","Kalisetty");
        Employee employee=employeebuilder.setMiddleName("Sashank").setDepartment("DEP").createEmployee();
        System.out.println(employee);
        
    }
}
/*
 Output-
 First name : Vamsi Middle name : Sashank Last name : Kalisetty Department : DEP
 */