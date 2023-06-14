import matplotlib.pyplot as plt


def generateGraph(x, y):

    plt.plot(x, y)

    plt.xlabel('Iteration')

    plt.ylabel('Smallest Average Error')

    plt.title('Graph for given params : ')

    plt.plot(x, y, color='green', linewidth=1,
             marker='o', markerfacecolor='blue', markersize=12)

    plt.show()
