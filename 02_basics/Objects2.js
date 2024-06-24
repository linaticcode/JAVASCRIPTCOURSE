// const tinderUser = new Object()
// singleton object
const tinderUser = {}
// non singleton object

// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname: "hitesh",
            lastname : "choudhary"
        }
    }
}

// console.log(regularUser.fullname);

const obj1 = {1 : "a" ,  2 : "b"}
const obj2 = {3 : "a" ,  4 : "b"}

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({} , obj1 , obj2)
// console.log(obj3);

const obj3 = {...obj1 , ...obj2};
//spread the objects elements
// console.log(obj3);

const users = [
    {
        id : 1 ,
        email : "h@gmail.com"
    } ,
    {
        id : 1 ,
        email : "h@gmail.com"
    },
    {
        id : 1 ,
        email : "h@gmail.com"
    },
    {
        id : 1 ,
        email : "h@gmail.com"
    }

]

users[1].email
console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Objects.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));

// *** destructuring ***

const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "hitesh"
}

// course.courseInstructor

const {courseInstructor : Instructor} = course

// object destructuring
// console.log(courseInstructor);
console.log(Instructor);

// if written like this below than it is written in json
// {
//     "name" : "hitesh",
//     "coursename" : "js in hindi",
//     "price" : "free"
// }

// JSON - JAVASCRIPT OBJECT NOTATION
