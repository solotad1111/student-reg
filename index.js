function registerStudent(){
    let name=prompt("enter student name");
    let age=prompt("enter student age:");
    let courses=[];
    let courseCount=Number(prompt("how many courses is the student registering for?"));
        for(let i=0;i<courseCount ;i++){
            let course=prompt(`enter course ${i+1}name:`);
            courses.push(course);
        }
        return{
            name:name,
            age:age,
            courses:courses

        };
}
let students=[];
let studentCount=Number(prompt("how many students are registering:"));
for(i=0;i<studentCount;i++){
    let student=registerStudent();
    students.push(student);
}
function displayStudent(students){
    console.log("registered students:");
    students.forEach((student)=>{
        console.log(`name:${student.name},age:${student.age}`);
        console.log(student.courses.join(","));
    });
}

displayStudent(students);