word = input("Write your word: ")


word_ = list(word)
word_.reverse() 

answer = "".join(word_)



if word == answer:
    print(f'{word} is a palindrom')
else:
    print(f'{word} is not a palindrom')
    



