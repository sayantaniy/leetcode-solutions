class Solution:
    def isHappy(self, n: int) -> bool:
        seen=set()
        
        while (n!=1):
            if n in seen:
                return False
            seen.add(n)

            a = n
            sum=0
            while (a!=0):
                d = a%10
                sum = sum + d*d
                a=a//10
            n = sum

        return True
            
        

        


        


        