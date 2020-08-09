import React from "react";
import { formatNumber } from "../Helpers/util.js";

class RowData extends React.Component {
    render() {
        return (
            <tbody Style="vertical-align:bottom">
                <tr>
                    <td>{this.props.item.name}</td>
                    <td>
                        {formatNumber(
                            this.props.item.unitPrice * this.props.item.sold
                        )}
                    </td>
                </tr>
            </tbody>
        );
    }
}

export default RowData;
