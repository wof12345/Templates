import math as mth


class Itegration:
    def __init__(self, method, iteration, lowerlimit, upperlimit):
        self.method = method
        self.yTable = []
        self.xTable = []
        self.yTableMidPoint = []
        self.iteration = iteration
        self.lowerlimit = lowerlimit
        self.upperlimit = upperlimit

        self.lastAvgErrors = []
        self.lastIterations = []
        self.lastAvgErrorDiff = []
        self.smallestAvgError = 0.1
        self.smallestAvgErrorDiff = 0.1

        self.smallestPointIteration = []
        self.smallestPointAvgError = []

        self.bestIteration = 0

        self.h = self.formTable(iteration=100)

    def eval(self, x):
        # if (x != 0):
        #     return mth.log10(x)  # variable
        # else:
        #     return 0
        return x/(1+(x*x))
        # return x*x
        # return mth.exp(x)

    def formTable(self, iteration):
        h = mth.fabs((self.upperlimit-self.lowerlimit)/iteration)
        hCont = 0

        for i in range(iteration+1):
            self.yTable.append(round(self.eval(hCont), 5))
            self.xTable.append(hCont)
            hCont += h

        hOld = 0
        hCont = 0
        for i in range(iteration):
            hCont += h
            self.yTableMidPoint.append(round((hOld+hCont)/2, 5))
            hOld = hCont

        return h

    def midpointRule(self):
        table = self.yTableMidPoint.copy()
        sum = 0

        for i in table:
            sum += (self.h)*(self.eval(i))

        return round(sum, 2)

    def simpsonsonethirdRule(self):
        table = self.yTable.copy()
        sum1 = table.pop(0)+table.pop()

        sumOdd = 0
        sumEven = 0

        for idx, i in enumerate(table):
            if (idx % 2 == 0):
                sumEven += i

            else:
                sumOdd += i

        return (self.h/3)*((sum1)+(4*sumEven)+(2*sumOdd))

    def trapezoidalRule(self):
        table = self.yTable.copy()
        sum1 = table.pop(0)+table.pop()

        sum2 = 0

        for i in table:
            sum2 += i

        return (self.h/2)*((sum1)+(2*(sum2)))

    def runAllAlgorithm(self):
        return [self.midpointRule(), self.trapezoidalRule(), self.simpsonsonethirdRule()]

    def getAvgError(self):
        results = self.runAllAlgorithm()
        relativeErrors = []
        sum = 0
        for idx, i in enumerate(results):
            for j in range(len(results)-1):
                if (j+1 > idx):
                    error = round(abs(i-results[j+1]), 6)
                    relativeErrors.append({error: [idx, j+1]})
                    sum += error

        # print(results)
        # print(sum, sum/3, relativeErrors)
        return sum/3

    def getBestIterationForThisAccuracy(self, accuracy):

        for i in range(10000):
            self.formTable(iteration=i+1)
            # print(len(self.getTable()[0]))
            avgError = self.getAvgError()
            avgErrorDiff = abs(self.smallestAvgError-avgError)
            self.lastAvgErrorDiff.append(avgErrorDiff)
            if (avgErrorDiff <= accuracy):
                self.smallestAvgErrorDiff = avgErrorDiff
                self.bestIteration = i
                print('Best iteration : ',self.bestIteration)
                print('Smallest Average Error : ',self.smallestAvgError)
                break
            if (avgError < self.smallestAvgError):
                self.smallestAvgError = avgError
                self.smallestPointIteration.append(i)
                self.smallestPointAvgError.append(avgError)
            self.lastAvgErrors.append(avgError)
            self.lastIterations.append(i+1)
            self.clearLocals()

            # if (self.smallestAvgError <= accuracy):
            # break

        # print(self.lastAvgErrors)
        # print(self.lastAvgErrorDiff)
        # print(self.lastIterations)
        # print(self.smallestAvgErrorDiff)
        # print(self.smallestPoints)

        return [self.smallestPointIteration, self.smallestPointAvgError]

    def getTable(self):
        return [self.yTable, self.xTable]

    def getMidPointTable(self):
        return [self.yTableMidPoint, self.xTable]

    def clearLocals(self):
        self.yTable = []
        self.xTable = []
        self.yTableMidPoint = []
