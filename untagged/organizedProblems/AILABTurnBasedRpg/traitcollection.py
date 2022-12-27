traits = {
    'inspired': {'extraAttack': 30, 'extraHealth': 20},
    'mana surge': {'extraMana': 100},
    'raged': {'extraAttack': 40},
    'bloodlust': {'extraLifeSteal': 10},
    'mana void': {'mana': -100},
    'vulnerable': {'extraDamageTakenMult': 39},
    'weakend': {'extraAttack': -40},
    'shielded': {'extraHealth': 100},
    'stunned': {'istunnedExtraFactor': 1},
    'invulnerable': {'extraDamageTakenMult': -41}
}


def addTrait(name, value):
    traits[name] = value
