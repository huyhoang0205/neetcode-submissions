class MinStack {
    private mainstack : any;
    private minstack : any;
    constructor() {
        this.mainstack = [];
        this.minstack = []; 
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        if(this.mainstack.length === 0) {
            this.mainstack.push(val);
            this.minstack.push(val);
        }
        else {
            if(this.getMin() > val) {
                this.minstack.push(val);
            } else {
                this.minstack.push(this.getMin());
            }
            this.mainstack.push(val);
        }
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.mainstack.pop();
        this.minstack.pop();
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.mainstack[this.getLen() - 1];
    }

    getLen(): number {
        return this.mainstack.length;
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.minstack[this.getLen() - 1];
    }
}
