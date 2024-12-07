class BankAccount:
    def __init__(self, balance, first_name, last_name, pin, account_type):
        self.first_name = first_name
        self.last_name = last_name
        self.balance = balance
        self.PIN = pin
        self.account_type = account_type

    def deposit(self, amount):
        self.balance += amount

    def withdraw(self, amount):
        self.balance -= amount

    def get_balance(self):
        return self.balance
   