from numericalintegration import Itegration
from graph import generateGraph


def main():
    accuracy = float(input('Accuracy:'))
    lowerlimit = int(input('Lowerlimit:'))
    upperlimit = int(input('Upperlimit:'))

    integration = Itegration('new', accuracy, lowerlimit, upperlimit)

    # print(integration.getAvgError())
    coords = integration.getBestIterationForThisAccuracy(accuracy)
    generateGraph(coords[0], coords[1])


main()
