const printTeam = (teamName, coach, firstPlayer, secondPlayer) => {
    console.log(`Team: ${teamName}`)
    console.log(`Coach: ${coach}`)
    // console.log(`Players: ${players.join(', ')}`)
    console.log(firstPlayer, secondPlayer)
}

const team = {
    name: 'Libery',
    coach: 'Casey Penn',
    players: ['Marge', 'Aiden', 'Herbert', 'Sherry']
}
printTeam(team.name, team.coach, ...team.players)
