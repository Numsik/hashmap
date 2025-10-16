class Hashmap{
    constructor(capacity = 16, loadfactor = 0.75){
        this.capacity = capacity;
        this.loadfactor = loadfactor;
        this.size = 0;
        this.buckets = new Array(this.capacity).fill(null).map(() => []);

    }
        
}