const {
  generateIngredients,
  calculateRawCost,
  calculateROI,
  incomeStatement,
} = require("../index.js");
const Restriction = require("hacktiv8-restriction");

describe("Income Statement", () => {
  //function generateIngredients
  test("Should return the correct array of object format (15)", () => {
    const rawData =  [
      ["Bakso Spesial", 20,  6, 130_000],
      ["Mie Ayam Combo", 100,  3, 20_000],
      ["Mia Ayam Spesial", 500,  5, 40_000],
    ];

    const result = generateIngredients(rawData);

    expect(result).toStrictEqual([
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
    ]);
  });

  //function calculateRawCost
  test("Should return the correct array of object format include the stock and investment key (15)", () => {
    const result = calculateRawCost([
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
    ]);

    expect(result).toStrictEqual([
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
    ]);
  });

  //function calculateROI
  test("Should return the correct array of object format include the sale, profit and roi key (15)", () => {
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

    const result = calculateROI([
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
    ], orderHistories);
    
    expect(result).toStrictEqual([
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
    ]);
  });

  //function incomeStatement
  test("Should return correct array of object format (20)", () => {
    const rawData =  [
      ["Bakso Spesial", 20,  6, 130_000],
      ["Mie Ayam Combo", 100,  3, 20_000],
      ["Mia Ayam Spesial", 500,  5, 40_000],
    ]
    
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

    const result = incomeStatement(rawData, orderHistories);
    
    expect(result).toStrictEqual([
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
    ]);
  });

  test("Should return string when rawData length is 0 (5)", () => {
    const result = incomeStatement([], []);
    expect(result).toMatch(
      /Data is empty/i
    );
  });

  test("Should return string when parameter is undefined (5)", () => {
    const result = incomeStatement();
    expect(result).toMatch(
      /Invalid data/i
    );
  });

  test("Should implement modular function (10)", () => {
    expect(typeof generateIngredients).toBe("function");
    expect(typeof calculateRawCost).toBe("function");
    expect(typeof calculateROI).toBe("function");
    expect(typeof incomeStatement).toBe("function");
  });

  test("Check restriction (-20)", async () => {
    const checkRestriction = new Restriction("../index.js");
    checkRestriction.rules = ["match", "split", "concat", "search"];
    const result = await checkRestriction.readCode();
    expect(result).toBe(null);
  });
});