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