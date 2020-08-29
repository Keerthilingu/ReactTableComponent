App is deployed at https://keerthi-react-table-component.herokuapp.com/

## Setup

Follow these steps to setup the app:

1. `npm install` – install dependencies
2. `npm test` – run all tests in watch mode (should fail unless you implement the app)
3. `npm start` – serve the app at [http://localhost:5000/](http://localhost:5000/) (it automatically opens the app in your default browser)

# Task

 - Use the fetch API to request 'api/branch{1, 2, 3}.json' and render it inside a table where each row contains two columns: product name and total revenue from sales of the product
 - Load all the branches together, you don't need to switch between the branches
 - Branches *may* sell the same products, you will need to merge those products together and sum up the total revenue of that product
 - The table should be sorted alphabetically by product name
 - The table can be filtered by product name, the filter should be case insensitive
 - At the bottom of the table the total revenue is shown for all the products that are displayed, i.e. if you filter the table, the total needs to update
 - You should use the provided `formatNumber` function to display numbers
 - You need to make sure that ALL tests pass before submitting
 - Make sure Search input is inline with the label and working
 - Don't use external NPM libraries, this app only needs to work on the latest Chrome