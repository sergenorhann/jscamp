function addToCart(productName = "Elma", quantity) {
    console.log(" Ürün Sepete Eklendi : " + productName
        + ", adet : ", quantity)
}

//addToCart()
addToCart(10)
//addToCart(15)

let sayHello = () => {
    console.log("Hello World!")
}
sayHello()

let sayHello2 = function () {
    console.log("Hello World 2")
}
sayHello2();

function addToCart2(productName, quantity, unityPrice) {

}
addToCart2("Elma", 5, 10)
addToCart2("Armuz", 2, 20)
addToCart2("Limon", 3, 15)

let product1 = { productName: "Elma", quantity: 5, unityPrice: 10 }

function addToCart3(product) {
    console.log(product.productName)
    console.log(product.quantity)
    console.log(product.unityPrice)
}
addToCart3(product1)

let product2 = { productName: "Elma", quantity: 5, unityPrice: 10 }
let product3 = { productName: "Elma", quantity: 5, unityPrice: 10 }
product2 = product3
product2.productName = "KARPUZ"
console.log(product3.productName)

function addToCart4(products) {
    console.log(products)
}
let products = [
    { productName: "Elma", quantity: 5, unityPrice: 10 },
    { productName: "Armut", quantity: 5, unityPrice: 10 },
    { productName: "Karpuz", quantity: 5, unityPrice: 10 }
]
addToCart4(products)

function add(...numbers) {//rest
    let total = 0

    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]
    };
    console.log(total)

};
add(20, 30)


let numbers = [30, 10, 500, 600, 120]
//console.log(...numbers)
console.log(Math.max(...numbers))

let [icAnadolu, marmara, karadeniz, [icAnadoluSehirleri]] = [
    { name: "İç Anadolu", population: "20M" },
    { name: "Marmara", population: "30M" },
    { name: "Karadeniz", population: "10M" },
    [
        ["Ankara", "Konya"],
        ["İstanbul", "Bursa"],
        ["Sinop", "Trabzon"]
    ]
];
//console.log(icAnadolu)
//console.log(marmara)
console.log(icAnadoluSehirleri)

let newProductName, newUnitPrice, newQuantity
(
    { productName: newProductName, unitPrice:newUnitPrice, quantity:newQuantity }
    =
    { productName: "Elma", unitPrice: 10, quantity: 5 }
)

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)