import java.util.*;
interface Component{
    void addComponent(Component component);
    void removeComponent(Component component);
    void showComponent();
}
class Leaf implements Component{
    public void addComponent(Component component){

    }
    public void removeComponent(Component component){

    }
    public void showComponent(){
        System.out.println("In leaf node");
    }
}
class Composite implements Component{
    private ArrayList<Component> child=new ArrayList<>();
    public void addComponent(Component component){
        child.add(component);
    }
    public void removeComponent(Component component){
        child.remove(component);
    }
    public void showComponent(){
        System.out.println("In Composite node and children of the composite are:");
        for(var component : child){
            component.showComponent();
        }
        System.out.println("Composite node ended");


    }
}
class CompositePattern{
    public static void main(String[] args){
        Component leaf1=new Leaf();
        Component leaf2=new Leaf();
        Component composite=new Composite();
        composite.addComponent(leaf1);
        composite.addComponent(leaf2);
        composite.showComponent();
        composite.removeComponent(leaf2);
        composite.showComponent();

    }
}
/*
Output-
In Composite node and children of the composite are:
In leaf node
In leaf node
Composite node ended
"After remove operation":
In Composite node and children of the composite are:
In leaf node
Composite node ended
*/