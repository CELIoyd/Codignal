import java.util.Scanner;

public class Question2{
	
	public static void main(String[] args){
		System.out.println("Let's find the area of a circle");
		System.out.println("you shall select your radius");
		Scanner scanner = new Scanner(System.in);
		System.out.println("Enter your radius: ");
		int radius = scanner.nextInt();
		System.out.println("we know the formula so let's just get to the result");
		System.out.println("This is our result");
		double answer = 3.14 * radius * radius;
		System.out.println(answer);
	}
}