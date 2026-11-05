let students = []; //array

//genrate id function
function genrateid() {
  //closure
  let id = 0;
  function genrating() {
    id++;
    return id;
  }
  return genrating;
}
let genrate = genrateid();

//add student
function addStudent(name, age, course, marks) {
  //function
  let properties = {
    //object
    id: genrate(),
    name,
    age,
    course,
    marks,
  };
  students.push(properties);
}

//show student
const showsStudents = () => console.log(students);

addStudent("rahul", 20, "bca", 80);
addStudent("raj", 23, "bca", 90);
addStudent("ram", 22, "bscit", 70);

showsStudents();
