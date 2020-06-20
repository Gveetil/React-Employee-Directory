
// This module configures Column Definitions used to search and sort employee data 
const ColumnDefinitions = {
    // List of column definitions: 
    // id, display name, 
    // sort(true if column supports sorting) 
    // filter(true if column supports searching) 
    // options - column search is restricted to list of options
    columns: [
        { "id": "image", "name": "Picture", "sort": false },
        { "id": "name", "name": "Name", "sort": true, filter: true },
        { "id": "phone", "name": "Phone", "sort": false },
        { "id": "email", "name": "Email", "sort": false },
        { "id": "title", "name": "Job Title", "sort": true, filter: true },
        {
            "id": "department", "name": "Department", "sort": true, filter: true,
            "options": ["Engineering", "Finance", "Legal", "Sales"]
        },
        {
            "id": "location", "name": "Location", "sort": true, filter: true,
            "options": ["Melbourne", "Perth", "Sydney"]
        },
        { "id": "id", "name": "Employee Id", "sort": true }
    ],

    // Returns default / empty filter criteria 
    defaultFilter() {
        const emptyFilter = {};
        // Loop through all filterable columns and set empty filters
        this.columns.forEach(column => {
            if (column.filter)
                emptyFilter[column.id] = ""
        });
        return emptyFilter;
    },

    // Returns default sort criteria 
    defaultSort() {
        return { sortColumn: "name", sortAscending: true };
    }
};

export default ColumnDefinitions;