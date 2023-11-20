const productos = [
    {nombre: "playstation", precio: 20},
    {nombre: "steam", precio: 20},
    {nombre: "xbox", precio: 20},
    {nombre: "amazon", precio: 40},
    {nombre: "google", precio: 30},
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

    if(producto == "playstation" || producto == "steam" || producto == "xbox" || producto == "amazon" || producto == "google"){
        switch(producto){
            case "playstation":
                precio = 20;
                break;
            case "steam":
                precio = 20;
                break;
            case "xbox":
                precio = 20;
                break;
            case "amazon":
                precio = 40;
                break;
            case "google":
                precio = 30;
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