def isPalindrome(word):
    for i in range(0, int(len(word)/2)): 
        if word[i].lower() != word[len(word)-i-1].lower():
            return False
    return True

value1 = "maLam"
hasil1 = isPalindrome(value1) # True
print("value1 : ", hasil1)

value2 = "Level"
hasil2 = isPalindrome(value2) # True
print("value2 : ", hasil2)

value3 = "kasur ini ruSaK"
hasil3 = isPalindrome(value3) # True
print("value3 : ", hasil3)

value4 = "aYam"
hasil4 = isPalindrome(value4) # False
print("value4 : ", hasil4)