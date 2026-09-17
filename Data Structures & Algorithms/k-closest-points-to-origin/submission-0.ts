class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points: number[][], k: number): number[][] {
        const heap = new MaxPriorityQueue((p) => p.dis);
        
        for(const point of points) {
            const x = point[0];
            const y = point[1];
            const dis = Math.sqrt(x*x + y*y);
            if(heap.size() < k) {
                heap.enqueue({dis,point});
            } else {
                if(heap.front().dis > dis) {
                    heap.dequeue();
                    heap.enqueue({dis,point});
                }
            }
        }

        return heap.toArray().map(p => p.point);
    }
}
