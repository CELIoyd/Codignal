import java.util.Scanner;

public class NintendoSwitch{
	public static void main(String[] args){
		
		System.out.println("Welcome to Superhero high");
		System.out.println("Which superpower would you like");
		System.out.println("1. Electricity\n2. Teleportation\n3. Telekenisis\n4. Supersonic scream\n5. Indestructibility ");
		Scanner scanner = new Scanner(System.in);
		System.out.println("Enter an option to continue");
		int option = scanner.nextInt();
		switch(option){
		case 1:
			System.out.println("You now have the power to draw Electricity and your superhero name is VOLT!");
			break;

		case 2:
			System.out.println("You now have the power to teleport to anywhere ya want and your superhero name will be AWAL!");
			break;

		case 3:
			System.out.println("You now have te power to move things with your mind and your superhero name is BRAINSTORM!");
			break;

		case 4:
			System.out.println("You now have the power to scream so loudy that it moves objects and people and your superhero name is SHOUTOUT!");
			break;

		case 5:
			System.out.println("You now have the power of invincibility you cannot die and you will be called kid Danger");
			break;

		default:
			System.out.println("You shall never have superpowers!");
			break;				
	
	    }
	
	}

}