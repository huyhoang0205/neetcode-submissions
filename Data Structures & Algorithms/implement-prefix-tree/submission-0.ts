class TrieNode {
    private children :any;
    private endOfWord: boolean

    constructor() {
        this.children = new Map();
        this.endOfWord = false;
    }
}

class PrefixTree {
    private root : any;
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word: string): void {
        let cur = this.root;
        for(const c of word) {
            if(!cur.children.has(c)) {
                cur.children.set(c, new TrieNode());
            }
            cur = cur.children.get(c);
        }
        cur.endOfWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word: string): boolean {
        let cur = this.root;
        for(const c of word) {
            if(!cur.children.has(c)) return false;
            cur = cur.children.get(c);
        }

        return cur.endOfWord;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix: string): boolean {
        let cur = this.root;
        for(const c of prefix) {
            if(!cur.children.has(c)) return false;
            cur = cur.children.get(c);
        }

        return true;
    }
}
