

uArrayX = [1, 2, 3, 4, 5]
uArrayY = [1, 8, 27,  64, 125]


def generateDifferenceTable(uArrayX, uArrayY, uArrayDifferenceTableArray=[]):
    uArrayDifferenceTableArray.append(uArrayY.copy())
    for jdx, j in enumerate(uArrayX):
        if (len(uArrayY) > 1):
            uArrayDifferenceTableArray.append([])
        for idx, i in enumerate(uArrayY):
            if (idx+1 < len(uArrayY)):
                uArrayY[idx] = uArrayY[idx+1] - uArrayY[idx]

                uArrayDifferenceTableArray[jdx+1].append(uArrayY[idx])

        if (len(uArrayY) > 1):
            uArrayY.pop()

    return uArrayDifferenceTableArray


def evalFirstDer(usableY, h):
    sum = 0
    for idx, i in enumerate(usableY):

        if (idx % 2 != 0):
            sum -= (1/(idx+1) * i)
        else:
            sum += (1/(idx+1) * i)

    return sum


def evalSecDer(usableY, h):
    return 1/h*(usableY[1]-usableY[2]+(11/12)*usableY[3])


def getUsableYvalues(uArrayY):
    usedY = []
    for j in uArrayY:
        usedY.append(j[0])
    return usedY


def calcuateDerivateiveInterpolationForward(uArrayX, uArrayY):

    diffTable = generateDifferenceTable(uArrayX, uArrayY, [])
    usedY = getUsableYvalues(diffTable)
    usedY.pop(0)
    res = evalFirstDer(usedY, 1)
    res2 = evalSecDer(usedY, 1)
    print(res, res2)


calcuateDerivateiveInterpolationForward(uArrayX, uArrayY)
