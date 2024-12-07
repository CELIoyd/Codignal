import java.util.Scanner;
import java.util.Random;
public class Lloyd{
    public static void main(String[] args) {
        Random rand = new Random(51);
        int number = rand.nextInt();
        //System.out.println(number);
        int number_of_guesses = 0;
        int number_of_chances = 3;

        while (number_of_guesses < number_of_chances){




           Scanner scanner = new Scanner(System.in);
            System.out.println("Guess a number from 1 to 50: ");
            int result = scanner.nextInt();
            number_of_guesses = number_of_guesses + 1;
            if(result == number){
                System.out.println("YOU GOT THE RIGHT NUMBER. WHOO HOO!");
                break;
            }else if(result > number){
                System.out.println("Your guess is too high");
            }else if(result > number){
                System.out.println("Your guess is too low");
            }

        }    
     }
}