import random
import time

numberOfProcess = 5
processMap = []
sumOfBurstTime = 0
totalWaitingTime = 0
totalTurnAroundTime = 0

for it in range(numberOfProcess):
    processMap.append({"processID": it, "burstTime": random.randint(0, 9), "waitingTime": 0, "turnAroundTime": 0,
                      "arrivalTime": random.randint(1, 2), "priority": random.randint(0, 3)})

    # print("before change",processMap[changedAt]["burstTime"],processMap[it]["burstTime"])
    # print('mian',processMap)
    for itInner in range(it):
        if processMap[it]["arrivalTime"] < processMap[itInner]["arrivalTime"]:
            temp = processMap[it]
            processMap[it] = processMap[itInner]
            processMap[itInner] = temp

        if processMap[it]["arrivalTime"] == processMap[itInner]["arrivalTime"]:
            if processMap[it]["priority"] < processMap[itInner]["priority"]:
                temp = processMap[it]
                processMap[it] = processMap[itInner]
                processMap[itInner] = temp
            elif processMap[it]["priority"] == processMap[itInner]["priority"]:
                if processMap[it]["processID"] < processMap[itInner]["processID"]:
                    temp = processMap[it]
                    processMap[it] = processMap[itInner]
                    processMap[itInner] = temp


for it in range(numberOfProcess):
    sumOfBurstTime += processMap[it]["burstTime"]

    for itInner in range(it):
        processMap[it]["waitingTime"] += processMap[itInner]["burstTime"]

    processMap[it]["turnAroundTime"] = processMap[it]["burstTime"] + \
        processMap[it]["waitingTime"]

    totalTurnAroundTime += processMap[it]["turnAroundTime"]
    totalWaitingTime += processMap[it]["waitingTime"]

    print("Process no :", processMap[it]["processID"], " ", processMap[it]["arrivalTime"], " ", processMap[it]["burstTime"],
          "ms ", processMap[it]["waitingTime"], "ms ", processMap[it]["turnAroundTime"], "ms ", processMap[it]["priority"])

    averageWaitingTime = float(totalWaitingTime)/numberOfProcess
    averageTurnAroundTime = float(totalTurnAroundTime)/numberOfProcess


print("Average waiting time: ", averageWaitingTime)
print("Average turnaround time: ", averageTurnAroundTime)
# print(sumOfBurstTime)
