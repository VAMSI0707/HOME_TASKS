import java.util.*;
interface ChatGroup{
    void sendMessage(User sender,String message);
    void addUser(User user);
    void removeUser(User user);
}

class JavaScriptChatGroup implements ChatGroup{
    private ArrayList<User> userList;
    public JavaScriptChatGroup(){
        this.userList=new ArrayList<>();
    }
    public void addUser(User user){
        this.userList.add(user);
    }
    public void removeUser(User user){
        this.userList.remove(user);
    }
    public void sendMessage(User sender,String message){
        for(var user:this.userList){
            if(user!=sender){
                user.receive(message);
            }
        }
    }
    
}
interface User{
    void send(String message,ChatGroup chatGroup);
    void receive(String message);
}
class ChatGroupUser implements User{
    private String name;
    public ChatGroupUser(String name){
        this.name=name;
    }
    public void send(String message,ChatGroup chatGroup){
        System.out.println("Sending message : "+message);
        chatGroup.sendMessage(this,message);
    }
    public void receive(String message){
        System.out.println(this.name+" received "+message);
    }
}
class MediatorPattern{
    public static void main(String[] args){
        ChatGroup jsChatGroup=new JavaScriptChatGroup();
        User user1=new ChatGroupUser("Vamsi");
        User user2=new ChatGroupUser("Sashank");
        User user3=new ChatGroupUser("Ram");
        jsChatGroup.addUser(user1);
        jsChatGroup.addUser(user2);
        jsChatGroup.addUser(user3);
        user1.send("Hello",jsChatGroup);
    
    }
}
/*
output-
Sending message : Hello
Sashank received Hello 
Ram received Hello
*/