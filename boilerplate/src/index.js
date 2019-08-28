const printTeam = (teamName, coach, ...players) => {
    console.log(`Team: ${teamName}`)
    console.log(`Coach: ${coach}`)
    console.log(`Players: ${players.join(', ')}`)
}

const team = {
    name: 'Libery',
    coach: 'Casey Penn',
    players: ['Marge', 'Aiden', 'Herbert', 'Sherry']
}
printTeam(team.name, team.coach, ...team.players)

let cities = ['Barcelona', 'Cape Town', 'Bordeaux']
cities = [...cities, 'Santiago']
console.log(cities)

let house = {
    bedrooms: 2,
    bathrooms: 1.5,
    yearBuilt: 2017
}
let newHouse = {
    basement: true,
    bedrooms: 3,
    ...house
}
newHouse.yearBuilt = 2018

console.log(house)
console.log(newHouse)
