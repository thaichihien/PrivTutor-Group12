'use strict'

class Account{
    #id
    #username
    #password
    #email
    #date_of_birth
    constructor(id, username, password,email, birthday){
        this.#id = id
        this.#username = username
        this.#password = password
        this.#email = email
        this.#date_of_birth = birthday
    }

    get getID(){return this.#id}
    get getUsername(){return this.#username}
    get getPass(){return this.#password}
    get getEmail(){return this.#email}
    get getBirthDay(){return this.#date_of_birth}
    
    setPassword(newPass){this.#password = newPass}
    setEmail(newEmail){this.#email = newEmail}
}

class TeacherAcc extends Account{
    #phonenum
    #degree
    constructor(id, username, password,email, birthday, phone, degree){
        super(id,username,password,email,birthday)
        this.#degree = degree
        this.#phonenum = phone
    }

    get getDegree(){this.#degree}
    get getPhone(){this.#phonenum}

    setPhone(phonenum){this.#phonenum = phonenum}
    setDegree(deg){this.#degree = deg}
}

class StudentAcc extends Account{
    #balance
    constructor(id, username, password,email, birthday, money){
        super(id,username,password,email,birthday)
        this.#balance = money
    }

    get getBalance(){this.#balance}
    setBalance(amount){this.#balance = amount}
}