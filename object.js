var Person = {
    name: "Annie",
    id: 1234,
    address: "California",
    getPersonDetails: function () {
        return {
            name: this.name,
            id: this.id,
            address: this.address,
            hobby: this.hobby,
            speciality: this.speciality,
        }
    }
}

//console.log(Person.getPersonDetails());

var Student = Object.create(Person);
Student.hobby = "jogging";
Student.speciality = "programmer";
console.log(Student.getPersonDetails());

Student.getSpeciality = function (params) {
    return this.speciality;
}

console.log(Student.getSpeciality());
//console.log(Person.getSpeciality());

//var emptyObj = Object.create({});

//console.log(emptyObj._proto_)

var Jobs = { JobTitle: "developer", Salary: 2000, Location: "San Jose" } 
var Student2 = { Salary: 500 }
var userDetail = {}
userDetail = Object.assign(userDetail, Student2, Jobs);
console.log(userDetail);

var nullObjPrototype = Object.create(null);
console.log(nullObjPrototype._proto_);
