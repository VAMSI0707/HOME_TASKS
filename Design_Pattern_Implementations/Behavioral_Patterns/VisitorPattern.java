interface InsuranceVisitor{
    void visitHealthInsurance(HealthInsurance healthInsurance);
    void visitLifeInsurance(LifeInsurance lifeInsurance);
}
interface Insurance{
    void accept(InsuranceVisitor visitor);
    double getCost();
}
class HealthInsurance implements Insurance{
    private double cost;
    HealthInsurance(double cost){
        this.cost=cost;
    }
    public double getCost(){
        return cost;
    }
    public void accept(InsuranceVisitor visitor){
        visitor.visitHealthInsurance(this);
    }
}
class LifeInsurance implements Insurance{
    private double cost;
    LifeInsurance(double cost){
        this.cost=cost;
    }
    public double getCost(){
        return cost;
    }
    public void accept(InsuranceVisitor visitor){
        visitor.visitLifeInsurance(this);
    }
}
class InsuranceReport implements InsuranceVisitor{
    private double totalCost=0;
    public void visitHealthInsurance(HealthInsurance healthInsurance){
        totalCost+=healthInsurance.getCost();
        System.out.println("Health insurance cost : " +healthInsurance.getCost());
    }
    public void visitLifeInsurance(LifeInsurance lifeInsurance){
        totalCost+=lifeInsurance.getCost();
        System.out.println("Life insurance cost : " +lifeInsurance.getCost());
    }
    double getTotalCost(){
        return totalCost;
    }
}

class VisitorPattern{
    public static void main(String[] args){
        Insurance[] insuranceList = {new HealthInsurance(10000),new LifeInsurance(20000)};
        InsuranceReport visitor=new InsuranceReport();
        for (var insurance:insuranceList){
            insurance.accept(visitor);
        }
        System.out.println("Total cost of insurances : " + visitor.getTotalCost());
    }
}
/*
Output-
Health insurance cost : 10000.0
Life insurance cost : 20000.0
Total cost of insurances : 30000.0
*/