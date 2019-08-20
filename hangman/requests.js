const getPuzzle = async (wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)

    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to get puzzle')
    }
}

const getCountry = async (countryCode) => {
    const response = await fetch('https://restcountries.eu/rest/v2/all')

    if (response.status === 200) {
        const data = await response.json()
        return data.find((country) => country.alpha2Code === countryCode)
    } else {
        throw new Error('Unable to fetch the country')
    }
}

const getLocation = async () => {
    const response = await fetch(`http://ipinfo.io/json?token=${ipInfo.accessToken}`)

    if (response.status === 200) {
        return await response.json()
    } else {
        throw new Error('Unable to fetch the current location')
    }
}

const getCurrentCountry = async () => {
    const currentCountryData = await getLocation()
    return await getCountry(currentCountryData.country)
}
