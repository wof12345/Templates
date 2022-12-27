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

# terminal state is when player or enemy health is 0
gameStateInfo = {
    'turn': 0,
    'playerturn': True
}


def actionDeterminer(action, ally, enemy):
    if (action == 1):
        enemy.applyTurn(
            {'current': ally, }, -1)
    elif (action == 2):
        ally.addTrait(giveTT(traits[9], 3))

        print(ally.name + "Used defend and gained 50% damage immunity.")
    elif (action == 3):
        print("1 - dazzle\n2 - burst\n3 - shield")
        spell = input()
        enemy.applyTurn(
            {'current': ally, }, int(spell))

    enemy.logStats()


def turnSimulation(action, ally, enemy):
    actionDeterminer(action, ally, enemy)


def init():
    print("This is a demo game made to test minmax algorithm. The idea is simple. Player can choose from 3 actions. ")
    print("1 - Attack\n2 - defend\n3 - spell")
    print("Game ends when either enemy or player health is 0. This is turn based so player gets 1 turn and enemy gets 1 turn.")
    print("Use the integers associated with the actions to perform them.")

    player = entity.baseEntity(300, 10, 300, 'player', [])
    enemy = entity.baseEntity(400, 10, 100, 'enemy', [])

    player.statCheckSequence()
    enemy.statCheckSequence()

    player.addTrait(giveTT(traits[0], 3))
    player.addTrait(giveTT(traits[5], 2))
    player.addTrait(giveTT(traits[3], 2))

    if (random.randint(0, 1)):
        gameStateInfo['playerturn'] = False

    debug = 100
    print(player.stats['health'], enemy.stats['health'])
    while (player.stats['health'] > 0 and enemy.stats['health'] > 0 and debug > 0):
        if (gameStateInfo['playerturn']):
            action = input()
            gameStateInfo['playerturn'] = False
            turnSimulation(int(action), player, enemy)
        else:
            gameStateInfo['playerturn'] = True
            turnSimulation(1, enemy, player)

        debug -= 1

    if (player.stats['health'] > 0):
        print("player wins!")
    else:
        print("player loses!")


init()
