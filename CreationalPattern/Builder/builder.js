class User {
    constructor(builder){
      this.name = builder.name;
      this.age = builder.age;
      this.address = builder.address;
      this.email = builder.email
    }

    getValue(){
        console.log(`${this.name} ${this.age} ${this.address} ${this.email}`);
    }
}

class UserBuilder {
    constructor(name){
      this.name = name
    }

    setAge(age){
      this.age = age;
      return this;
    }

    setAddress(address){
      this.address = address
      return this
    }

    setEmail(email){
      this.email = email;
      return this
    }

    builder(){
       return new User(this);
    }
}

const user = new UserBuilder("Ganesh").setAge(25).setAddress("somasundraplya").setEmail('ganesh@gmail.com').builder();

console.log(user.getValue());
