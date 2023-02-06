interface Expression{
  int interpret();
}
class Number implements Expression{
  private int number;
  public Number(int number){
    this.number = number;
  }
  public int interpret(){
    return number;
  }
}
class AdditionExpression implements Expression{
  private Expression leftNumber;
  private Expression rightNumber;
  public AdditionExpression(Expression leftNumber,Expression rightNumber){
    this.leftNumber=leftNumber;
    this.rightNumber=rightNumber;
  }
  public int interpret() {
    return leftNumber.interpret()+rightNumber.interpret();
  }
}
class InterpreterPattern{
  public static void main(String[] args){
    Expression expression1=new AdditionExpression(new Number(3),new Number(4));
    System.out.println(expression1.interpret());
  }
}
/*
Output-
7
*/