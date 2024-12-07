import java.util.Scanner;

public class Grades{
	public static void main(String[] args){
		 Scanner scanner = new Scanner(System.in);
		 System.out.println("Enter your score: ");
		int score = scanner.nextInt();
		if(score >= 80){
			System.out.println("you have got an A");
		}else if(score >= 70 && score < 80){
			System.out.println("Ya got a B");
		}else if (score > 59 && score < 69){
			System.out.println("you got a C");
		}else if (score > 49 && score < 59){
			System.out.println("You got a D");
		}else if (score > 29 && score < 49  ){
			System.out.println("You got an E");
		}else if(score > 0 && score < 29){
			System.out.println("You failed! you got an F");
		}else if(score < 0 ){
			System.out.println("You need to retake the exam or test!!");
		}





	}
}