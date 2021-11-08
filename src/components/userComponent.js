import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("User Component Yüklendi")

let userService = new UserService()

let user1 = new User(1,"Engin","Demiroğ","Ankara")
let user2 = new User(1,"Baran","Gökçekli","Muğla")

userService.add(user1)
userService.add(user2)
console.log(userService.getById(1))
console.log(...userService.list())





let customer = {id:1, firstName:"Engin"}
//prototyping
customer.lastName ="Demiroğ"
console.log(customer.lastName)