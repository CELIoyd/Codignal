values = {
     1: "I",
     2: "II",
     3: "III",
     3: "IV",
     5: "V",
     6:"VI",
     7:"VII",
     8:"VIII",
     9:"IX",
     10:"X",
     20:"XX",
     30:"XXX",
     40:"XL",
     50:"L",
     60:"LX",
     70:"LXX",
     80:"LXXX",
     90:"XC",
     100:"C",
     200:"CC",
     300:"CCC",
     400:"CD",
     500:"D", 
     600:"DC",
     700:"DCC",
     800:"DCCC",
     900:"CM",
     1000:"M",
     2000:"MM",
     3000:"MMM",
     4000:"MMMM"

 }
def value (a, b)

    
user_input = int(input("Enter your Arabic Numeral: "))
roman_numeral = ''

for key in sorted(values.keys(), reverse=True):
    #print(user_input // item, user_input // item)
    while user_input >= key:
        roman_numeral += values[key]
        user_input -= key
print(roman_numeral)