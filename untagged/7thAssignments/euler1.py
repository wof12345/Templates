def eqn(x):
    # return x*x
    return x*x*x+1


def derivative(x):
    return 2*x*x + 1
    # return 2*x


def courseCorrection(x):
    # return 2*x-1
    return 2*x+1


def formula(y, x):
    return y+h*derivative(x)


h = 0.01
target = 0.02
x = []
y = []
actualY = []
initialX = initialY = 1


# tangentline
for i in range(100):

    x.append(round(initialX, 3))

    if (i > 0):
        initialY = formula(y[i-1], x[i-1])

    y.append(round(initialY, 2))
    actualY.append(round(eqn(initialX), 2))

    if (initialX > target):
        break
    initialX += h

# euler
final = courseCorrection(target)


print(x, y, actualY, final)
