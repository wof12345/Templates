#include <bits/stdc++.h>

using namespace std;

int main()
{
    int testcase, currentArrayLength;
    cin >> testcase;
    while (testcase--)
    {
        cin >> currentArrayLength;
        int array[currentArrayLength];
        int maxLength = currentArrayLength;

        for (int i = 0; i < currentArrayLength; i++)
        {
            cin >> array[i];
        }

        for (int i = 0; i < maxLength; i++)
        {

            for (int j = i; j < maxLength; j++)
            {
                int max = INT_MIN;
                for (int k = i; k <= j; k++)
                    if (max < array[k])
                        max = array[k];

                cout << max;
                cout << endl;
            }
        }
    }

    return 0;
}
