import React from "react";
import "./App.css";
import RowData from "./ChildComponents/RowData.jsx";
import { clubProducts, formatNumber, getProducts, getTotal, getFilteredProducts } from "./Helpers/util.js";


class App extends React.Component {
    constructor(props) {
        super(props);

        // master product list, useful in filtering
        this.allItems = [];

        // state to be initialized to empty state
        this.state = {
            isLoaded: false,
            items: [],
            total: 0,
            filterText: "",
        };
    }

    componentDidMount() {
        let products = [];

        // fetch from each branch and add up sold value of each duplicate product
        for (const item of [1, 2, 3]) {
            getProducts(`api/branch${item}.json`)
                .then((result) => {
                    products = clubProducts([...products, ...result.products]);
                    this.displayProducts(products);
                }).catch(error => console.log(error));
        }
    }

    displayProducts = (products) => {
        this.setState({
            isLoaded: true,
            items: products,
            total: getTotal(products),
        });
        this.allItems = products;
    };

    // handler for onChange in text filter
    handleFilterText = (e) => {
        this.setState({
            filterText: e.target.value,
            items: getFilteredProducts(e.target.value, this.allItems),
            total: getTotal(getFilteredProducts(e.target.value, this.allItems)),
        });
    };

    render() {
        //Conditional rendering for "Loading..." text
        return this.state.isLoaded ? (
            <div className="product-list">
                <label>Search Products</label>
                <input
                    type="text"
                    value={this.state.filterText}
                    onChange={this.handleFilterText}
                />
                <table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Revenue</th>
                        </tr>
                    </thead>
                    {[...this.state.items]
                        .sort((a, b) => a.name.localeCompare(b.name))
                        .map((product) => (
                            <RowData
                                key={
                                    product.id +
                                    product.name +
                                    product.sold +
                                    product.unitPrice
                                }
                                item={product}
                            ></RowData>
                        ))}
                    <tfoot>
                        <tr>
                            <td>Total</td>
                            <td>{formatNumber(this.state.total)}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        ) : (
                "Loading..."
            );
    }
}

export default App;
