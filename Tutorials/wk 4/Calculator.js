import java.util.Scanner;

public class Calculator{
	
	public static void main(String[] args) {
		

		S
		System.out.println("Enter your operation\n1. Addition \n2. subtraction \n3. Multiplication \n4. division");
		Scanner scanner = new Scanner(System.in);
		System.out.println("Enter an option to continue");
		
		int option = scanner.nextInt();
		
		switch(option){
		
		case 1:
			System.out.println("Enter your first number: ");
			int FirstNum = scanner.nextInt();
			System.out.println("Enter Your second number: ");
			int SecondNum = scanner.nextInt();
			int sum = FirstNum + SecondNum;
			System.out.println("the sum is " + sum);
			break;

		case 2:
			System.out.println("Enter your First Number: ");
			FirstNum  = scanner.nextInt();	 
	   		System.out.println("Enter Your second number: ");	
	   	    SecondNum = scanner.nextInt();
	   		int difference = FirstNum - SecondNum;
	   		System.out.println("The difference is " + difference);
	   		break;

	   	case 3:
	   		System.out.println("Enter your first number: ");
	   	    FirstNum = scanner.nextInt();
	   		System.out.println("Enter your second number: ");
	   	    SecondNum = scanner.nextInt();
	   		int product = FirstNum * SecondNum;
	   		System.out.println("The product is " + product);
	   		break;

	   	case 4:
	   		System.out.println("Enter your first number: ");
	   		FirstNum = scanner.nextInt();
	   		System.out.println("Enter your second number: ");
	   		SecondNum = scanner.nextInt();
	   		int quotient = FirstNum / SecondNum;
	   		System.out.println("the quotient is " + quotient);
	   		break;

	   	default:
	   		System.out.println("Get out of my sight!!!!!");
	   		break;			




	   }	
	}
}