import java.util.Scanner;

public class Coditional{
	public static void main(String[] args){
		 Scanner scanner = new Scanner(System.in);
		 System.out.println("Enter your score: ")
		int score = scanner.nextInt();
		if(score >= 80){
			System.out.println("you have got an A");
		}else if(score>=70){
			System.out.println("Ya got a B");
		}else if (score<70){
			System.out.println("you banged your exam or test you got an F!!");
		}



	}
}