#include <bits/stdc++.h>
using namespace std;
class Solution {
public:
    int reverse(int x) {
        int ld;
        
        
        long revN=0;
while (x!=0){
    ld=x%10;
    if (revN < - (pow(2,31))/10 || revN > (pow(2,31)- 1)/10){
return 0;
    }
    revN=revN*10 + ld;
    x=x/10;
}
        return (int)revN;
    }
};