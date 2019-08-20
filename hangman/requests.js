const getPuzzle = async (wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)

    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to get puzzle')
    }
}

// 1. Convert getCountry to an async function that uses await
// 2. Convert getLocation to an async function that uses await

const getCountry = async (countryCode) => {
    const response = await fetch('https://restcountries.eu/rest/v2/all')

    if (response.status === 200) {
        const data = await response.json()
        return data.find((country) => country.alpha2Code === countryCode)
    } else {
        throw new Error('Unable to fetch data')
    }
}

const getLocation = async () => {
    const response = await fetch(`http://ipinfo.io/json?token=${ipInfo.accessToken}`)

    if (response.status === 200) {
        return await response.json()
    } else {
        throw new Error('Unable to fetch location')
    }
}
