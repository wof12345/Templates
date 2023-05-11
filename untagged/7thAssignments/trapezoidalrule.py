import math as mth

yTable = []

interval = int(input('Intervals:'))

lowerlimit = int(input('Lowerlimit: '))
upperlimit = int(input('Upperlimit: '))


def eval(x):

    if (x != 0):
        return mth.log10(x)  # variable
    else:
        return 0
    # return x/(1+x)


def formTable():
    h = mth.fabs((upperlimit-lowerlimit)/interval)
    hCont = 0
    for i in range(interval+1):
        yTable.append(round(eval(hCont), 5))
        hCont += h

    return h


def trapezoidalRule(h):
    sum1 = yTable.pop(0)+yTable.pop()

    sum2 = 0

    for i in yTable:
        sum2 += i

    return (h/2)*((sum1)+(2*(sum2)))


print(trapezoidalRule(formTable()))
