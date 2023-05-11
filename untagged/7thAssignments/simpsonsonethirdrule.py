import math as mth

yTable = []

interval = int(input('Intervals:'))

lowerlimit = int(input('Lowerlimit: '))
upperlimit = int(input('Upperlimit: '))


def eval(x):
    # if (x != 0):
    #     return mth.log10(x)  # variable
    # else:
    #     return 0
    return x/(1+(x*x))
    # return mth.exp(x)


def formTable():
    h = mth.fabs((upperlimit-lowerlimit)/interval)
    hCont = 0
    for i in range(interval+1):
        yTable.append(round(eval(hCont), 5))
        hCont += h

    return h


def simpsonsonethirdRule(h):

    sum1 = yTable.pop(0)+yTable.pop()

    sumOdd = 0
    sumEven = 0

    for idx, i in enumerate(yTable):
        if (idx % 2 == 0):
            sumEven += i

        else:
            sumOdd += i

    return (h/3)*((sum1)+(4*sumEven)+(2*sumOdd))


print(simpsonsonethirdRule(formTable()))
