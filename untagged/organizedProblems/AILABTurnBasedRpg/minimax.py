import gameutilityfunctions
import gameinfo
import operator
availableMoves = gameinfo.availableEnemyMoves

# test data
stateTree = {

}


def minimax(state, depth, isMaximizingPlayer, alpha, beta, enemy, player, prevStateKey):

    if (depth == 5):
        tom_index = next((index for (index, d) in enumerate(
            stateTree) if d["name"] == "Tom"), None)

        print('deph')
        return prevStateKey

    print('min max called with'+str(state))

    stateTree[state] = []

    if state in stateTree:
        for move in availableMoves:
            moveData = gameutilityfunctions.calculateMoveWeight(
                enemy, player, move[0])

            moveTrack = int(state.split('*')[0])
            depthTrack = int(state.split('*')[1])

            stateKey = str(moveTrack)+'*'+str(depth)

            print(moveTrack, depthTrack, str(moveTrack)+'*'+str(depth))
            print(moveData, stateTree)
            stateTree[stateKey].append(moveData)

        stateTree[state].sort(key=operator.itemgetter('weight'))

        if isMaximizingPlayer:
            bestVal = -12412433

            for childState in stateTree[state]:
                print('child', childState)
                nextStateKey = str(childState['move'])+'*'+str(depth+1)

                value = minimax(str(nextStateKey), depth+1,
                                False, alpha, beta, enemy, player, stateKey)

                bestVal = max(bestVal, int(value))

                alpha = max(alpha, bestVal)
                print('childparent', state, 'child',
                      childState, 'alpha', alpha, beta, isMaximizingPlayer)
                if beta <= alpha:
                    break
            return bestVal

        else:
            bestVal = 12412433

            for childState in stateTree[state]:
                nextStateKey = str(childState['move'])+'*'+str(depth+1)
                value = minimax(str(nextStateKey), depth+1,
                                True, alpha, beta, enemy, player, stateKey)
                bestVal = min(bestVal, int(value))
                beta = min(beta, bestVal)

                print('childparent', state, 'child',
                      childState, 'alpha', alpha, beta, bestVal, isMaximizingPlayer)
                if beta <= alpha:
                    break
            return bestVal
    else:
        print('reached')
        return prevStateKey
