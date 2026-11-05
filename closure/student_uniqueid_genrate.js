 function genratestudent_id(){
    //lexical scope variable decalred
    let student_id = 100;   
    return function(){
        student_id++;
        console.log(student_id);
    }
}

//function reference store
const genrate = genratestudent_id();
genrate();
genrate();
genrate();
