import random
import traitcollection
import spellcollection
import baseentity

import gameutilityfunctions

# destructure game element collections and utility functions (for readability)
traits = list(traitcollection.traits)
spells = spellcollection.spells
entity = baseentity

giveTT = gameutilityfunctions.giveTraitTurn
calculateMoveWeight = gameutilityfunctions.calculateMoveWeight


# terminal state is when player or enemy health is 0
gameStateInfo = {
    'turn': 0,
    'playerturn': True
}


def actionDeterminer(action, ally, enemy):
    if (action == 1):
        enemy.applyTurn(
            {'current': ally, }, -2)
    elif (action == 2):
        if (ally.lastMoveList[-1] != 2):
            ally.addTrait(giveTT(traits[9], 1))
            print(ally.name + " used defend and gained 50% damage immunity.")
        else:
            print('Cannot use defend subsequently!')
        enemy.applyTurn(
            {'current': ally, }, -1)
    elif (action == 3):
        if (gameStateInfo['playerturn'] == False):
            print("1 - dazzle\n2 - burst\n3 - shield")
            spell = input()
        else:
            spell = 2

        if (ally.lastMoveList[-1] != spell):
            enemy.applyTurn(
                {'current': ally, }, int(spell))
        else:
            print('Cannot use same spell subsequently!')

    enemy.logStats()


def turnSimulation(action, ally, enemy):
    if (ally.stats['isStunned'] <= 0):
        actionDeterminer(action, ally, enemy)
    else:
        print(ally.name + " is stunned!")


def init():
    print("This is a demo game made to test minmax algorithm. The idea is simple. Player can choose from 3 actions. ")
    print("1 - Attack\n2 - defend\n3 - spell")
    print("Game ends when either enemy or player health is 0. This is turn based so player gets 1 turn and enemy gets 1 turn.")
    print("Use the integers associated with the actions to perform them.")

    player = entity.baseEntity(300, 10, 300, 'player', [])
    enemy = entity.baseEntity(400, 10, 100, 'enemy', [])

    player.addTrait(giveTT(traits[0], 3))
    player.addTrait(giveTT(traits[5], 2))
    player.addTrait(giveTT(traits[3], 2))

    player.traitCheck()
    enemy.traitCheck()

    player.statCheckSequence()
    enemy.statCheckSequence()

    if (random.randint(0, 1)):
        gameStateInfo['playerturn'] = False

    debug = 100
    while (player.stats['health'] > 0 and enemy.stats['health'] > 0 and debug > 0):
        if (gameStateInfo['playerturn']):
            action = int(input())
            if (action < 4):
                gameStateInfo['playerturn'] = False
                player.isTurn = True
                enemy.isTurn = False
                turnSimulation(action, player, enemy)
                player.lastMoveList.append(action)
        else:
            gameStateInfo['playerturn'] = True
            # CopyOfEnemy = type(
            #     'CopyOfEnemy', enemy.__bases__, dict(enemy.__dict__))
            # CopyOfAlly = type('CopyOfAlly', player.__bases__,
            #                   dict(player.__dict__))
            # refEnemy = CopyOfEnemy()
            # refAlly = CopyOfAlly()

            # print('test', CopyOfAlly.logStats())
            enemyMove = gameutilityfunctions.generateGameTreeAndFindMove(
                enemy, player)

            player.isTurn = False

            enemy.isTurn = True

            turnSimulation(enemyMove, enemy, player)
            enemy.lastMoveList.append(enemyMove)

        debug -= 1

    if (player.stats['health'] > 0):
        print("player wins!")
    else:
        print("player loses!")

    print(player.lastMoveList)
    print(enemy.lastMoveList)


init()
