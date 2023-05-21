import matplotlib.pyplot as plt


def generateGraph(x, y):

    plt.plot(x, y)

    plt.xlabel('x - axis')

    plt.ylabel('y - axis')

    plt.title('Graph for given params : ')

    plt.plot(x, y, color='green', linewidth=1,
             marker='o', markerfacecolor='blue', markersize=12)

    plt.show()
