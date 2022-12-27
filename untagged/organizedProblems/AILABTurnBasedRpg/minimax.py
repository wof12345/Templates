# test data
stateTree = {
    '-2': ['3', '20'],
    '3': ['-8', '7'],
    '20': ['15', '14'],
    '10': ['-8', '-1'],
    '-8': ['8', '-5'],
    '-1': ['1', '0']
}


def minimax(state, depth, isMaximizingPlayer, alpha, beta, stateTree):

    if (state == '0'):
        return state

    if state in stateTree:
        if isMaximizingPlayer:
            bestVal = -12412433
            print(state, stateTree[state], bestVal)

            for childState in stateTree[state]:
                print(childState)
                value = minimax(str(childState), depth+1,
                                False, alpha, beta, stateTree)

                bestVal = max(bestVal, int(value))

                alpha = max(alpha, bestVal)
                if beta <= alpha:
                    break
            return bestVal

        else:
            bestVal = 12412433
            for childState in stateTree[state]:
                value = minimax(str(childState), depth+1,
                                True, alpha, beta, stateTree)
                bestVal = min(bestVal, int(value))
                beta = min(beta, bestVal)
                if beta <= alpha:
                    break
            return bestVal
    else:
        return state


value = minimax('-2', 0, True, 0, 0, stateTree)
print(value)
