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
    # return x/(1+(x*x))
    return x*x
    # return mth.exp(x)


def formTable():
    h = mth.fabs((upperlimit-lowerlimit)/interval)
    hCont = 0
    hOld = 0
    for i in range(interval):
        hCont += h
        yTable.append(round((hOld+hCont)/2, 5))
        hOld = hCont

    return h


def midpointRule(h):

    sum = 0

    for i in yTable:
        sum += (h)*(eval(i))

    return round(sum, 2)


print(midpointRule(formTable()))
