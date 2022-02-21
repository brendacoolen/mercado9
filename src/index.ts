let cantidadProd: number = Number(
  prompt("Ingrese la cantidad de productos que hay en el negocio")
);
let ingresarProd: string;
let ingresarStock: number;
let ingresarPrecio: number;
let productos: string[] = [];
let stockProd: number[] = [];
let precioProd: number[] = [];

function cargarProductos(): void {
  for (let i: number = 0; i < cantidadProd; i++) {
    ingresarProd = String(prompt("ingrese un producto"));
    productos.push(ingresarProd);
    ingresarStock = Number(prompt("Ingrese el stock del producto"));
    stockProd.push(ingresarStock);
    ingresarPrecio = Number(prompt("Ingrese el precio del producto"));
    precioProd.push(ingresarPrecio);
  }
}

cargarProductos();

console.log(
  "Bienvenidos al supermercado Torre del este tenemos los siguientes productos"
);
for (let i: number = 0; i < cantidadProd; i++) {
  console.log(stockProd[i], productos[i], "a $", precioProd[i]);
}

function compra(cantidadCompra: number): void {
  cantidadCompra=Number(prompt("Ingrese la cantidad de productos que desea comprar"));
  while (cantidadCompra < 1) {
    cantidadCompra = Number(
      prompt("No puede adquirir menos de 1 producto.Ingrese otra cantidad")
    );
   }
 for (let i: number = 0; i < cantidadCompra; i++) {
      let productoElegido: string = String((prompt("Digite el nombre del producto que desea comprar"));
      let cantidadElegida: number = Number(
        prompt("Ingrese la cantidad del producto que quiere comprar")
      );
      while(productoElegido===productos[i] && stockProd[i]<1){
        productoElegido = String(
          prompt("No hay stock del producto seleccionado, ingrese otro producto")
        );
        cantidadElegida = Number(prompt("Ingrese la cantidad deseada"));
      }
      if(productoElegido===productos[i] && stockProd[i]>0){
        console.log("Usted compro",cantidadElegida,productos[i],"a $",precioProd[i]*cantidadElegida,".");
        console.log("Quedan",stockProd[i]-cantidadElegida,"en stock.");
      }
  }
};

compra();
console.log("Gracias por su compra.Vuelva a visitarnos.");
