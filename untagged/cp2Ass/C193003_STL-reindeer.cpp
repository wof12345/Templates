#include <bits/stdc++.h>
#include <array>

using namespace std;

typedef array<int, 2> RelArr;

struct Reindeer
{
    char modification;
    string name;
    int seniority;
    int productivity;
};

bool cmp(pair<string, RelArr> &a,
         pair<string, RelArr> &b)
{
    // cout << (a.second)[1] << " comp "
    //      << (b.second)[1] << endl;
    if ((a.second)[0] != b.second[0])
        return (a.second)[0] > (b.second)[0];
    else
        return (a.second)[1] > (b.second)[1];
}

void sortMap(map<string, RelArr> &M)
{
    vector<pair<string, RelArr>> A;

    int productivityProd = 0;
    int productivitySum = 0;

    for (auto &it : M)
    {
        A.push_back(it);
    }

    sort(A.begin(), A.end(), cmp);

    // for (auto &it : A)
    // {

    //     cout << it.first << ' '
    //          << (it.second)[0] << ' '
    //          << (it.second)[1] << endl;
    // }

    for (auto &it : A)
    {
        productivityProd *= (it.second)[1];
        productivitySum += productivityProd;

        productivityProd = (it.second)[1];
    }

    cout << productivitySum << endl;

    A.clear();
}

int main()
{
    int numberOfReindeers;
    cin >> numberOfReindeers;
    Reindeer ReindeerTrack[numberOfReindeers];
    map<string, RelArr> track;
    map<string, RelArr>::iterator itr;

    for (int i = 0; i < numberOfReindeers + 1; i++)
    {
        cin >> ReindeerTrack[i].modification;
        cin >> ReindeerTrack[i].name;
        if (ReindeerTrack[i].modification == 'R')
        {
            int name = track.erase(ReindeerTrack[i].name);
        }
        else
        {
            cin >> ReindeerTrack[i].seniority;
            cin >> ReindeerTrack[i].productivity;
            track[ReindeerTrack[i].name] = {{ReindeerTrack[i].seniority, ReindeerTrack[i].productivity}};

            sortMap(track);
        }
        // for (auto &it : track)
        // {
        //     cout << it.first << ' '
        //          << (it.second)[0] << ' '
        //          << (it.second)[1] << endl;
        // }
    }

    int tem;
    cin >> tem;

    return 0;
}
