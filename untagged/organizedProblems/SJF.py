import random;

numberOfProcess = 5;
processMap = [];
sumOfBurstTime=0;totalWaitingTime=0;totalTurnAroundTime=0

for it in range(numberOfProcess):
    processMap.append({"burstTime":random.randint(0,9),"waitingTime":0,"turnAroundTime":0})
    
    # print("before change",processMap[changedAt]["burstTime"],processMap[it]["burstTime"])
    # print('mian',processMap)
    for itInner in range(it):
        if  processMap[it]["burstTime"]<processMap[itInner]["burstTime"]:     
              temp = processMap[it];
              processMap[it]=processMap[itInner];
              processMap[itInner]=temp
          
               

for it in range(numberOfProcess):
    sumOfBurstTime+=processMap[it]["burstTime"]
    
    for itInner in range(it):
        processMap[it]["waitingTime"]+=processMap[itInner]["burstTime"];
        

    processMap[it]["turnAroundTime"]=processMap[it]["burstTime"]+processMap[it]["waitingTime"]
    
    totalTurnAroundTime+=processMap[it]["turnAroundTime"];
    totalWaitingTime+=processMap[it]["waitingTime"];
    
    print("Process no :", it," ",processMap[it]["burstTime"],"ms ",processMap[it]["waitingTime"],"ms ",processMap[it]["turnAroundTime"],"ms")

    averageWaitingTime = float(totalWaitingTime)/numberOfProcess;
    averageTurnAroundTime =float(totalTurnAroundTime)/numberOfProcess;


print("Average waiting time: ", averageWaitingTime)
print("Average turnaround time: ", averageTurnAroundTime)
# print(sumOfBurstTime)