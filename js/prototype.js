
// Вариант 3
class User {
    role = "User";
     alertRole() {
         alert(this.role);
     }
}

class Administrator extends User {
    role = "Administrator";
}

class Maintainer extends User {
    role = "Maintainer";
}

// console.log(new Administrator().hasOwnProperty('role'))
new Administrator().alertRole();
new Maintainer().alertRole();


// Вариант 1
// Прототип user с общим поведением
const vendor = {
    speak() {
        console.log(`Моя роль это ${this.type}`);
    }
};
// Объект Administrator, который наследует прототип user
const client = Object.create(vendor);
client.type = 'Клиент';

client.speak();

// Вариант 2
let animal = { // (*)
    eats: true
};

let rabbit = {
    jumps: true
};

rabbit.__proto__ = animal;
console.log(`А правда что кролики прыгают? ${rabbit.jumps}`);
console.log(`А правда что кролики кушают? ${rabbit.eats}`);  //(**)

//Здесь строка устанавливает animal как прототип для rabbit.
// Затем, когда alert пытается прочитать свойство rabbit.eats (**), его нет в rabbit, поэтому JavaScript следует по ссылке [[Prototype]] и находит его в animal


// Описание
// Каждый объект, произошедший от Object, наследует метод hasOwnProperty. Этот метод может использоваться для
// определения того, содержит ли объект указанное свойство в качестве собственного свойства объекта; в отличие
// от оператора in, этот метод не проверяет существование свойств в цепочке прототипов объекта.



//Применение hasOwnProperty()
//позволяет отличить собственные свойства объекта от тех, которые были унаследованы через цепочку прототипов.
// Это особенно полезно в ситуациях, когда важно работать только с собственными свойствами объекта.
function Bird(type, color) {
    this.type = type;
    this.color = color;
}

var bird = new Bird('crow', 'black')

Object.prototype.flightSpeed = 200;


for (var key in bird) {
    // Проверяем, является ли свойство собственным
    if (bird.hasOwnProperty(key)) {
        console.log(`Свои собственные свойства bird: ${key} со значением ${bird[key]}`);
    } else {
        console.log(`bird унаследовал свойства от прототипа Object: ${key} со значением ${bird[key]}`);
    }
}

// Object выше в иерархии чем Bird, но у наследника bird своими собственными свойствами стали свойства от Bird, а унаследованными свойствами стали от прототипа Object