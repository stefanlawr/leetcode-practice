class MyHashSet {
    constructor() {
        this.values = [];
    }

    hash(key) {
        return key % 1000;
    }

    add(key) {
        if(!this.contains(key)) {
            this.values.push([this.hash(key), key]);
        }
    }

    remove(key) {
        for(let i = 0; i < this.values.length; i++) {
            if(this.values[i][0] === this.hash(key) && this.values[i][1] === key) {
                this.values.splice(i, 1);
                return;
            }
        }
    }

    contains(key) {
        for(let i of this.values) {
            if(i[0] === this.hash(key) && i[1] === key) {
                return true;
            }
        }
        return false;
    }
}

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
