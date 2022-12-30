import traitcollection
import spellcollection
import gameutilityfunctions
import random
import time

# destructure game element collections and utility functions (for readability)
giveTT = gameutilityfunctions.giveTraitTurn


traitObjectList = traitcollection.traits
spellObjectList = spellcollection.spells


class baseEntity(object):
    x = 0

    def __init__(self, health, attack, mana, name, startingTraits):
        self.name = name

        self.traits = startingTraits

        self.lastMoveList = [0]

        self.isTurn = False

        self.stats = {
            'health': 0,
            'baseHealth': health,
            'extraHealth': 0,

            'attack':  0,
            'baseAttack': attack,
            'extraAttack': 0,

            'mana': 0,
            'baseMana': mana,
            'extraMana': 0,

            'damageTakenMult': 0,
            'baseDamageTakenMult': 1,
            'extraDamageTakenMult': 0,

            'lifeSteal': 0,
            'baseLifeSteal': 0,
            'extraLifeSteal': 0,

            'isStunned': 0,
            'istunnedBaseFactor': 0,
            'istunnedExtraFactor': 0
        }

    def logStats(self):
        print(self.name + "'s health is :", self.stats['health'])
        print(self.name + "'s attack is :", self.stats['attack'])
        print(self.name + "'s mana is :", self.stats['mana'])
        print(self.name + "'s damageTakenMult is :",
              self.stats['damageTakenMult'])
        print(self.name + "'s lifeSteal is :", self.stats['lifeSteal'])
        print(self.name + "'s traits are :", self.traits)
        print(">>>>>>>")

    def updateStats(self):
        self.stats['health'] = self.stats['baseHealth'] + \
            self.stats['extraHealth']
        self.stats['attack'] = self.stats['baseAttack'] + \
            self.stats['extraAttack']
        self.stats['mana'] = self.stats['baseMana'] + self.stats['extraMana']
        self.stats['lifeSteal'] = self.stats['baseLifeSteal'] + \
            self.stats['extraLifeSteal']
        self.stats['damageTakenMult'] = self.stats['baseDamageTakenMult'] + \
            self.stats['extraDamageTakenMult']
        self.stats['isStunned'] = self.stats['istunnedBaseFactor'] + \
            self.stats['istunnedExtraFactor']

    def statCheckSequence(self):
        self.updateStats()
        self.logStats()

    def updateStatByKey(self, key, value):
        self.stats[key] += value
        self.updateStats()

    def traitCheck(self):
        self.traitCheckModule(1)

    def traitCheckModule(self, mod):
        for index, trait in enumerate(self.traits):

            if (trait['turns'] >= 0):
                if (trait['added']):
                    trait['turns'] -= 1

                if (trait['added'] == False):
                    trait['added'] = True

                    for name, value in traitObjectList[trait['trait']].items():
                        self.updateStatByKey(name, mod * int(value))

            else:
                self.removeTrait(index)
                for name, value in traitObjectList[trait['trait']].items():
                    self.updateStatByKey(name, -mod * int(value))

    def applyTurn(self, turnData, spell):
        currentMove = turnData['current']  # entity currently on turn
        self.traitCheck()
        currentMove.traitCheck()

        if (spell < -1):
            # if normal attack
            if (currentMove.stats['isStunned'] <= 0):
                healed = 0
                attackContext = currentMove.stats['attack']
                damageTaken = -round(
                    attackContext+((attackContext*self.stats['damageTakenMult'])/100))

                if (currentMove.stats['lifeSteal'] > 0):
                    healed = - \
                        round(
                            (damageTaken*currentMove.stats['lifeSteal'])/100)
                print(currentMove.name+" dealt", -
                      damageTaken, "damage to "+self.name)
                print(currentMove.name+" stole",
                      healed, "hp from "+self.name)

                self.updateStatByKey('baseHealth', damageTaken)
                currentMove.updateStatByKey('baseHealth', healed)
            else:
                print(currentMove.name + " is stunned!")

        elif (spell > -1):
            # if spell cast
            spell = list(spellObjectList.keys())[spell-1]
            spellEffect = spellObjectList[spell]

            if (spellEffect['manaCost'] <= currentMove.stats['mana']):
                currentMove.updateStatByKey(
                    'baseMana', -spellEffect['manaCost'])
                print(currentMove.name + " cast " + spell)
                newTrait = {}
                moveOn = ''

                if (spellEffect['target'] != 'self'):
                    for name, value in spellEffect.items():
                        if (name != 'target' and name != 'turns' and name != 'manaCost'):
                            newTrait[name] = value

                    moveOn = self

                else:
                    for name, value in spellEffect.items():
                        if (name != 'target' and name != 'turns' and name != 'manaCost'):
                            newTrait[name] = value

                    moveOn = currentMove

                seed = int(time.time()*1000.0)
                traitName = f'newTrait{seed}'
                moveOn.addTrait(giveTT(traitName, spellEffect['turns']))
                traitcollection.addTrait(traitName, newTrait)
                moveOn.traitCheck()

            else:
                print(spell+" cast failed due to low mana!")

    def addTrait(self, trait):
        self.traits.append(trait)

    def removeTrait(self, ind):
        self.traits.pop(ind)
