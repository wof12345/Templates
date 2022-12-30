import traitcollection
import spellcollection
import minimax


# destructure game element collections and utility functions (for readability)
traits = traitcollection.traits
spells = spellcollection.spells


def giveTraitTurn(trait, turns):
    return {'trait': trait, 'turns': turns, 'added': False}


def determineBestMove(enemy, player):
    bestMove = minimax.minimax(
        '0*0', 0, True, -12412433, 12412433, enemy, player, '0*0')
    print('move', bestMove)


def generateGameTreeAndFindMove(enemy, player):
    move = determineBestMove(enemy, player)
    return move


def calculateMoveWeight(referenceAlly, referenceEnemy, move):
    weight = 0

    if (move == 1):
        weight += round(referenceAlly.stats['attack']+calcPercentageIncluded(referenceAlly.stats['attack'], referenceEnemy.stats['damageTakenMult'])+calcPercentageIncluded(
            referenceAlly.stats['attack'], referenceAlly.stats['lifeSteal']))
    elif (move == 2 and referenceAlly.lastMoveList[-1] != move):
        statToCompare = \
            (referenceAlly.stats['damageTakenMult'] +
             49)

        weight += round(calcPercentageExcluded(
            referenceEnemy.stats['attack'], statToCompare))
    else:
        statToCompare = 0
        if (referenceAlly.lastMoveList[-1] != move):
            if (move == 3):
                statToCompare = \
                    (referenceAlly.stats['damageTakenMult'] +
                     49)
                if (referenceAlly.stats['mana']-40 > 0):
                    weight += referenceEnemy.stats['attack']+calcPercentageIncluded(referenceEnemy.stats['attack'], referenceAlly.stats['damageTakenMult'])+calcPercentageIncluded(
                        referenceEnemy.stats['attack'], referenceEnemy.stats['lifeSteal'])+round(calcPercentageExcluded(
                            referenceEnemy.stats['attack'], statToCompare))+300
            elif (move == 6):
                if (referenceAlly.stats['mana']-100 > 0):
                    weight += 100 + referenceAlly.stats['mana']-100
            elif (move == 9):
                if (referenceAlly.stats['mana']-70 > 0):
                    weight += 300
            else:
                return 0

    print('move value for ' + referenceAlly.name, weight, move)
    return {'move': move, 'weight': weight}


def calcPercentageIncluded(actual, percentage):
    return (actual+calcPercentageExcluded(actual, percentage))


def calcPercentageExcluded(actual, percentage):
    return (((actual*percentage)/100))
