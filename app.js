class Product {
    constructor(name, price, year) { //propiedades
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

class IU {
    //clase que contiene los metodos add, delete, 

    addProduct(product) {
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Product</strong>: ${product.name} -
                    <strong>Price</strong>: ${product.price} - 
                    <strong>Year</strong>: ${product.year}
                    <a href="#" class="btn btn-danger" name="delete">Delete</a>
                </div>
            </div>
        `;
        productList.appendChild(element);

    }


    resetForm() {
        document.getElementById('product-form').reset();
    }

    deleteProduct(element) {
        if (element.name === 'delete') {
            element.parentElement.parentElement.remove();
            this.showMessage('Product Deleted Succsssfully', 'success');
        }
    }


    showMessage(message, cssClass) {
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-10`;
        div.appendChild(document.createTextNode(message));

        //mostrando en el DOM
        const container = document.querySelector('.container');
        const app = document.querySelector('#App');

        container.insertBefore(div, app);
        setTimeout(function() {
            document.querySelector('.alert').remove();

        }, 3000);
    }





}

//DOM EVENTS

document.getElementById('product-form').addEventListener('submit', function(e) {

    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const year = document.getElementById('year').value;

    console.log(name, price, year);

    const product = new Product(name, price, year);
    const iu = new IU();

    //Validacion

    if (name === '' || price === '' || year === '') {
        return iu.showMessage('Complete los datos del formulario', 'danger');
    }

    //guarda datos 

    iu.addProduct(product);
    iu.resetForm();
    iu.showMessage('Producto agregado satifactoriamente', 'success');

    e.preventDefault();


});



document.getElementById('product-list')
    .addEventListener('click', function(e) {
        const iu = new IU();
        iu.deleteProduct(e.target);
        e.preventDefault();
    });