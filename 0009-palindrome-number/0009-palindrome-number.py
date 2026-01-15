class Solution:
    def isPalindrome(self, x: int) -> bool:
        y = str(x)
        if x > 2**31 - 1 or x < -2**31 :
            return False
        else:
            if y[::-1] == y:
                return True
            else:
                return False

        

        