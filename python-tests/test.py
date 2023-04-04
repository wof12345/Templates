import numpy as np
import matplotlib.pyplot as plt

np.random.seed(2)

numbers = [1, 23, 5, 3, 1]

x = np.linspace(0, 20, 100)

x = np.random.normal(3, 1, 100)
y = np.random.normal(150, 40, 100) / x

print(np.sort(x))
print(np.sort(y))

plt.scatter(x, y)
plt.show()


# ml.plot(x, np.sin(x))
# ml.show()
