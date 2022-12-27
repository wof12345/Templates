import traitcollection
import spellcollection


# destructure game element collections and utility functions (for readability)
traits = traitcollection.traits
spells = spellcollection.spells


def giveTraitTurn(trait, turns):
    return {'trait': trait, 'turns': turns, 'added': False}


def generateGameTree(reference):
    tree = []


def calculateMoveWeight(referenceAlly, referenceEnemy, move, spell):
    weight = 0

    if (move == 1):
        weight += referenceAlly.stats['attack']+calcPercentageIncluded(referenceAlly.stats['attack'], referenceEnemy.stats['damageTakenMult'])+calcPercentageIncluded(
            referenceAlly.stats['attack'], referenceAlly.stats['lifeSteal'])
    elif (move == 2):
        statToCompare = \
            (referenceAlly.stats['damageTakenMult'] +
             49)

        weight += round(calcPercentageExcluded(
            referenceEnemy.stats['attack'], statToCompare))
    elif (move == 3):
        if (spell == 1):
            statToCompare = \
                (referenceAlly.stats['damageTakenMult'] +
                 49)
            if (referenceAlly.stats['mana']-40 > 0):
                weight += referenceEnemy.stats['attack']+calcPercentageIncluded(referenceEnemy.stats['attack'], referenceAlly.stats['damageTakenMult'])+calcPercentageIncluded(
                    referenceEnemy.stats['attack'], referenceEnemy.stats['lifeSteal'])+round(calcPercentageExcluded(
                        referenceEnemy.stats['attack'], statToCompare))+300
        elif (spell == 2):
            if (referenceAlly.stats['mana']-100 > 0):
                weight += 100 + referenceAlly.stats['mana']-100
        elif (spell == 3):
            if (referenceAlly.stats['mana']-70 > 0):
                weight += round(calcPercentageExcluded(
                    referenceEnemy.stats['attack'], statToCompare))
        else:
            return 0

    print('move value for ' + referenceAlly.name, weight, move)


def calcPercentageIncluded(actual, percentage):
    return (actual+((actual*percentage)/100))


def calcPercentageExcluded(actual, percentage):
    return (((actual*percentage)/100))
