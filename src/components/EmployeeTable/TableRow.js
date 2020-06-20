import React from "react";

// This component generates a table data row
class TableRow extends React.Component {

    render(props) {
        return (
            <tr className="align-middle">
                {this.props.columnDefinitions.columns.map(column => {
                    return this.renderColumn(column);
                })}
            </tr>
        );
    }

    // render column based on id type
    renderColumn(column) {
        const uniqueId = `${column.id}${this.props.data[column.id]}`;
        switch (column.id) {
            case "image": {
                return (<td key={uniqueId}><img alt={this.props.data.name} className="img-fluid rounded table-row-image my-2"
                    src={`${this.props.imageFilePath}${this.props.data.image}`} /></td>)
            }
            case "email": {
                return (<td key={uniqueId}><a href={`mailto:${this.props.data.email}`}>{this.props.data.email}</a></td>)
            }
            default:
                {
                    return (<td key={uniqueId}>{this.props.data[column.id]}</td>)
                }
        }
    }
}

export default TableRow;