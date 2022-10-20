#include <bits/stdc++.h>

using namespace std;

int main()
{
    int currentArrayLength, minMost = INT_MAX, min_ind = INT_MAX, maxMost = INT_MIN, max_ind = INT_MAX, inp;
    cin >> currentArrayLength;
    int array[currentArrayLength];
    for (int i = 0; i < currentArrayLength; i++)
    {
        cin >> inp;

        if (inp > maxMost)
        {
            max_ind = i;
            maxMost = inp;
        }

        if (inp < minMost)
        {
            min_ind = i;
            minMost = inp;
        }

        array[i] = inp;
    }
    array[min_ind] = maxMost;
    array[max_ind] = minMost;

    for (int i = 0; i < currentArrayLength; i++)
    {
        cout << array[i];
        if (i + 1 < currentArrayLength)
        {
            cout << " ";
        }
    }

    int m;
    cin >> m;

    return 0;
}
