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
        console.log(`${student} recieves a perfect score on ${subject}`) //HELP
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
        console.log(`${this.favSubjects}`)
    };

    PRAssignment(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}`) //HELP
    };

    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}`) //HELP
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
        console.log(`${this.name} announces to ${channel}, @channel standy times`);
    };

    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student} code on ${subject}`)
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

  const kailee = new Student({
    name: 'KK',
    location: 'Colorado',
    age: 29,
    favLanguage: 'HTML',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`,
    favSubjects: "Math, science"
  });

  const syd = new ProjectManager({
    name: 'Syd',
    location: 'cali',
    age: 25,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });


  //testing person
  syd.speak();
  fred.speak();

  //testing instructor
  fred.demo("math");
  fred.grade("fred", "math");
  syd.demo("SCIENCE");

  //testing student
  kailee.listsSubjects();
  kailee.PRAssignment("math");
  kailee.sprintChallenge("science");

  //testing project manager
  syd.standUp("help");
  syd.debugsCode("connor", "math"); //needs work

