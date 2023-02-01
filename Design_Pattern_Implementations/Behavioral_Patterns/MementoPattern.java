import java.util.*;
class WebPageMemento{
  private String content;
  public WebPageMemento(String content){
    this.content=content;
  }
  public String getContent(){
    return content;
  }
}
class WebPage{
  private String content;
  public void setContent(String content){
    this.content=content;
  }
  public String getContent(){
    return content;
  }
  public WebPageMemento savePage(){
    return new WebPageMemento(content);
  }
  public void restore(WebPageMemento pageMemento){
    content=pageMemento.getContent();
  }
}

class WebPageHistory{
  private final ArrayList<WebPageMemento> mementoList;
  public WebPageHistory(){
      this.mementoList=new ArrayList<>();
  }
  public void addPageMemento(WebPageMemento pageMemento){
    mementoList.add(pageMemento);
  }
  public WebPageMemento getPageMemento(int index){
    return mementoList.get(index);
  }
}
class MementoPattern{
  public static void main(String[] args){
    WebPage page=new WebPage();
    WebPageHistory pageHistory=new WebPageHistory();
    page.setContent("Welcome to google.com");
    pageHistory.addPageMemento(page.savePage());
    page.setContent("Welcome to instagram");
    pageHistory.addPageMemento(page.savePage());
    System.out.println("Current WebPage : " +page.getContent());
    page.restore(pageHistory.getPageMemento(0));
    System.out.println("Current WebPage : " +page.getContent());
  }
}
/*
Output-
Welcome to google.com
Welcome to instagram

*/