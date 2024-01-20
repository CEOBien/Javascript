/*Exercises Level 1
Create an Animal class. The class will have name, age, color, legs properties and create different methods
Create a Dog and Cat child class from the Animal Class. */

class Animals{
    constructor(name, age, color, legs){
        this.name = name,
        this.age = age,
        this.color = color,
        this.legs = legs

    }
}

const animals = new Animals();
console.log(animals);

class Dog extends Animals{
    constructor(name, age, color, legs, kungfu,gender){
        super(name, age, color, legs)
        this.kungfu = kungfu,
        this.gender = gender

    }

    Bark(){
        return 'gau gau gau';
    }

    getInfo(){
        let kungfu = this.kungfu;
        let formattedSkills = kungfu ? `It knows ${kungfu}` : ''
        let pronoun = this.gender == 'male' ? 'He' : 'She'

        let info = `${this.name} is ${this.age}. ${pronoun} , ${formattedSkills}`
        return info

    }
}

const dog = new Dog('Nam', '20', 'black', '4', 'kungfu Meo', 'male');

console.log(dog);
console.log(dog.Bark());
console.log(dog.getInfo());

class Cat extends Animals{
    constructor(name, age, color, legs, kungfu,gender){
        super(name, age, color, legs)
        this.kungfu = kungfu,
        this.gender = gender
    }
    Bark(){
        return 'meow meow meow';
    }
    getInfo(){
        let kungfu = this.kungfu;
        let formattedSkills = kungfu ? `It knows ${kungfu}` : ''
        let pronoun = this.gender == 'Male' ? 'He' : 'She'

        let info = `${this.name} is ${this.age}. ${pronoun} , ${formattedSkills}`
        return info

    }
}

const cat = new Cat('Nam', '20', 'black', '4','Kungfu Dog','female');

console.log(cat);
console.log(cat.Bark());
console.log(cat.getInfo());

//finish exercise 1


/*Exercises Level 2
Override the method you create in Animal class */


/*Exercises Level 3
Let's try to develop a program which calculate measure of central tendency
 of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). 
 In addition to those measures find the min, max, count, percentile, and frequency distribution of
  the sample. You can create a class called Statistics and create all 
the functions which do statistical calculations as method for the Statistics class. Check the output below. */