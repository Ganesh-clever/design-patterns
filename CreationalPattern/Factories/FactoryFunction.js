function createUser(){
    let count = 0;

    return {
        increment: ()=>{
            count++;
        },

        getValue:()=>{
           return count;
        }
    }
}

const fn = createUser();

fn.increment();
fn.increment();

console.log(fn.getValue());
