import { MongoBaseLogger } from "../crossCuttingConcerns/logging/mongoBaseLogger.js"
import Customer from "../models/customer.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

let userService = new UserService(new MongoBaseLogger())
/*
console.log("User Component Yüklendi")


let user1 = new User(1, "Engin", "Demiroğ", "Ankara")
let user2 = new User(1, "Baran", "Gökçekli", "Muğla")

userService.add(user1)
userService.add(user2)
console.log(userService.list)
console.log(userService.getById(2))


let customer = { id: 1, firstName: "Engin" }
//prototyping
customer.lastName = "Demiroğ"
console.log(customer.lastName)

*/

userService.load()
let customerToAdd = new Customer(1, "Seda", "Yılmaz", "Ankara", 11)
customerToAdd.type="customer"
userService.add(customerToAdd)
console.log(userService.customers)
console.log(userService.employees)
//console.log(userService.errors)
//console.log(userService.getCustomersSorted())