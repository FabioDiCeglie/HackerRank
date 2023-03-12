def plusMinus(arr):
    pos_nums = list(filter(lambda x: x > 0, arr))
    neg_nums = list(filter(lambda x: x < 0, arr))
    eq_nums = list(filter(lambda x: x == 0, arr))
    print("{:.6f}".format(len(pos_nums) / len(arr)))
    print("{:.6f}".format(len(neg_nums) / len(arr)))
    print("{:.6f}".format(len(eq_nums) / len(arr)))
