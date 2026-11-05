class person{
    constructor(name,age){
        this.name = name;
        this.age =age;
    }

    sayhi(){
        return `hi ${this.name}`;
    }
};

class teacher extends person{
    constructor(name,age,salary,subject){
        super(name,age);
        this.salary = salary;
        this.subject = subject;
    }

}

const student1 = new person('rahul',20);
console.log(student1);
console.log(student1.sayhi());

const t1 = new teacher('riya',30,20000,'javascript');
console.log(t1);
console.log(t1.sayhi());