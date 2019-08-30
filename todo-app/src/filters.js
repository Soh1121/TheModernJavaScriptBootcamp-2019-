const filters = {
    searchText: '',
    hideCompleted: false
}

const getFilters = () => filters

const setFilters = ({ searchText, hideCompleted}) => {
    if (typeof searchText === 'string') {
        filters.searchText = searchText
    }
    if (typeof filters.hideCompleted === 'boolean') {
        filters.hideCompleted = hideCompleted
    }
}

export { getFilters, setFilters }
