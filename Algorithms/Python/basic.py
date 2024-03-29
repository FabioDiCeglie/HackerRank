import string

def plusMinus(arr):
    pos_nums = list(filter(lambda x: x > 0, arr))
    neg_nums = list(filter(lambda x: x < 0, arr))
    eq_nums = list(filter(lambda x: x == 0, arr))
    print("{:.6f}".format(len(pos_nums) / len(arr)))
    print("{:.6f}".format(len(neg_nums) / len(arr)))
    print("{:.6f}".format(len(eq_nums) / len(arr)))

def miniMaxSum(arr):
    max_numb = max(arr)
    min_numb = min(arr)

    print(sum(arr) - max_numb , sum(arr) - min_numb)

def lonelyinteger(a):
    sorted_array = sorted(a)
    i, j = 0, 1

    if len(sorted_array) == 1:
        return sorted_array[0]

    if sorted_array[-1] != sorted_array[-2]:
        return sorted_array[-1]

    while(j < len(sorted_array)):
        if sorted_array[i] != sorted_array[j]:
            return sorted_array[i]
        i += 2
        j += 2

# a = [2, 4, 4,3, 5, 2, 3]

def lonelyInteger(a):
    for val in a:
        if a.count(val) == 1:
            result = val
            return result

# lonelyInteger(a)

def hurdleRace(k, height):
    # Write your code here
    max_numb = max(height)

    if(k > max_numb):
        return 0

    return max_numb - k

# hurdleRace(4, [1,6,3,5,2])

def designerPdfViewer(h, word):
    word_len = len(word)
    letters = string.ascii_lowercase
    index_of_words = []

    for i, w in enumerate(word):
        for i,letter in enumerate(letters):
            if(w == letter):
                index_of_words.append(i)

    letters_heights = []
    for x in index_of_words:
        letters_heights.append(h[x])

    tallest_letter = max(letters_heights)
    return word_len * tallest_letter

def utopianTree(n):
    # Write your code here
    value = 0
    if n == 0:
        return value + 1
    if n == 1:
        return value + 2
    x = range(n + 1)
    for y in x:
        print(y)
        if y % 2 == 0:
            value += 1
        else:
            value *= 2
    return value

def angryProfessor(k, a):
    # Write your code here
    studentsInTime = len(list(filter(lambda x: x <= 0, a)))
    if studentsInTime >= k:
        # class is not cancelled
        return "NO"
    else:
        # class is cancelled
        return "YES"

# input ex 20 23 6
def beautifulDays(i, j, k):
    # Write your code here
    numbers = range(i,j + 1)
    wholeNumber = 0
    for x in numbers:
        #convert number to string
        num_string = str(x)
        # store the size of the number
        size = len(num_string)
        # use slicing to reverse
        reversed_num = num_string[size::-1]
        operation = x - int(reversed_num)
        divide = operation / k
        print(x, divide.is_integer())
        if(divide.is_integer()):
            wholeNumber += 1

    return wholeNumber

# input ex 7 19 2
def saveThePrisoner(n, m, s):
    res = s + m - 1
    res %= n
    if res == 0:
        return n
    return res
        # Write your code here
    # prisoners = list(range(1, n + 1))
    # number_of_sweets = m
    # distribution_start = s - 1

    # while(number_of_sweets != 0):
    #     number_of_sweets -= 1
    #     if(number_of_sweets == 0):
    #         return prisoners[distribution_start]
    #     distribution_start += 1
    #     if(distribution_start == n):
    #         #the distribution restart
    #         distribution_start = 0
