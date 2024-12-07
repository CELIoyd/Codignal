
arabic_values = {
     1: "I",
     2:"II",
     3:"III",
     4:"IV", 
     5: "V",
     6:"VI",
     7:"VII"
     
     10: "X",
     
     50: "L",
     
     100: "C",
     
     500: "D",
     
     1000: "M"

 }

user_input = input("Enter your Arabic Numeral (DO NOT ENTER A Roman value!): ")

total = 0
prev_value = 0

for char in reversed (user_input):
    value = arabic_values[char]

    if value < prev_value:
        total = total - value
    else:
        total = total + value

    prev_value = value


print(total)   

print("ZARA HIS STEW PEE") 
