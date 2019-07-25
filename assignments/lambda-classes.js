// CODE here for your Lambda Classes


class Person {
    constructor(attr){
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
    }

    //methods

    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
    };
}//closes Person


class Instructor extends Person{
    constructor(attr){
        super(attr);
        this.specialty = attr.specialty;
        this.favLanguage = attr.favLanguage;
        this.catchPhrase = attr.catchPhrase;
    }

    //methods

    demo(subject){
        console.log(`Today we are learning about ${subject}`) //HELP
    };

    grade(student, subject){
        console.log(``) //HELP
    };
}//closes Instructor extentsion Person


class Student extends Person{
    constructor(attr){
        super(attr);
        this.previousBackground = attr.previousBackground;
        this.className = attr.className;
        this.favSubjects = attr.favSubjects;
    }

    //method

    listsSubjects(){
        return `${this.favSubjects}`
    };

    PRAssignment(subject){
        return `${student.name} has begun spring challenge on ${subject}` //HELP
    };

    sprintChallenge(subject){
        return `${student.name} has begun sprint challenge on ${subject}` //HELP
    };
}//closes Student extension Person


class ProjectManager extends Instructor{
    constructor(attr){
        super(attr);
        this.gradClassName = attr.gradClassName;
        this.favInstructor = attr.favInstructor;
    }

    //method

    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times`
    };

    debugsCode(student){
        return `${this.name} debugs ${student.this.name}'s code on ${subject}`
    }

}//closes Project Manager extension Instructor


//OBJECTS

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  const connor = new Person({
    name: 'connor',
    location: 'indiana',
    age: 21,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  const kk = new Student({
    name: 'KK',
    location: 'Colorado',
    age: 29,
    favLanguage: 'HTML',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  const syd = new ProjectManager({
    name: 'Syd',
    location: 'cali',
    age: 25,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });


  syd.speak();
  fred.demo(math);