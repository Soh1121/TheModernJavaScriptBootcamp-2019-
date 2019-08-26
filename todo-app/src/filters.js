// Set up filters default object
const filters = {
    searchText: '',
    hideCompleted: false
}

// getFilters
// Arguments: none
// Return value: filters object
const getFilters = () => filters

// setFilters
// Arguments: updates object with optional searchText or hideCompleted
// Return value: none
const setFilters = (updates) => {
    if (typeof updates.searchText === 'string') {
        filters.searchText = updates.searchText
    }
    if (filters.hideCompleted !== updates.hideCompleted) {
        filters.hideCompleted = updates.hideCompleted
    }
}

// Make sure to set up the exports
export { getFilters, setFilters}