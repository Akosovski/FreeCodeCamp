# NOMOR 3

listArray = [12, 4, 8, 15, 67, 99, 3]

def maxSecondNumber(arr):
    arr.sort(reverse=True)
    hasil = arr[1]

    return hasil

print(maxSecondNumber(listArray))