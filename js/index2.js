function verProductos() {
  let productos = "productos disponibles:/n";
  "1) llavero /n" +
    "2) figura de baby yoda /n" +
    "3)  jabonera /n" +
    "4) juguetes /n" +
    "5) protesis";

  let respuesta = prompt(
    "Ingresar el nro. de producto para ver el precio: /n" + productos
  );
  switch (parseInt(respuesta)) {
    case 1:
      console.log("Producto elegido 'llavero'. Su precio es de $400");
      break;

    case 2:
      console.log(
        "Producto elegido 'figura de baby yoda'. Su precio es de $1600"
      );
      break;

    case 3:
      console.log("Producto elegido 'jabonera'. Su precio es de $620");
      break;

    case 4:
      console.log("Producto elegido 'Rombo'. Su precio es de $2300");
      break;

    case 5:
      console.log("Producto elegido 'Protesis'. Su precio es de $5000");
      break;
    default:
      console.log("No tenemos ese producto aun...");
  }
  let continuar = confirm("volver a revisar el precio de los productos");
  if (continuar) {
    verProductos();
  }
}
