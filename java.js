let list = document.getElementById('list');
let filter = document.querySelector('.filter');
let count = document.getElementById('count');
let listProducts = [
    {
        id: 1,
        name: '7 Li (Rắn)',
        price: 3,
        quantity: 0,
        image: './img-test/5.jfif',
        nature: {
            color: ['Kim loại kiềm'],
            size: ['S', 'M', 'L'],
            type: 'Rắn'
        }
    },
    {
        id: 2,
        name: '12 C (Rắn)',
        price: 6,
        quantiy: 30,
        image: './img-test/8.jfif',
        nature: {
            color: ['Phi kim'],
            size: ['S', 'M', 'L'],
            type: 'Rắn'
        }
    },
    {
        id: 3,
        name: '14 N (Khí)',
        price: 7,
        quantiy: 30,
        image: './img-test/9.jfif',
        nature: {
            color: ['Phi kim'],
            size: ['S', 'M', 'L'],
            type: 'Khí'
        }
    },
    {
        id: 4,
        name: '16 O (Khí)',
        price: 8,
        quantiy: 30,
        image: './img-test/10.jfif',
        nature: {
            color: ['Phi kim'],
            size: ['S', 'M', 'L'],
            type: 'Khí'
        }
    },
    {
        id: 5,
        name: '23 Na (Rắn)',
        price: 11,
        quantiy: 30,
        image: './img-test/13.jfif',
        nature: {
            color: ['Kim loại kiềm'],
            size: ['S', 'M', 'L'],
            type: 'Rắn'
        }
    },
    {
        id: 6,
        name: '24 Mg (Rắn)',
        price: 12,
        quantiy: 30,
        image: './img-test/14.jfif',
        nature: {
            color: ['Kim loại kiềm thổ'],
            size: ['S', 'M', 'L'],
            type: 'Rắn'
        }
    },
    {
        id: 7,
        name: '27 Al (Rắn)',
        price: 13,
        quantiy: 30,
        image: './img-test/15.jfif',
        nature: {
            color: ['Kim loại yếu'],
            size: ['S', 'M', 'L'],
            type: 'Rắn'
        }
    },
    {
        id: 8,
        name: '32 S (Rắn)',
        price: 16,
        quantiy: 30,
        image: './img-test/18.jfif',
        nature: {
            color: ['Phi kim'],
            size: ['S', 'M', 'L'],
            type: 'Rắn'
        }
    },
    {
        id: 9,
        name: '35.5 Cl (Khí)',
        price: 17,
        quantiy: 30,
        image: './img-test/19.jfif',
        nature: {
            color: ['Halogen'],
            size: ['S', 'M', 'L'],
            type: 'Khí'
        }
    },
    {
        id: 10,
        name: '39 K (Rắn)',
        price: 19,
        quantiy: 30,
        image: './img-test/21.jfif',
        nature: {
            color: ['Kim loại kiềm'],
            size: ['S', 'M', 'L'],
            type: 'Rắn'
        }
    },
    {
        id: 11,
        name: '40 Ca (Rắn)',
        price: 20,
        quantiy: 30,
        image: './img-test/22.jfif',
        nature: {
            color: ['Kim loại kiềm thổ'],
            size: ['S', 'M', 'L'],
            type: 'Rắn'
        }
    },
    {
        id: 12,
        name: '52 Cr (Rắn)',
        price: 24,
        quantiy: 30,
        image: './img-test/26.jfif',
        nature: {
            color: ['Kim loại chuyển tiếp'],
            size: ['S', 'M', 'L'],
            type: 'Rắn'
        }
    },
    {
        id: 13,
        name: '56 Fe (Rắn)',
        price: 26,
        quantiy: 30,
        image: './img-test/28.jfif',
        nature: {
            color: ['Kim loại chuyển tiếp'],
            size: ['S', 'M', 'L'],
            type: 'Rắn'
        }
    },
    {
        id: 14,
        name: '64 Cu (Rắn)',
        price: 12,
        quantiy: 30,
        image: './img-test/31.jfif',
        nature: {
            color: ['Kim loại chuyển tiếp'],
            size: ['S', 'M', 'L'],
            type: 'Rắn'
        }
    },
    {
        id: 15,
        name: '65 Zn (Rắn)',
        price: 29,
        quantiy: 30,
        image: './img-test/32.jfif',
        nature: {
            color: ['Kim loại chuyển tiếp'],
            size: ['S', 'M', 'L'],
            type: 'Rắn'
        }
    },
    {
        id: 16,
        name: '80 Br (Lỏng)',
        price: 30,
        quantiy: 30,
        image: './img-test/37.jfif',
        nature: {
            color: ['Halogen'],
            size: ['S', 'M', 'L'],
            type: 'Lỏng'
        }
    },
    {
        id: 17,
        name: '86 Rb (Rắn)',
        price: 37,
        quantiy: 30,
        image: './img-test/39.jfif',
        nature: {
            color: ['Kim loại kiềm'],
            size: ['S', 'M', 'L'],
            type: 'Rắn'
        }
    },
    {
        id: 18,
        name: '88 Sr (Rắn)',
        price: 38,
        quantiy: 30,
        image: './img-test/40.jfif',
        nature: {
            color: ['Kim loại kiềm thổ'],
            size: ['S', 'M', 'L'],
            type: 'Rắn'
        }
    },
    {
        id: 19,
        name: '188 Ba (Rắn)',
        price: 56,
        quantiy: 30,
        image: './img-test/58.jfif',
        nature: {
            color: ['Kim loại kiềm thổ'],
            size: ['S', 'M', 'L'],
            type: 'Rắn'
        }
    },
    {
        id: 20,
        name: '201 Hg (Lỏng)',
        price: 80,
        quantiy: 30,
        image: './img-test/68.jfif',
        nature: {
            color: ['Kim loại chuyển tiếp'],
            size: ['S', 'M', 'L'],
            type: 'Lỏng'
        }
    },
];
let productFilter = listProducts;
showProduct(productFilter);
function showProduct(productFilter){
    count.innerText = productFilter.length;
    list.innerHTML = '';
    productFilter.forEach(item => {
        let newItem = document.createElement('div');
        newItem.classList.add('item');

        // create image
        let newImage = new Image();
        newImage.src = item.image;
        newItem.appendChild(newImage);
        // create name product
        let newTitle = document.createElement('div');
        newTitle.classList.add('title');
        newTitle.innerText = item.name;
        newItem.appendChild(newTitle);
        // create price
        let newPrice = document.createElement('div');
        newPrice.classList.add('price');
        newPrice.innerText = item.price.toLocaleString() + ' ';
        newItem.appendChild(newPrice);

        list.appendChild(newItem);
    });
}
filter.addEventListener('submit', function(event){
    event.preventDefault();
    let valueFilter = event.target.elements;
    productFilter = listProducts.filter(item => {
        // check category
        if(valueFilter.category.value != ''){
            if(item.nature.type != valueFilter.category.value){
                return false;
            }
        }
        // check color
        if(valueFilter.color.value != ''){
            if(!item.nature.color.includes(valueFilter.color.value)){
                return false;
            }
        }
        // check name
        if(valueFilter.name.value != ''){
            if(!item.name.includes(valueFilter.name.value)){
                return false;
            }
        }
        // check min price
        if(valueFilter.minPrice.value != ''){
            if(item.price < valueFilter.minPrice.value){
                return false;
            }
        }
        //  check max price
        if(valueFilter.maxPrice.value != ''){
            if(item.price > valueFilter.maxPrice.value){
                return false;
            }
        }


        return true;
    })
    showProduct(productFilter);
})