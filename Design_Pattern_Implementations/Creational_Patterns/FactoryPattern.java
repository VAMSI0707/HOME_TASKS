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
class DeveloperFactory{
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
class FactoryPattern{
    public static void main(String[] args){
        DeveloperFactory developerFactory=new DeveloperFactory();
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