var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];


function calculateSalesTax(salesData, taxRates) {
  // Implement your code here
    var results = {};
    for (var i = 0; i < salesData.length; i++) {
        var saleData = salesData[i];
        if (results[saleData.name] === undefined) {
            results[saleData.name] = {
                totalSales : 0,
                totalTaxes : 0
            }
        }
        //math stuff asdjfkasjdlfkjalskdf pls no
        var sales = sum_of_sales(saleData.sales);
        var taxes = sales * taxRates[saleData.province];
        // console.log(taxRates[saleData.province]);
        results[saleData.name].totalSales = results[saleData.name].totalSales + sales;
        results[saleData.name].totalTaxes = results[saleData.name].totalTaxes + taxes;
    }
    return results;
}

function sum_of_sales(sales) {
    var sum = 0;
    for (var i = 0; i < sales.length; i++) {
        sum = sum + sales[i];
    }
    return sum;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);