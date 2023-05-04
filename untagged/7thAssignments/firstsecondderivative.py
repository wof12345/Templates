

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

                uArrayDifferenceTableArray[jdx+1].append(uArrayY[idx])
                # break

        if (len(uArrayY) > 1):
            uArrayY.pop()

    return uArrayDifferenceTableArray


def calculateDerivativeSlopeWise(uArrayX, uArrayY, derivateArray=[]):
    for jdx, j in enumerate(uArrayX):
        if (jdx+1 < len(uArrayX)):
            value = (uArrayY[jdx+1]-uArrayY[jdx])/(uArrayX[jdx+1]-j)
            derivateArray.append(value)

    DerivativeArray = []
    for jdx, j in enumerate(derivateArray):
        if (jdx == 0 or jdx == len(derivateArray)-1):
            DerivativeArray.append(j)

        if (jdx+1 < len(derivateArray)):
            value = (derivateArray[jdx] +
                     derivateArray[jdx+1])/2

            DerivativeArray.append(value)

    return DerivativeArray


def getUsableYvalues(uArrayY):
    usedY = []
    for j in uArrayY:
        usedY.append(j[0])
    return usedY


def calcuateDerivateiveInterpolation(givenX, uArrayX, uArrayY, derivateArray=[]):
    u = (givenX - uArrayX[0])/(uArrayX[1]-uArrayX[0])
    diffTable = generateDifferenceTable(uArrayX, uArrayY, [])
    usedY = getUsableYvalues(diffTable)
    print(usedY)
    usedY.pop(0)


firstDerivative = calculateDerivativeSlopeWise(uArrayX, uArrayY, [])

secondDerivative = calculateDerivativeSlopeWise(uArrayX, firstDerivative, [])

diffTable = generateDifferenceTable(uArrayX, uArrayY, [])

print(firstDerivative, secondDerivative, diffTable)


calcuateDerivateiveInterpolation(1, uArrayX, uArrayY, [])
