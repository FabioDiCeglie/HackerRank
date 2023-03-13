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
