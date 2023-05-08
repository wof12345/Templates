

uArrayX = [1, 2, 3, 4, 5, 6]
uArrayY = [1, 8, 27,  64, 125, 216]


def generateDifferenceTable(uArrayX, uArrayY, uArrayDifferenceTableArray=[]):
    uArrayDifferenceTableArray.append(uArrayY.copy())
    for jdx, j in enumerate(uArrayX):
        if (len(uArrayY) > 1):
            uArrayDifferenceTableArray.append([])
        for idx, i in enumerate(uArrayY):
            if (idx+1 < len(uArrayY)):
                uArrayY[idx] = uArrayY[idx+1] - uArrayY[idx]

                uArrayDifferenceTableArray[jdx +
                                           1].append(round(uArrayY[idx], 2))
        if (len(uArrayY) > 1):
            uArrayY.pop()

    return uArrayDifferenceTableArray


def evalFirstDer(usableY, h, u):
    return round((1/h)*(usableY[0]+(((2*u+1)/2)*usableY[1])+(((6*u-6*u+2)/6)*usableY[2])), 2)


def evalSecDer(usableY, h, u):
    return round((1/(h*h))*(usableY[1]+((u+1)*usableY[2])), 2)


def getUsableYvalues(uArrayY):
    usedY = []
    for j in uArrayY:
        usedY.append(j[len(j)-1])
    return usedY


def calcuateDerivateiveInterpolationForward(givenX, uArrayX, uArrayY):
    diff = (uArrayX[1]-uArrayX[0])
    u = (givenX - uArrayX[len(uArrayX)-1])/diff
    diffTable = generateDifferenceTable(uArrayX, uArrayY, [])
    usedY = getUsableYvalues(diffTable)
    usedY.pop(0)
    res = evalFirstDer(usedY, diff, u)
    res2 = evalSecDer(usedY, diff, u)
    print(res, res2)


# print(diffTable)
calcuateDerivateiveInterpolationForward(1.5, uArrayX, uArrayY)
