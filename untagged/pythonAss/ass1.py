def employeeProb():
    years = input("Enter employee year of service:")
    salary = input("Enter user salary:")

    totalSalary = (int(years)*int(salary))*(15/100)
    print("Total bonus = ", totalSalary)


def discountProb():
    quantity = input("Enter number of items:")

    totalCost = (int(quantity) * 100)-(((int(quantity) * 100))*(10/100))

    print("Total Cost :", totalCost)


def canGiveExam():
    numberOfClass = input("Total classes held:")
    studentAttended = input("Attended classes:")

    percentage = (int(studentAttended)/int(numberOfClass))*100

    # print(percentage)
    if (percentage >= 60.0):
        print("You can attend exam.")
    else:
        print("You can not attend exam.")


def mildSexism():
    gender = input("Gender(M/F):").capitalize()
    maritalStatus = input("Married?(Y/N):")

    if (gender == 'F'):
        print("Sorry, you can only work in cities.")
    elif (gender == "M"):
        age = int(input("How old are you:"))

        if (age >= 25 and age <= 45):
            print("You can work anywhere!! GG!")
        elif (age >= 45 and age <= 65):
            print("You can only work in urban areas!")
        else:
            print("ERROR")
    else:
        print("There are only two genders!!!")


def reverseOrder():

    numberGiven = input(
        "Note no matter how much digit is input only the first 4 shall be taken:")

    number = ""
    digitLimit = 4
    for i in range(4):
        number += numberGiven[digitLimit-1]
        digitLimit -= 1

    print(number)


# comment the problems you don't want to see
employeeProb()
discountProb()
canGiveExam()
mildSexism()
reverseOrder()
