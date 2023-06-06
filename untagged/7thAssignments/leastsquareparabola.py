import numpy as np

x = [2, 10, 26, 61]
y = [1.4, 2.0, 2.4, 2.8]


sumX = 0
sumX2 = 0
sumX3 = 0
sumX4 = 0
sumX2Y = 0
sumXY = 0
sumY = 0

numberOfInputs = len(x)


# numberOfInputs = int(input('Number of Inputs: '))

# for i in range(numberOfInputs):
#     tempX = float(input('x='))
#     tempY = float(input('y='))
#     x.append(tempX)
#     y.append(tempY)

for i in range(numberOfInputs):
    sumX += x[i]
    sumY += x[i]
    sumXY += (x[i]*y[i])
    sumX2 += (x[i]*x[i])
    sumX3 += (x[i]*x[i]*x[i])
    sumX2Y += (x[i]*x[i]*y[i])
    sumX4 += (x[i]*x[i]*x[i]*x[i])

A = np.array([[1, sumX, sumX2], [sumX, sumX2, sumX3], [sumX2, sumX3, sumX4]])
B = np.array([sumY, sumXY, sumX2Y])

solve = np.linalg.inv(A).dot(B)


# for i in range(numberOfInputs):


print(sumX, sumY, sumXY, sumX2, solve)
