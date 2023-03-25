# NOMOR 1

angka_n = 15

for x in range(1, angka_n+1):
    if x % 3 == 0 and x % 4 == 0:
        print("OKYES")
    elif x % 3 == 0:
        print("OK")
    elif x % 4 == 0:
        print("YES")
    else:
        print(str(x))