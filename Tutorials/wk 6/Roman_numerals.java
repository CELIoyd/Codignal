import java.util.Scanner;
import java.util.HashMap;
import java.util.Map;

public class Roman_numerals{


		 Map<String, Integer> roman_values = new HashMap<>();
		 Roman_numerals(){
		 	roman_values.put("I", 1);
         	roman_values.put("V", 5);
         	roman_values.put ("X", 10);
         	roman_values.put("L", 50);
         	roman_values.put("C", 100);
         	roman_values.put("D", 500);
         	roman_values.put("M", 1000);
         	} 	
	

	
	private int roman(String roman_numeral){
		 int total = 0;
		 int prev_value = 0;

		 for (int c = roman_numeral.length() - 1; c > -1 ; c--) {
		 	 char i = roman_numeral.charAt(c);
		 	// System.out.println(c);
		 	 int value = roman_values.get(String.valueOf(i));

		 	 if (value < prev_value) {
		 	 	total = total - value;

		 	 }else {
		 	 	total = total + value;
		 	 }

		 	 prev_value = value;
		 
		 }
		 
		 return total;

     }

		 //System.out.println(roman_numeral);

		 public static void main (String[] args){
		   		

		 Scanner scanner = new Scanner(System.in);
		 System.out.println("Enter your Roman Numeral (DO NOT ENTER A NUMBER!!): ");
		 String userInput = scanner.nextLine();
		 userInput = userInput.toUpperCase();
		  Roman_numerals theConverter = new Roman_numerals();
		  

		  System.out.println(theConverter.roman(userInput));
		 }
		 
}

		 
	
