print("what type of operation would you like?")

operation = int(input("1 for addition \n2 for subtraction \n3 for multiplication \n4 for division\n5 for exponental\n: "))
num1 = float(input("Enter your first number: "))
num2 = float(input("Enter your second number: "))
if operation == 1:
    

    print("sum: ", num1 + num2) 

elif operation == 2:
    # num1 = float(input("Enter your first number: "))
    # num2 = float(input("Enter your second number: "))

    print("difference: ", num1 - num2)

elif operation == 3:
    # num1 = float(input("Enter your first number: "))
    # num2 = float(input("Enter your second number: "))

    print("product: ", num1 * num2)

elif operation == 4:
    # num1 = float(input("Enter your first number: "))
    # num2 = float(input("Enter your second number: "))
    if num2 == 0:
        print("YOU CANNOT DIVIDE WITH THIS!") 
    else:    
        print("Quotient: ", num1/num2)

elif operation == 5:
    # num1 = float(input("Enter your first number: "))
    # num2 = float(input("Enter your second number: "))

    print("exponential: ", num1 ** num2)

else:
    print("INVALID OPERATION!")