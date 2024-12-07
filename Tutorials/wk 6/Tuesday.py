

def mean (num_list):
    total = 0
    amount_of_numbers = len(num_list)
    for num in num_list:
        total += num

    if (amount_of_numbers < 1):
        return "INVALID!"

    return total / amount_of_numbers

values = (input("Enter your values"))
print(mean(values))   