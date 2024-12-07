import java.util.Scanner;

public class Question3{

	public static void main(String[] args){
		System.out.println("Enter your age: ");
		Scanner scanner = new Scanner(System.in);
		int Yage = scanner.nextInt();
		System.out.println("Enter your Sister's age");
		int Sage = scanner.nextInt();
		System.out.println("Enter your Teacher's age");
		int Tage = scanner.nextInt();
		int sum = Yage + Sage + Tage;
		System.out.println("This is the sum of your ages");
		System.out.println(sum);
		System.out.println("This is the average of your numbers");
		System.out.println(sum/3);
		





	}
}