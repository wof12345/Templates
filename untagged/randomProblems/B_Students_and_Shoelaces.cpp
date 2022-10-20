#include "bits/stdc++.h"
#define ll long long
#define pb push_back
#define pi 2 * acos(0.0)
#define yes cout << "Yes" << endl
#define no cout << "No" << endl
#define ff first
#define ss second
using namespace std;
int tc;
void solve()
{
    ll a = 0, b = 0, c, d, j, k = 0, h, p1 = 0, l, i,
       p2, q1, q2, A, B, c1, c2, x1, x2, y2, y1, s = 0;
    ll q = 0, e = 0, x = 0, y = 0, o = 0, z = 0,
       alpha[26] = {}, mxi, mx2 = -1, mx1 = -1;
    string s1, s2, s3, s4, s5, s6, s7;
    ll n = 1, mni = 0, p = 0, m, mn = 0, w, mx = 0, r = 0;
    cin >> n >> m;
    vector<pair<int, int>> st(m);
    vector<int> freq(101);
    fill(freq.begin(), freq.end(), 0);
    for (i = 0; i < m; i++)
        cin >> st[i].ff >> st[i].ss;
    s = 1;
    y = 1000;
    while (s)
    {
        s = 0;
        fill(freq.begin(), freq.end(), 0);
        for (i = 0; i < m; i++)
        {
            freq[st[i].ff]++;
            freq[st[i].ss]++;
        }
        // cout << "st= " << endl;
        // for (i = 0; i < m; i++)
        // 	cout << st[i].ff << " " << st[i].ss << endl;
        // cout << "freq " << endl;
        // for (i = 1; i < 101; i++)
        // 	if (freq[i])
        // 		cout << i << " " << freq[i] << endl;
        for (i = 1; i < 101; i++)
            if (freq[i] == 1)
            {
                // cout << "1 found at " << i << endl;
                s = 1;
                for (j = 0; j < m; j++)
                    if (st[j].ff == i || st[j].ss == i)
                    {
                        st[j].ff = 0;
                        st[j].ss = 0;
                    }
            }
        x += s;
        // cout << "s= " << s << endl;
    }
    cout << x << endl;
}
int main()
{
    int t = 1;
#ifndef ONLINE_JUDGE
    freopen("input.txt", "r", stdin);
    freopen("output.txt", "w", stdout);
#endif
    // cin >> t;
    for (tc = 1; tc <= t; tc++)
        solve();
}