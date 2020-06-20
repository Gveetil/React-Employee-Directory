import employeeDataset from "../employees.json";

// This module contains methods to work with the employee dataset  
const Employees = {
    // Returns the entire employee dataset 
    all() {
        return employeeDataset;
    },

    // Filter employees based on the search criteria passed in
    // and return the matching records
    filter(searchCriteria) {
        // Loop through search criteria passed in, extract only items with values
        const filterConditions = Object.keys(searchCriteria)
            .filter(searchColumn => (searchCriteria[searchColumn].trim() !== ""))
            .map(searchColumn => ({
                "key": searchColumn,
                "value": searchCriteria[searchColumn].trim().toLowerCase()
            }));

        // If filter criteria is specified, return whole dataset 
        if (filterConditions.length <= 0) {
            return employeeDataset;
        }

        return employeeDataset
            .filter(employee => {
                // Return only employees matching ALL the filter criteria
                return filterConditions.reduce((isSelected, filterColumn) =>
                    (isSelected && (employee[filterColumn.key].toLowerCase().includes(filterColumn.value))
                    ), true);
            });
    },

    // Sorts the employee selection passed in based on the sort criteria 
    applySort(selectedEmployees, sortCriteria) {
        const { sortColumn, sortAscending } = sortCriteria;
        selectedEmployees
            .sort(
                (employeeA, employeeB) => {
                    if (employeeA[sortColumn] < employeeB[sortColumn]) { return sortAscending ? -1 : 1; }
                    if (employeeA[sortColumn] > employeeB[sortColumn]) { return sortAscending ? 1 : -1; }
                    return 0;
                });
    },

}

export default Employees;