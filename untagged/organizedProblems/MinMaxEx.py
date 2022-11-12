import random

# terminal state is when player or enemy health is 0
gameStateInfo = {
    'turn': 0,
    'playerturn': True
}


traits = [
    {'inspired': "30"},
    {'mana surge': '100'},
    {'raged': '40'},
    {'lifesteal': '10'},
    {'mana void': '-1'},
    {'vulnerable': "21"},
    {'weakend': '-40'},
    {'shielded': '300'},
    {'stunned': 1},
    {'invulnerable': '-51'},
]

spells = [
    ['dazzle', 'cast 30 stunned 1'],
    ['burst', 'cast 30 * 0'],
    ['shield', 'self 300 shielded 1']
]


def traitManager(command, trait, health, attack, mana, damageMult, modifier):

    if (command == 'add'):
        if (trait == 'vulnerable'):
            return [0, 0, 0,  modifier, 0, -1]
        elif (trait == 'inspired'):
            return [0, ((attack * modifier)/100), 0, 0, 0, -1]
        elif (trait == 'mana void'):
            return [0, 0, modifier * mana, 0, 0, -1]
        elif (trait == 'mana surge'):
            return [0, 0, (mana * modifier/100), 0, 0, -1]
        elif (trait == 'raged'):
            return [0, ((attack * modifier)/100), 0, 0, 0, -1]
        elif (trait == 'weakend'):
            return [0, ((attack*modifier)/100), 0, 0, 0, -1]
        elif (trait == 'shielded'):
            return [((health*modifier)/100), 0, 0, 0, 0, -1]
        elif (trait == 'lifesteal'):
            return [0, 0, 0, 0, modifier, -1]
        elif (trait == 'invulnerable'):
            return [0, 0, 0, modifier, 0, -1]
        elif (trait == 'stunned'):
            return [0, 0, 0, 0, 0, modifier]
        elif (trait == 'shielded'):
            return [modifier, 0, 0, 0, 0, 0]
    # else:
    #     if (trait == 'vulnerable'):
    #         return [0, 0, 0, -((damageMult*modifier)), 0]
    #     elif (trait == 'inspired'):
    #         return [0, -((attack*modifier)/100), 0, 1, 0]
    #     elif (trait == 'mana void'):
    #         return [0, 0, -modifier * mana, 1, 0]
    #     elif (trait == 'mana surge'):
    #         return [0, 0, (-mana*modifier/100), 1, 0]
    #     elif (trait == 'raged'):
    #         return [0, ((-attack*modifier)/100), 0, 1, 0]
    #     elif (trait == 'weakend'):
    #         return [0, (-(attack*modifier)/100), 0, 1, 0]
    #     elif (trait == 'shielded'):
    #         return [((-health*modifier)/100), 0, 0, 1, 0]
    #     elif (trait == 'lifesteal'):
    #         return [0, 0, 0, 1, -modifier]
    #     elif (trait == 'invulnerable'):
    #         return [0, 0, 0, -modifier, 0]


class baseEntity:
    def __init__(self, health, attack, mana, name):
        self.health = health
        self.baseHealth = health
        self.attack = attack
        self.attackShow = attack
        self.baseAttack = attack
        self.mana = mana
        self.baseMana = mana
        self.name = name
        self.traits = []
        self.damageMult = 1
        self.lifeSteal = 0
        self.isStunned = -1

    def logStats(self):
        print(self.name + "'s health is :", self.health)
        print(self.name + "'s attack is :", self.attackShow)
        print(self.name + "'s mana is :", self.mana)
        print(self.name + "'s damageMult is :", self.damageMult)
        print(self.name + "'s lifeSteal is :", self.lifeSteal)
        print(self.name + "'s traits are :", self.traits)
        print(">>>>>>>")

    def updateStats(self, dataArray):
        # print('updateentity', self.name,
        #       gameStateInfo['playerturn'], dataArray)
        self.health += round(dataArray[0])
        self.attackShow += round(dataArray[1])
        self.mana += round(dataArray[2])
        self.damageMult += round(dataArray[3])
        self.lifeSteal += round((dataArray[4]))
        self.isStunned += round((dataArray[5]))

    def traitCheck(self, eval):
        for index, trait in enumerate(self.traits):
            print('traitcheck', index, trait)
            if (trait[1] > 0):

                trait[1] -= 1

                for name, value in trait[0].items():
                    self.updateEntity('add', name, int(value))

                if (eval):
                    self.attack = self.attackShow
            else:
                for name, value in trait[0].items():
                    self.updateEntity('add', name,  -int(value))

                self.removeTrait(index)

    def updateEntity(self, command, name, value):
        dataArray = traitManager(command, name, self.baseHealth, self.baseAttack,
                                 self.mana, self.damageMult, value)
        self.updateStats(dataArray)

    def applyTurn(self, turnData, spell):
        print(spell)
        if (spell < 0):
            turnData[0].addTrait(turnData[2])
            turnData[0].traitCheck(True)

            if (turnData[0].isStunned < 0):
                healed = 0
                attackContext = turnData[0].attack
                damageTaken = -round(
                    attackContext+((attackContext*self.damageMult)/100))

         # print(damageTaken)

                if (turnData[0].lifeSteal > 0):
                    healed = -round((damageTaken*turnData[0].lifeSteal)/100)
                print(turnData[0].name+" dealt", -
                      damageTaken, "damage to "+self.name)
                print(turnData[0].name+" stole", healed, "hp from "+self.name)

                turnData[0].updateStats(
                    [healed, 0, 0, 0, 0, turnData[0].isStunned])
            self.updateStats([damageTaken, 0, 0, 0, 0, self.isStunned])

            self.addTrait(turnData[1])
            self.traitCheck(False)
        else:

            spell = spells[spell-1]
            spellName = spell[0]
            spellEffect = spell[1].split(" ")
            print(spellEffect)

    def addTrait(self, trait):
        self.traits.append(trait)

    def removeTrait(self, ind):
        self.traits.pop(ind)


def actionDeterminer(action, ally, enemy):
    turn1 = random.randint(1, 2)
    turn2 = random.randint(1, 2)

    randTrait1 = traits[random.randint(4, 6)]
    randTrait2 = [random.randint(0, 3)]
    if (action == 1):
        enemy.applyTurn(
            [ally, [traits[6], 1], [traits[3], 3]], -1)
    elif (action == 2):
        ally.addTrait([traits[9], 1])
        ally.traitCheck(False)

        print(ally.name + "Used defend and gained 50% damage immunity.")
    elif (action == 3):
        print("1 - dazzle\n2 - burst\n3 - shield")
        spell = input()
        enemy.applyTurn(
            [ally, [traits[6], 1], [traits[3], 3]], spell)


def turnSimulation(action, ally, enemy):
    actionDeterminer(action, ally, enemy)
    enemy.logStats()


def init():
    print("This is a demo game made to test minmax algorithm. The idea is simple. Player can choose from 3 actions. ")
    print("1 - Attack\n2 - defend\n3 - spell")
    print("Game ends when either enemy or player health is 0. This is turn based so player gets 1 turn and enemy gets 1 turn.")
    print("Use the integers associated with the actions to perform them.")

    player = baseEntity(300, 10, 300, 'player')
    enemy = baseEntity(400, 10, 100, 'enemy')

    if (random.randint(0, 1)):
        gameStateInfo['playerturn'] = False

    debug = 100
    while (player.health > 0 and enemy.health > 0):
        if (gameStateInfo['playerturn']):
            action = input()
            gameStateInfo['playerturn'] = False
            turnSimulation(int(action), player, enemy)
        else:
            gameStateInfo['playerturn'] = True
            turnSimulation(1, enemy, player)
    debug -= 1

    if (player.health > 0):
        print("player wins!")
    else:
        print("player loses!")


init()
