function crstudent(){
    let marks = 0;
    return{
         setmarks(value){
            //marks is access by there lexical scope
            marks = value;
        },
        getmarks(){
            return marks;
        }
    }
}

const student = crstudent();
const student2 = crstudent();

student.setmarks(35);
student2.setmarks(100);
console.log(student.getmarks());
console.log(student2.getmarks());
