class TrieNode {
    public children: any;
    public word: boolean;
    constructor() {
        this.children = Array(26).fill(null);
        this.word = false;
    }
}

class WordDictionary {
    private root: any;
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word: string): void {
        let cur = this.root;
        for(const c of word) {
            const index = c.charCodeAt(0) - 'a'.charCodeAt(0);
            if(!cur.children[index]) {
                cur.children[index] = new TrieNode;
            }
            cur = cur.children[index];
        }
        cur.word = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word: string): boolean {
        return this.dfs(word, 0 , this.root);
    }

    dfs(word: string, i : number, root: TrieNode): boolean {
        let cur = root;
        for (let j = i ; j < word.length; j++) {
            const c = word[j];
            if( c === '.') {
                for(const child of cur.children) {
                    if(child && this.dfs(word,j + 1,child)) {
                        return true;
                    }
                }

                return false;
            } else {
                const index = c.charCodeAt(0) - 97;
                if(!cur.children[index]) return false;
                cur = cur.children[index];
            }
        }

        return cur.word;
    }
}
