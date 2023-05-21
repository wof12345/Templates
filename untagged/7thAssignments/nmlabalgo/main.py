from numericalintegration import Itegration
from graph import generateGraph


def main():
    accuracy = float(input('Accuracy:'))
    lowerlimit = int(input('Lowerlimit:'))
    upperlimit = int(input('Upperlimit:'))

    integration = Itegration('new', accuracy, lowerlimit, upperlimit)

    coords = integration.getBestIterationForThisAccuracy(accuracy)
    print()
    generateGraph(coords[0], coords[1])


main()
