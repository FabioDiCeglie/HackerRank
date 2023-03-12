def plusMinus(arr):
    pos_nums = list(filter(lambda x: x > 0, arr))
    neg_nums = list(filter(lambda x: x < 0, arr))
    eq_nums = list(filter(lambda x: x == 0, arr))
    print("{:.6f}".format(len(pos_nums) / len(arr)))
    print("{:.6f}".format(len(neg_nums) / len(arr)))
    print("{:.6f}".format(len(eq_nums) / len(arr)))

def miniMaxSum(arr):
    # Write your code here
    max_numb = max(arr)
    min_numb = min(arr)

    print(sum(arr) - max_numb , sum(arr) - min_numb)
