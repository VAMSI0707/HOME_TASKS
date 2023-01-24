interface Employee{
    String getName();
    String getEmailId();
}
class Intern{
    private String name;
    private String emailId;
    Intern(String name,String emailId){
        this.name=name;
        this.emailId=emailId;
    }
    String getName(){
        return name;
    }  
    String getEmailId(){
        return emailId;
    }
}
class EmployeeAdapter implements Employee{
    Intern intern;
    EmployeeAdapter(Intern intern){
        this.intern=intern;
    }
    public String getName(){
        return intern.getName();
    }  
    public String getEmailId(){
        return intern.getEmailId();
    }
    
}
class AdapterPattern{
    public static void main(String args[]){
    Intern intern1=new Intern("Vamsi","vs007@gmail.com");
    Employee employee=new EmployeeAdapter(intern1);
    System.out.println(employee.getName());
    System.out.println(employee.getEmailId());
    }
}
/*
 Output-
 Vamsi
 vs007@gmail.com
 
 */