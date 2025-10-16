class Hashmap{
    constructor(capacity = 16, loadfactor = 0.75){
        this.capacity = capacity;
        this.loadfactor = loadfactor;
        this.size = 0;
        this.buckets = new Array(this.capacity).fill(null).map(() => []);

    }
    hash(key){
        let hashCode = 0;
        for (let i = 0; i < key.length; i++){
            const char = key.charCodeaT(i)
            hashCode = hashCode * 31 + char
        }
        return hashCode % this.capacity;

    }
    set(key, value){

        const index = this.hash(key);
        const bucket = this.buckets[index];

        for (let item of bucket){
            if(item.key === key){
                item.value = value;
                return;
            }
        }
        bucket.push({key, value})
        this.size++;

        if (this.size / this.capacity > this.loadfactor){
            this.resize(this.capacity * 2)
        }

    }
    get(key){
        const index = this.hash(key);
        const bucket = this.buckets[index];


        for (let item of bucket){
            if(item.key === key){
                return item.value;
            }
        }
        return null;

    }



    has(key){
        return this.get(key) !== null;

    }
}