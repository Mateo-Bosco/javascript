const productos = [
    {nombre: "harina", precio: 50},
    {nombre: "pan", precio: 10},
    {nombre: "huevos", precio: 30},
    {nombre: "leche", precio: 20},
    {nombre: "azucar", precio: 40},
];
let carrito = []

let seleccion = prompt("Hola, ¿deseas comprar algún producto? Responda con si o no")

while(seleccion != "si" && seleccion != "no"){
    alert("Por favor ingresa si o no")
    seleccion = prompt("¿Desea compra algo? Responda con si en caso afirmativo o responda con no en caso negativo")
}

if(seleccion == "si"){
    alert("A continuación le presentamos nuestra lista de productos")
    let todoslosProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$");
    alert(todoslosProductos.join(" - "))
} else if (seleccion == "no"){
    alert("Gracias por venir, ¡hasta pronto!")
}

while(seleccion != "no"){
    let producto = prompt("Agrega un producto a tu carrito")
    let precio = 0

    if(producto == "harina" || producto == "pan" || producto == "huevos" || producto == "leche" || producto == "azucar"){
        switch(producto){
            case "harina":
                precio = 50;
                break;
            case "pan":
                precio = 10;
                break;
            case "huevos":
                precio = 30;
                break;
            case "leche":
                precio = 20;
                break;
            case "azucar":
                precio = 40;
                break;
        default:
            break;
        }
    let unidades = parseInt(prompt("¿Cuántas unidades desea llevar?"))

    carrito.push({producto, unidades, precio})
    console.log(carrito)
    } else{
        alert("No disponemos de ese producto")
    }

    seleccion = prompt("¿Desea seguir comprando?")

    while(seleccion === "no"){
        alert("¡Muchas gracias por su compra! Vuelva pronto")
        carrito.forEach((carritofinal) => {
            console.log(`producto: ${carritofinal.producto}, unidades: ${carritofinal.unidades}, total a pagar por producto ${carritofinal.unidades * carritofinal.precio}`)
        })
    break;
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`El total a pagar por su compra es: ${total}`)