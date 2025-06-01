const Employees = {
   init(name,email){
    this.name = name;
    this.email = email;
    return this;
   },

   getValue(){
    console.log(`${this.name} - ${this.email}`);
   }
}

const emp1 = Object.create(Employees).init("Ganesh","ganeshmurugan081@gmail.com").getValue();
const emp2 = Object.create(Employees).init("Ganesh2","ganeshmurugan2081@gmail.com").getValue();

console.log(emp1,emp2);
