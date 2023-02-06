interface Command{
    void execute();
}
class Television{
    public void switchOn(){
        System.out.println("Switching on TV");
    }
    public void switchOff(){
        System.out.println("Switching off TV");
    }
}
class SwitchOnTV implements Command{
    private Television tv;
    public SwitchOnTV(Television tv){
        this.tv=tv;
    }
    public void execute(){
        tv.switchOn();
    }

}
class SwitchOffTV implements Command{
    private Television tv;
    public SwitchOffTV(Television tv){
        this.tv=tv;
    }
    public void execute(){
        tv.switchOff();
    }

}
class Remote{
    private Command command;
    public void setOnCommand(Command command){
        this.command=command;
    }
    public void setOffCommand(Command command){
        this.command=command;
    }
    public void onClick(){
        command.execute();
    }
}
class CommandPattern{
    public static void main(String[] args){
        Television tv =new Television();
        Remote tvRemote=new Remote();
        Command onCommand=new SwitchOnTV(tv);
        Command offCommand=new SwitchOffTV(tv);
        tvRemote.setOnCommand(onCommand);
        tvRemote.onClick();
        tvRemote.setOffCommand(offCommand);
        tvRemote.onClick();

    }
}
/*
Output-
Switching on TV
Switching off TV
*/