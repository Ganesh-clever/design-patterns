class SingleTon{
    constructor(){
        if(SingleTon.instance){
            return SingleTon.instance;
        }

        this.value = 0;
        SingleTon.instance = this
    }

    add(a,b){
       return this.value + a + b;
    } 

    getValue(){
        return this.value;
    }
}

const instance1 = new SingleTon();
const instance2 = new SingleTon();

console.log(instance1 === instance2);

instance1.add(10,20);

console.log(instance1.getValue() === instance2.getValue());


