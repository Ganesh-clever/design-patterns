const Singleton = (function(){
   let instance;

    function createInstance (){
        const object = new Object("I'm the instance");
        return object;
    }

    return {
        getInstance: () => {
            if(!instance){
                instance = createInstance();
            }
           return instance;
        }
    }
}());

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

console.log(instanceA === instanceB);