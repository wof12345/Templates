import math as mt


def eqn(x, y):
    return (5*x*x - 1)/(mt.exp(x+y))


def formula(x, y):
    return round(h*eqn(x, y), 10)


# def rkFormula(x):


x = 0
y = 1

# h=float(input('h='))
h = 0.1


f1 = (formula(x, y))
x += h/2
y += f1/2

f2 = (formula(x, y))
y += f2/2

f3 = (formula(x, y))
y += f2/2

f4 = (formula(x, y))
y += f3

print(f1, f2, f3, f4)
