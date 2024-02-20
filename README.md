# Income Statement

>### OBJECTIVES

-   Mampu memecahkan masalah yang diberikan
-   Mampu mengakses data pada array dan data pada array of object
-   Mampu membuat object serta object multi dimensi
-   Mengerti cara melemparkan data yang dikembalikan dari satu function kemudian digunakan sebagai parameter function lain.

>### NOTES

-   Jalankan  `npm install`  terlebih dahulu
-   Pada skeleton terdapat folder  `__tests__`, folder ini beserta file-file di dalamnya tidak boleh diubah sama sekali.
-   untuk menjalankan test untuk memastikan solusi kamu sudah benar, jalankan command  `npm test`

>### RESTRICTIONS

-   Hanya boleh menggunakan built-in function untuk menambahkan atau mengurangi data dalam array, seperti  `shift()`,  `unShift()`,  `push()`, dan  `pop()`

>### HINTS

-   Nama function haruslah  `generateIngredients`,  `calculateRawCost`,  `calculateROI`,dan  `incomeStatement`, dan  **tidak boleh diganti dengan nama function lainnya**. Untuk detail fungsi akan mengacu kepada  [directions](#directions)  yang disebutkan di bawah.
-   Jangan menghapus, comment ataupun mengedit bagian module.exports di bagian bawah file `index.js`.

<br>

## Directions

Mbah Marno👨‍🍳 adalah seorang juragan bakso. Karena sudah Mbah Marno seharian bekerja maka pekerjaan kegiatan di malam hari tersebut ingin di automasi menggunakan program komputer. Bantulah Mbah Marno untuk mewujudkan keinginannya. 🙏

### Release 1 -  `generateIngredients`

Pada function ini akan menerima satu parameter yaitu  `ingredientsRaw`  yang bertipe data  **array 2 dimensi**. Dimana function ini berfungsi untuk mendapatkan informasi jumlah bahan-bahan setengah jadi yang dapat dihasilkan dari sejumlah bahan-bahan dasar yang dibeli oleh Mbah Marno.

Output dari function ini bertipe data  **array of object**. Perhatikan contoh berikut:

```js
function generateIngredients(ingredientsRaw) {
  // Your code here
}
const rawData =  [
	["Bakso Spesial", 20,  6, 130_000],
	["Mie Ayam Combo", 100,  3, 20_000],
	["Mia Ayam Spesial", 500,  5, 40_000],
];
console.log(generateIngredients(rawData));
/*
  [
    {
      menu: 'Bakso Spesial',
      ratio: 20,
      ingredients: 6,
      cost: 130000 }, 
    {
      menu: 'Mie Ayam Combo',
      ratio: 100,
      ingredients: 3,
      cost: 20000
    },
    {
      menu: 'Mia Ayam Spesial',
      ratio: 500,
      ingredients: 5,
      cost: 40000 
    }
  ]
*/
```

 <br>

### Release 2 -  `calculateRawCost`

Pada function ini akan menerima satu parameter yaitu  `ingredientsData`  yang bertipe data  **array of object**. Dimana function ini berfungsi untuk menghitung total belanja bahan-bahan dasar Mbah Marno pada hari ini.

Keterangan:
> stock = (ingredients * 1000) / ratio

> investment = cost * ingredients

Output dari function ini bertipe data  **array of object**. Perhatikan contoh berikut:

```js
function calculateRawCost(ingredientsData) {
  // Your code here
}

console.log(calculateRawCost(
  [
    {
      menu: 'Bakso Spesial',
      ratio: 20,
      ingredients: 6,
      cost: 130000
    }, 
    {
      menu: 'Mie Ayam Combo',
      ratio: 100,
      ingredients: 3,
      cost: 20000
    },
    {
      menu: 'Mia Ayam Spesial',
      ratio: 500,
      ingredients: 5,
      cost: 40000 
    }
  ]
));
/*
  [
    {
      menu: 'Bakso Spesial',
      stock: 300,
      investment: 780000
    },
    {
      menu: 'Mie Ayam Combo',
      stock: 30,
      investment: 60000
    },
    {
      menu: 'Mia Ayam Spesial',
      stock: 10,
      investment: 200000
    }
  ]
*/
```

  <br>

### Release 3 -  `calculateROI`

Pada function ini akan menerima dua parameter yaitu  `costData` dan `ordersData` yang bertipe data  **array of object**. Dimana function ini berfungsi untuk menghitung `return of investment` Mbah Marno pada hari ini.

Function ini berfungsi untuk mengolah data yang diberikan agar menghasilkan output yang dinginkan dengan kriteria sebagai berikut:
1. `menu` adalah menu yang terjual hari ini.
2. `stock` adalah sisa stock dari menu tersebut, stock akan berkurang sejumlah `amount`, apabila permintaan `amount lebih kecil sama dengan stock`.
3. `investment` adalah total belanja bahan-bahan dasar Mbah Marno pada hari ini.
4. `sales` adalah total uang yang didapatkan dari hasil penjualan Mbah Marno hari ini, sales akan bertambah sejumlah `price dikali amount`, apabila `stock tersedia`.
5. `profit` adalah `sales` MINUS  `investment` pada hari ini.
6. `roi` adalah *return on investment* pada hari ini.

Rumus perhitungan yang digunakan pada function ini adalah:
> ROI = `profit` DEVIDE BY `investment` TIMES 100 PERCENT
> 
> Notes: 
> - buatlah format roi dengan 2 angka di belakang koma

Output dari function ini bertipe data  **array of object**. Perhatikan contoh berikut:

```js
function calculateROI(obj) {
  // Your code here
  // (profit/investmen)*100
}

const orderHistories = [
  {
    menuItem: "Bakso Spesial",
    price: 20_000,
    amount: 260
  },
  {
    menuItem: "Bakso Spesial",
    price: 20_000,
    amount: 12
  },
  {
    menuItem: "Mie Ayam Combo",
    price: 18_000,
    amount: 20
  },
  {
    menuItem: "Mia Ayam Spesial",
    price: 12_000,
    amount: 6
  },
  {
    menuItem: "Mia Ayam Spesial",
    price: 12_000,
    amount: 5
  },
]

console.log(calculateROI([
  {
    menu: 'Bakso Spesial',
    stock: 300,
    investment: 780000
  },
  {
    menu: 'Mie Ayam Combo',
    stock: 30,
    investment: 60000
  },
  {
    menu: 'Mia Ayam Spesial',
    stock: 10,
    investment: 200000
  }
], orderHistories));

/*
  [
  {
    menu: 'Bakso Spesial',
    stock: 28,
    investment: 780000,
    sales: 5440000,
    profit: 4660000,
    roi: '597.44%'
  },
  {
    menu: 'Mie Ayam Combo',
    stock: 10,
    investment: 60000,
    sales: 360000,
    profit: 300000,
    roi: '500.00%'
  },
  {
    menu: 'Mia Ayam Spesial',
    stock: 4,
    investment: 200000,
    sales: 72000,
    profit: -128000,
    roi: '-64.00%'
  }
]
*/
```
  
  <br>

### Release 4 -  `incomeStatement`

Okey, `incomeStatement` adalah *main function* kita pada challenge ini. 
Jadi function `incomeStatement` akan menerima dua parameter yang diberikan oleh Mbah Marno yaitu  :
- Parameter `rawIngredients` bertipe data **array 2 dimensi** yang akan berisi daftar belanjaan bahan dasar menu harian Mbah Marno.
- Parameter `orders` bertipe data **array of object** yang setiap elementnya merupakan representasi histori pesanan pelanggan.

Jangan lupa untuk menggunakan semua function-function yang sudah kamu
buat sebelumnya di dalam function ini. 😎**

Output dari function ini bertipe data  **array of object**. Perhatikan contoh berikut:

```js
function incomeStatement(rawIngredients, orders) {
  // Your code here
}

const rawData =  [
	["Bakso Spesial", 20,  6, 130_000],
	["Mie Ayam Combo", 100,  3, 20_000],
	["Mia Ayam Spesial", 500,  5, 40_000],
];

const orderHistories = [
  {
    menuItem: "Bakso Spesial",
    price: 20_000,
    amount: 260
  },
  {
    menuItem: "Bakso Spesial",
    price: 20_000,
    amount: 12
  },
  {
    menuItem: "Mie Ayam Combo",
    price: 18_000,
    amount: 20
  },
  {
    menuItem: "Mia Ayam Spesial",
    price: 12_000,
    amount: 6
  },
  {
    menuItem: "Mia Ayam Spesial",
    price: 12_000,
    amount: 5
  },
];

console.log(incomeStatement());
// Invalid data

console.log(incomeStatement([], []));
// Data is empty

console.log(incomeStatement(rawData, orderHistories));
/*
  [
    {
      menu: 'Bakso Spesial',
      stock: 28,
      investment: 780000,
      sales: 5440000,
      profit: 4660000,
      roi: '597.44%'
    },
    {
      menu: 'Mie Ayam Combo',        
      stock: 10,
      investment: 60000,
      sales: 360000,
      profit: 300000,
      roi: '500.00%'
    },
    {
      menu: 'Mia Ayam Spesial',      
      stock: 4,
      investment: 200000,
      sales: 72000,
      profit: -128000,
      roi: '-64.00%'
    }
  ]
*/
```
<br>

> ### Selamat mengerjakan! 🎉🎉🎉