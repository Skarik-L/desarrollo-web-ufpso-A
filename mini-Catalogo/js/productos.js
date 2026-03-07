const productos = [

    {
        imagen: "img/laptop.jpg",
        nombre: "Laptop",
        descripcion: "Laptop 16GB RAM",
        precio: "$3000000"
    },

    {
        imagen: "img/celular.jpg",
        nombre: "Celular",
        descripcion: "Celular 128GB",
        precio: "$5000000"
    },

    {
        imagen: "img/audifonos.jpg",
        nombre: "Audífonos",
        descripcion: "Audífonos inalámbricos",
        precio: "$200000"
    }

];

const catalogo = document.getElementById("catalogo");

productos.forEach(producto => {

    const tarjeta = document.createElement("div");

    tarjeta.classList.add("tarjeta");

    tarjeta.innerHTML = `
<img src="${producto.imagen}" alt="${producto.nombre}">
<h3>${producto.nombre}</h3>
<p>${producto.descripcion}</p>
<p class="precio">${producto.precio}</p>
`;

    catalogo.appendChild(tarjeta);

});