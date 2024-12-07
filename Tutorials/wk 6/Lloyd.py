import random as rd
number = rd.randint(1, 50)
number_of_guesses = 0
number_of_chances = 3
while number_of_guesses < number_of_chances:
    print("Guess a number between 1 to 50: ")
    guess = input()
    guess = int(guess)
    number_of_guesses = number_of_guesses + 1
    
    if guess < number:
        print("You're guess is to low.")
    elif guess > number:
        print("You're guess is too high. ")
    elif guess == number:
        print("WHOO! that's the number.")

    elif number_of_guesses == 0:
        print("You ran out of guesses the correct number was ",number)
    

    




