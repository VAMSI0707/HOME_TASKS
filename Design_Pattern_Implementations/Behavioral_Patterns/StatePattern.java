interface EmployeeState{
    void getEmployeeState();
}
class WorkingEmployee implements EmployeeState{
    public void getEmployeeState(){
        System.out.println("Employee is working on front-end");
    }
}
class TerminatedEmployee implements EmployeeState{
    public void getEmployeeState(){
        System.out.println("Employee has been terminated");
    }
}
class Employee {
    private EmployeeState employeeState;
    public void setState(EmployeeState employeeState){
        this.employeeState=employeeState;
    }
    public void getEmployeeState(){
        this.employeeState.getEmployeeState();
    }
}

class StatePattern{
    public static void main(String[] args){
        Employee employee1=new Employee();
        employee1.setState(new WorkingEmployee());
        employee1.getEmployeeState();
        employee1.setState(new TerminatedEmployee());
        employee1.getEmployeeState();
    }
}
/*
Output-
Employee is working on front-end
Employee has been terminated
*/
