import numpy as np

x0 = np.array([[85, 6, -1], [72, 15, 2], [110, 1, 54]])
xx = np.array([[27, 6, -1], [6, 15, 2], [1, 1, 54]])

x1 = np.linalg.det(x0)/np.linalg.det(xx)

y0 = np.array([[27, 85, -1], [6, 72, 2], [1, 110, 54]])
xx = np.array([[27, 6, -1], [6, 15, 2], [1, 1, 54]])

x2 = np.linalg.det(x0)/np.linalg.det(xx)

x0 = np.array([[27, 6, 85], [6, 15, 72], [1, 1, 110]])
xx = np.array([[27, 6, -1], [6, 15, 2], [1, 1, 54]])

x3 = np.linalg.det(x0)/np.linalg.det(xx)


print(x1, x2, x3)
