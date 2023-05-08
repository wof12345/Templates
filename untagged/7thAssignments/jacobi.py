import numpy as np

A = np.array([[83, 11, -4], [7, 52, 13], [3, 8, 29]])


def eq1(x, y, z):
    return round(1/83*(95-11*y+4*z), 2)


def eq2(x, y, z):
    return round(1/52*(71-7*x-13*z), 2)


def eq3(x, y, z):
    return round(1/29*(104-3*x-8*y), 2)


def jacobi(x, y, z, it):
    if (it >= 8):
        return [x, y, z]

    x = eq1(x, y, z)
    y = eq2(x, y, z)
    z = eq3(x, y, z)

    print(x, y, z, it)
    return jacobi(x, y, z, it+1)


print(jacobi(0, 0, 0, 1))
