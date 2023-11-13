var Student = {
    name: "Annie",
    id: "1234",
    course: "JavaScript",
    getStudentInfo: function () {
        return {
            name: this.name,
            id: this.id,
            courseTraining: this.course 
        }
    }
}
//console.log(Student.getStudentInfo());

globalThis.Student = {
    Student: "second student"
}

module.exports = {
    Student : Student
}