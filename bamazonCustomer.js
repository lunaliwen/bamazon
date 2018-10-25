var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazon"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  readProducts();
});

function readProducts() {
  console.log("Displaying all products...\n");

  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;

    // Log the ids, names, and prices of products for sale.
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].item_id + "| product name: " + res[i].product_name + "| price: " + res[i].price + "\n");
    }

    buyProduct();
  });
}

function buyProduct() {
  // query the database for all items listed 
  connection.query("SELECT * FROM products", function (err, results) {

    if (err) throw err;

    inquirer
      .prompt([
        {
          name: "id",
          type: "input",
          message: "What is the ID of the product you would like to buy?"
        },
        {
          name: "quantity",
          type: "input",
          message: "How many units of the product do you need?",
          validate: function (value) {
            if (isNaN(value) === false) {
              return true;
            }
            return false;
          }
        }
      ])
      .then(function (answer) {
        // check if your store has enough of the product to meet the customer's request.
        var chosenItem;
        for (var i = 0; i < results.length; i++) {
          if (results[i].item_id == answer.id) {
            chosenItem = results[i];
          }
        }

          if (parseInt(answer.quantity) > chosenItem.stock_quantity) {
            console.log("Insufficient quantity!");
          }
          else {
            console.log("Yes, we have enough products!");
  
            console.log("Your total is: " + parseInt(answer.quantity) * chosenItem.price);
  
            connection.query(
              "UPDATE products SET ? WHERE ?",
              [
                {
                 
                 stock_quantity: chosenItem.stock_quantity - answer.quantity
                },
              {
                item_id: answer.id
              }
            ]
            );
  
          }
       

       
      });
  })

}
