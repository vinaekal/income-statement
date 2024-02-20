function generateIngredients(ingredientsRaw) {
    // Your code here
  }
  
  function calculateRawCost(ingredientsData) {
    // Your code here
  }
  
  function calculateROI(costData, ordersData) {    
    // Your code here
  }
  
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
  
  // KODE DI BAWAH INI JANGAN DI UBAH!
  module.exports = {
    generateIngredients,
    calculateRawCost,
    calculateROI,
    incomeStatement,
  };