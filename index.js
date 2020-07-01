const api = "https://course-ec-api.hexschool.io/api/";
const uuid = '0651180d-9a32-4622-8af7-cd0265f7aa39';
let token = 'YsDhq5nCGcYkzr0O89YfnrewqhOiO7pK1AuXnlKfINQooYnudmvsBJYLyDid';
axios.defaults.headers['Authorization'] = `Bearer ${token}`;
document.getElementById("create").addEventListener("click", CreateData);
document.getElementById("delete").addEventListener("click", DeleteData);
var obj = {
  data: {
    uuid: '0651180d-9a32-4622-8af7-cd0265f7aa39',
    products: [],
  },
  getData: function () {
    var vm = this;
    var url = `${api}${this.data.uuid}/ec/products`;

    axios.get(url)
      .then(function (response) {
        vm.data.products = response.data.data;
        vm.render();
      })
  },
  render: function () {
    var app = document.getElementById('app');
    var products = this.data.products;
    var str = '';
    products.forEach(function (item) {
      str += `
      <div class="col-12">
            <div class="card">
            <img src="${ item.imageUrl[0]}" class="card-img-top">
            <div class="card-body">
            <h5 class="card-title">${ item.title}</h5>
            <p class="card-text">${ item.content}</p>
            <p class="card-text">${ item.price}</p>
            </div>
            </div>
            </div>
            `;
    });
    app.innerHTML = str;
  }
}

obj.getData();

function DeleteData() {
  var url = `${api}${uuid}/admin/ec/product/5jFXtRsrSSzewNOqtvZz04ZufqOEqMC7iHioPcgfN93dXs0K1PSFwMNKsqeDIr9z`;
  axios.delete(url)
    .then(function (res) {
      console.log(res);
    })
}

function CreateData() {
  var url = `${api}${uuid}/admin/ec/product`;
  axios.post(url, {
    title: 'Vancouver 可延展桌',
    category: '桌子',
    content: 'Vancouver採用木質頂面，沉重質感傳遞出其天然有機的理念。它的大桌面能夠讓多人圍桌而坐，是用餐空間中不可忽略的一景。',
    description: "Vancouver採用木質頂面，沉重質感傳遞出其天然有機的理念。它的大桌面能夠讓多人圍桌而坐，是用餐空間中不可忽略的一景。",
    imageUrl: [
      'https://images.unsplash.com/photo-1544207240-4193795530ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1514&q=80'
    ],
    enabled: true,
    origin_price: 98813,
    price: 83813,
    unit: '張',
  })
    .then(function (res) {
      console.log(res);
    })
}