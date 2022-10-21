#include <bits/stdc++.h>

using namespace std;

int main()
{
    string givenString = "hello";
    string userString;
    queue<char> stringQueue;

    for (int i = 0; i < givenString.length(); i++)
    {
        stringQueue.push(givenString[i]);
    }

    getline(cin, userString);

    for (int i = 0; i < userString.length(); i++)
    {
        if (userString[i] == stringQueue.front())
            stringQueue.pop();
    }

    if (stringQueue.empty())
    {
        cout << "YES";
    }
    else
    {
        cout << "NO";
    }

    int tem;
    cin >> tem;

    return 0;
}
