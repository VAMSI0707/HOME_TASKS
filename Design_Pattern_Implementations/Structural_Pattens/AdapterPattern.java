/*
DESCRIPTION-
Generally we know that interns are considered as employees, so we don't actually need a adapter pattern 
as intern and employee are compatible in organisations like epam.But the code I wrote below was for 
organisations that hire interns without employee benefits like salary,insurance,laptop etc.So, in such 
cases intern and employee are incompatible.So,we need a adapter class tomake employee compatible with 
intern.
 */
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