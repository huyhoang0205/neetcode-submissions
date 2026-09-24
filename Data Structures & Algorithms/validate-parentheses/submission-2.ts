class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack = [];
        for (const c of s) {
            if(['(','[','{'].includes(c)) {
                stack.push(c);
            } else {
                const open = stack.pop();
                switch (c) {
                    case ')':
                        if(open != '(') return false;
                        break;
                    case ']':  
                        if(open != '[') return false;
                        break;
                    case '}':  
                        if(open != '{') return false;
                        break;
                }
            }
        }

        return stack.length ? false : true;
    }
}
