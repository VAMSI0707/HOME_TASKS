/*
DESCRIPTION-
Even though the examples of factory and abstractfactory may seem the same the key difference I observed is
that abstraactfactory can be used for a family of objects(ex:employee->developer,tester).This abstract
factory example can be easily extended for testers too which is not possible with Factory pattern example.
 */
interface Developer{
    public String getJobDescription();
}
class FrontendDeveloper implements Developer{
    public String getJobDescription(){
        return "Works on JavaScript";
    }
}
class JavaDeveloper implements Developer{
    public String getJobDescription(){
        return "Works on Java";
    }
}
class PythonDeveloper implements Developer{
    public String getJobDescription(){
        return "Works on Python";
    }
}
interface AbstractFactory{
    Developer getDeveloper(String developerType);
}
class DeveloperFactory implements AbstractFactory{
    public Developer getDeveloper(String developerType){
        switch(developerType){
            case "frontend":
                return new FrontendDeveloper();
            case "java":
                return new JavaDeveloper();
            case "python":
                return new PythonDeveloper();
            default:return null;
    
        }
    }
    
}
class EmployeeFactoryProducer{
    public static AbstractFactory getFactoryType(String jobType){
        switch(jobType){
            case "developer":
                return new DeveloperFactory();
            default:return null;
        }

    }
}
class FactoryPattern{
    public static void main(String[] args){
        AbstractFactory developerFactory=EmployeeFactoryProducer.getFactoryType("developer");
        Developer developer1=developerFactory.getDeveloper("frontend");
        System.out.println(developer1.getJobDescription());
        Developer developer2=developerFactory.getDeveloper("java");
        System.out.println(developer2.getJobDescription());
    }
}
/*
Output-
Works on JavaScript
Works on Java
*/