import numpy as np

A = np.array([[3, 1, 2], [2, -3, -1], [1, 2, 1]])
B = np.array([3, -3, 4])

invA = np.linalg.inv(A)
AxB = invA.dot(B)

print(AxB)
