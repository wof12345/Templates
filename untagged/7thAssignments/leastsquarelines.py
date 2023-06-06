x = []
y = []

yPlugged = []

sumX = 0
sumY = 0
sumXY = 0
sumX2 = 0


numberOfInputs = int(input('Number of Inputs: '))

for i in range(numberOfInputs):
    tempX = float(input('x='))
    tempY = float(input('y='))
    x.append(tempX)
    y.append(tempY)

for i in range(numberOfInputs):
    sumX += x[i]
    sumY += y[i]
    sumXY += (x[i]*y[i])
    sumX2 += (x[i]*x[i])

slope = (numberOfInputs*sumXY-(sumX*sumY))/(numberOfInputs*sumX2-(sumX*sumX))
b = ((sumY-slope*sumX))/numberOfInputs

for i in range(numberOfInputs):
    yPlugged.append(round(round(slope, 2)*x[i]+b, 2))

print(sumX, sumY, sumXY, sumX2, slope, b, yPlugged)
