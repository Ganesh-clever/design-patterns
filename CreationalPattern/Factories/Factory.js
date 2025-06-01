class Employee {
    constructor(name){
        this.name = name
    }
}

class Manager {
    constructor(name){
        this.name = name
    }
}

class Client {
    constructor(name){
        this.name = name
    }
}

class Factory {
    create(type,value){
       switch(type){
        case 'Employee':
            return new Employee(value);
        case 'Manager':
            return new Manager(value);
        case 'Client':
            return new Client(value);
       }
    }
}

const F = new Factory().create('Employee','Ganesh');
console.log(F);
