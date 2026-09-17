class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones: number[]): number {
        const heap = new MaxPriorityQueue();
        for (const stone of stones) heap.enqueue(stone);
        while(heap.size() > 1) {
            const x = heap.dequeue();
            const y = heap.dequeue();
            const smash = Math.abs(x - y);
            if(smash !== 0) heap.enqueue(smash);
        }
        return heap.size() ? heap.front() : 0;
    }
}
