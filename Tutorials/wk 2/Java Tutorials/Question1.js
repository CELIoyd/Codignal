import java.util.Scanner;

public class Question1{

	public static void main(String[] args) {
		  System.out.println("Hello");
		  System.out.println("Let's start to convert degree celsius to degree fahrenheit");
		  Scanner scanner = new Scanner(System.in);
		  System.out.print("Enter your digit: ");
		  int digit = scanner.nextInt();
		  System.out.println("let's convert to degree fahrenheit");
		  Double temperature = digit * 1.8 + 32;
		  System.out.println("this is our result");
		  System.out.println(digit + " degrees celsius is " + temperature + " in fahrenheit" );
	}
}