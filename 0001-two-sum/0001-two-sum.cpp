class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        int n=nums.size();
        //cons 1
        if (n<2||n>10000){
            return {};
        }

        //cons2
        for (int i=0;i<n;i++){
            if (nums[i]<-1e9 || nums[i]>1e9){
                return {};
            }
        }

        //cons2
       
            if (target<-1e9 || target>1e9){
                return {};
            }
        

        unordered_map<int,int>mp; //value and index
        for (int i=0;i<n;i++){
            int need = target - nums[i];

            if (mp.find(need)!=mp.end()){
     return {mp[need],i};
            }
           mp[nums[i]]=i;

        }
        return {};
    }
};