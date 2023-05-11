import numpy as np

A = np.array([[2, 1, 1], [1, 4, 9], [3, 2, 3]])


firstMult = -2
secondMult = -3/2


def eq1(x, y, z):
    return round((2*x+1*y+1*z), 2)


def eq2(x, y, z):
    return round((1*x+4*y+9*z), 2)


def eq3(x, y, z):
    return round((3*x+2*y+3*z), 2)


def jacobi(x, y, z, it):
    if (it >= 8):
        return [x, y, z]

    x = eq1(x, y, z)
    y = eq2(x, y, z)
    z = eq3(x, y, z)

    print(x, y, z, it)
    return jacobi(x, y, z, it+1)


print(jacobi(0, 0, 0, 1))
