class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        ssl = sorted(strs)
        x=ssl[0]
        y=ssl[-1]
        i=0
        if len(strs) > 200 or len(strs)<1:
            return ""
        for j in strs:
            if len(j)>200 or len(j)<0 or not j.islower():
                return ""
        while i < len(x) and x[i]==y[i]:
            i+=1
        return x[:i]
        

        