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
const genrate_2 = genratestudent_id();
genrate(); //101
genrate(); //102
genrate(); //103
genrate_2(); //101
