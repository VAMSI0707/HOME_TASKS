interface Employee{
    void getEmployeeInfo();
}
class FullTimeEmployee implements Employee{
    private String name;
    private String department;
    private String project;
    public FullTimeEmployee(String name,String department,String project){
        this.name=name;
        this.department=department;
        this.project=project;
    }
    public void getEmployeeInfo(){
        System.out.println("I am "+name+" from "+department+" working on "+project+" project");
    }
}
class Intern implements Employee{
    private String name;
    private String department;
    private String skill;
    public Intern(String name,String department,String skill){
        this.name=name;
        this.department=department;
        this.skill=skill;
    }
    public void getEmployeeInfo(){
        System.out.println("I am "+name+" from "+department+" being trained on "+skill);
    }
}
class BridgePattern{
    public static void main(String args[]){
        Employee employee1=new FullTimeEmployee("Vamsi","JavaScript","MasterCard");
        Employee employee2=new Intern("Sashank","R&D","JavaScript");
        employee1.getEmployeeInfo();
        employee2.getEmployeeInfo();
        

    }
}
/*
 Output-
 I am Vamsi from JavaScript working on MasterCard project
 I am Sashank from R&D being trained on JavaScript

 */