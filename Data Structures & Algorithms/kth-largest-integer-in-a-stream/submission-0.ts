// import {MinPriorityQueue} from "@datastructures-js/priority-queue"

class KthLargest {
    k: number;
    nums: any;

    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k: number, nums: number[]) {
        this.k = k;
        this.nums = new MinPriorityQueue();
        for (let i=0; i<nums.length; i++) {
            this.nums.enqueue(nums[i]);
        }
        while(this.nums.size() > k){
            this.nums.dequeue();
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val: number): number {
        this.nums.enqueue(val);
        if (this.nums.size() > this.k) {
            this.nums.dequeue();
        }
        return this.nums.front();
    }
}
