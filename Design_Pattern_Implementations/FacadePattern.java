class Computer{
    private Os os;
    private Memory memory;
    private String userPassword;
    public Computer(){
        this.os=new Os();
        this.memory=new Memory();
    }
    public void startComputer(){
        os.start();
        memory.start();
        this.userPassword=memory.getPassword();
    }
    public void shutDownComputer(){
        os.shutDown();
        memory.shutDown();
        System.out.println("Shutting down...");
    }
    public void validateUser(String givenPassword){
        if(userPassword.equals(givenPassword)){
            System.out.println("Welcome User");
        }
        else{
            System.out.println("Invalid Password.Please try again");
        }
    }
}
class Os{
    public void start(){

    }
    public void shutDown(){

    }
}
class Memory{
    public void start(){

    }
    public void shutDown(){
        
    }
    public String getPassword(){
        return "1234";
    }

}
class FacadePattern{
    public static void main(String[] args){
    Computer computer=new Computer();
    computer.startComputer();
    computer.validateUser("1234");
    computer.shutDownComputer();
    }

}
/*
Output-
Welcome User
Shutting down...
*/