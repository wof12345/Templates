#include<stdio.h>
int main()
{
    char str[5][5];
    int i,n=5;
    for (size_t i = 0; i < n; i++)
    {
        scanf("%[^\n]",&str[i]);
    }
    for (size_t i = 0; i < n; i++)
    {
        printf("%s\n",str[i]);
    }
    
    


}