"use strict";


const students=[];

window.addEventListener("load", start);



function start(){
document.querySelector("#create-student-form").addEventListener("submit",click);
    
 addStudent()

}

function submitForm(event){
 event.preventDeafault();

 const name=form.name.value


}
function addStudent(age,email,name){

 const student = {
   name: name,
   age: number(age),
   email: email,
 };
 return student;
}


