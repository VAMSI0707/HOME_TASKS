interface SalaryCalculator{
    double calculateSalary();
}
class BaseSalary implements SalaryCalculator{
    private double baseSalary;
    public BaseSalary(double baseSalary){
        this.baseSalary=baseSalary;
    }
    public double calculateSalary(){
        return baseSalary;
    }
}
class SalaryDecorator implements SalaryCalculator{
    private SalaryCalculator salaryCalculator;
    public SalaryDecorator(SalaryCalculator salaryCalculator){
        this.salaryCalculator=salaryCalculator;
    }
    public double calculateSalary(){
        return salaryCalculator.calculateSalary();
    }
}
class Bonus extends SalaryDecorator{
    private double bonus;
    public Bonus(SalaryCalculator salaryCalculator,double bonus){
        super(salaryCalculator);
        this.bonus=bonus;
    }
    public double calculateSalary(){
        return super.calculateSalary()+bonus;
    }
}
class Allowances extends SalaryDecorator{
    private double allowance;
    public Allowances(SalaryCalculator salaryCalculator,double allowance){
        super(salaryCalculator);
        this.allowance=allowance;
    }
    public double calculateSalary(){
        return super.calculateSalary()+allowance;
    }
    
}
class EmployeePfContribution extends SalaryDecorator{
    private double pfContribution;
    public EmployeePfContribution(SalaryCalculator salaryCalculator,double pfContribution){
        super(salaryCalculator);
        this.pfContribution=pfContribution;
    }
    public double calculateSalary(){
        return super.calculateSalary()-pfContribution;
    }
    
}
class DecoratorPattern{
    public static void main(String[] args){
        SalaryCalculator employeeSalary=new BaseSalary(100000);
        employeeSalary=new Bonus(employeeSalary,10000);
        employeeSalary=new Allowances(employeeSalary,500);
        employeeSalary=new EmployeePfContribution(employeeSalary,5000);
        System.out.println(employeeSalary.calculateSalary());
    }
}

/*
Output-
105500.0
*/