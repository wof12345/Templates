#include <bits/stdc++.h>

using namespace std;

int main()
{
    string String;
    getline(cin, String);

    for (int i = 0; i < String.length(); i++)
    {
        if (String[i] == ',')
        {
            String[i] = ' ';
        }
        if (isupper(String[i]))
        {
            String[i] = tolower(String[i]);
        }
        else if (islower(String[i]))
        {
            String[i] = toupper(String[i]);
        }

        cout << String[i];
    }

    int demo;
    cin >> demo;
    return 0;
}
