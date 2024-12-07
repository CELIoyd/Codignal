import java.util.Scanner;

public class DataTypes {

	 public static void main(String[] args) {
	 	long money;
	 	short height;
	 	int volt;

	 	String name; 
	 	boolean eaten;
	 	int[] scores = {59, 52, 53, 96 ,91, 92}; 
		String[] names = {"Lloyd","George","Zara"};

		 money = 13000;
		 height = 4;
		 volt = 67;
		 name = "chukwuemerie";
		 eaten = true;

		 Scanner scanner = new Scanner(System.in);
		 System.out.print("Enter thy age");
		 int age = scanner.nextInt();

		 System.out.println("Hello, " + name + "! You are " + age + "years old." );
 
	}	
}