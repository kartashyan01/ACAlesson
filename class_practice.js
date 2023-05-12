// Task 1
// Create a method in the Person class which returns how another person's age compares.
// Given the instances p1, p2 and p3, which will be initialized with the attributes name and
// age, return a sentence in the following format:
// {other person name} is {older than / younger than / the same age as} me.
// Example:
// p1 = Person("Samuel", 24)
// p2 = Person("Joel", 36)
// p3 = Person("Lily", 24)
// p1.compareAge(p2) ➞ "Joel is older than me."
// p2.compareAge(p1) ➞ "Samuel is younger than me."
// p1.compareAge(p3) ➞ "Lily is the same age as me."

class Person {
    constructor(name, age){
      this.name = name;
      this.age = age;
    }
    compareAge(anotherPerson){
      if(this.age < anotherPerson.age){
          return`${anotherPerson.name} is older than ${this.name}`
      } else if(this.age > anotherPerson.age){
          return`${anotherPerson.name} is younger than ${this.name}`
      } else{
          return `${anotherPerson.name} is is the same age as ${this.name}`
      }
      }
  }
  
  const p1 = new Person("Samuel", 24)
  const p2 = new Person("Joel", 36)
  const p3 = new Person("Lily", 24)
  
  console.log(p1)
  console.log(p2) 
  console.log(p3)
  
  console.log(p1.compareAge(p2));
  console.log(p2.compareAge(p1));
  console.log(p1.compareAge(p3))
  
  //Task 2
  // Create a class named User and create a way to check the number of users (number of
  //     instances) that were created, so that the value can be accessed as a class attribute.
  //     Example:
  //     u1 = new User("johnsmith10")
  //     User.userCount ➞ 1
  //     u2 = new User("marysue1989")
  //     User.userCount ➞ 2
  //     u3 = new User("milan_rodrick")
  //     User.userCount ➞ 3
  
  class User{
      static count = 0;
         
      constructor (name) {
          this.name = name;
          User.count++;
      }
  }
  
  const user1 = new User('Alice');
  console.log(user1);
  console.log(User.count);
  
  const user2 = new User('Bob');
  console.log(user2);
  console.log(User.count)
  
  const user3 = new User('John');
  console.log(user3);
  console.log(User.count)