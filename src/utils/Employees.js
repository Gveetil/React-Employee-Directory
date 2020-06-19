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
        // If search criteria is empty, return whole dataset 
        if (searchCriteria.name.trim() === "" && searchCriteria.title.trim() === "" &&
            searchCriteria.location.trim() === "" && searchCriteria.department.trim() === "")
            return employeeDataset;

        const nameRegex = new RegExp(searchCriteria.name.trim(), 'i');
        const titleRegex = new RegExp(searchCriteria.title.trim(), 'i');
        const locationRegex = new RegExp(searchCriteria.location.trim(), 'i');
        const departmentRegex = new RegExp(searchCriteria.department.trim(), 'i');
        return employeeDataset
            .filter(employee => {
                return nameRegex.test(employee.name)
                    && titleRegex.test(employee.title)
                    && locationRegex.test(employee.location)
                    && departmentRegex.test(employee.department);
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