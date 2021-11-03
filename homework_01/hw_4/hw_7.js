// Задание 1

const animal = {
    _name: 'Петух',
    get name() {
        return this._name;
    },

    eat() {
        console.log(`${this.name} ест`)
    },
    say() {
        console.log("Неизвестное животное молчит")
    },
    rename(newName) {
        if (/^[А-Яа-я](( )*([А-Яа-я]|-)*)*$/.test(newName)) {
            this._name = newName;
        } else {
            console.log('Попробуйте другое имя')
        }
    },
};


Object.defineProperties(animal, {
    eat: {
        writable: false,
        configurable: false,
        enumerable: false,
    },
    say: {
        writable: false,
        configurable: false,
        enumerable: false,
    },
    rename: {
        writable: false,
        configurable: false,
        enumerable: false,
    },
    _name: {
        enumerable: false,
        configurable: false,
    }
});

const cat = {
    __proto__: animal,
    _name: 'Мэни',
    say() {
        console.log(`${this.name} говорит мяу`);
    },
    hunt() {
        console.log(`${this.name} охотится`);
    },
};

Object.defineProperties(cat, {
    say: {
        writable: false,
        configurable: false,
        enumerable: false,
    },
    hunt: {
        writable: false,
        configurable: false,
        enumerable: false,
    },
    _name: {
        enumerable: false,
        configurable: false,
    },
});

const dog = {
    _name: 'Пират',
    __proto__: animal,
    say() {
        console.log(`${this.name} говорит гав`);
    },

};

Object.defineProperties(dog, {
    _name: {
        enumerable: false,
        configurable: false,
    },
    say: {
        writable: false,
        configurable: false,
        enumerable: false,
    },
});

const parrot = {
    _name: 'Кеша',
    __proto__: animal,
    say() {
        console.log(`${this.name} поёт`);
    },
};

Object.defineProperties(parrot, {
    _name: {
        enumerable: false,
        configurable: false,
    },
    say: {
        writable: false,
        configurable: false,
        enumerable: false,
    },
});


// Задание 2 (функция-конструктор)

function Animal() {
    Object.defineProperties(this, {
            _name: {
                value: 'Петух',
                writable: true,
                enumerable: true,
            },
            name: {
                get() {
                    return this._name;
                },
            },
            rename: {
                value: (newName) => {
                    if (/^[А-Яа-я](( )*([А-Яа-я]|-)*)*$/.test(newName)) {
                        this._name = newName;
                    } else {
                        console.log('Попробуйте другое имя')
                    }
                },
            },
            eat: {
                value: function () {
                    console.log(`${this.name} ест`)
                },
            },
            say: {
                get() {
                    return this._say;
                }
            },
            _say: {
                value: function () {
                    console.log("Неизвестное животное молчит")
                },
                writable: true,
            }
        }
    )
}

function Cat() {
    Animal.call(this);
    this._name = 'Мэни';
    Object.defineProperties(this, {
        hunt: {
            value: () => {console.log(`${this.name} охотится`)},
        },
        _say: {
            value: () => {console.log(`${this.name} говорит мяу`)},
        },
    })
}

function Dog() {
    Animal.call(this);
    this._name = 'Пират';
    this._say = () => {
        console.log(`${this.name} говорит гав`)
    };
}

function Parrot() {
    Animal.call(this);
    this._name = 'Кеша';
    this._say = () => {
        console.log(`${this.name} поёт`)
    };
}


// Задание 3 (классы)

class Animal {
    constructor() {
        Object.defineProperties(this, {
            _name: {
                value: 'Петух',
                writable: true,
                enumerable: true,
            },
        })
    }

    get name() {
        return this._name;
    }

    rename(newName) {
        if (/^[А-Яа-я](( )*([А-Яа-я]|-)*)*$/.test(newName)) {
            this._name = newName;
        } else {
            console.log('Попробуйте другое имя')
        }
    }

    eat() {
        console.log(`${this.name} ест`)

    }

    say() {
        console.log("Неизвестное животное молчит")
    }
}

class Cat extends Animal {
    constructor() {
        super();
        this._name = 'Мэни';
    }

    say() {
        console.log(`${this.name} говорит мяу`);
    }

    hunt() {
        console.log(`${this.name} охотится`);
    }
}

class Dog extends Animal {
    constructor() {
        super();
        this._name = 'Пират';
    }

    say() {
        console.log(`${this.name} говорит гав`);
    }
}

class Parrot extends Animal {
    constructor() {
        super();
        this._name = 'Кеша';
    }

    say() {
        console.log(`${this.name} поёт`);
    }
}
