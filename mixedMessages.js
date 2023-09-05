const teamName = ['Arizona Cardinals', 'Atlanta Falcons', 'Baltimore Ravens', 'Buffalo Bills', 'Carolina Panthers', 'Chicago Bears', 'Cincinnati Bengals', 'Cleveland Browns', 'Dallas Cowboys', 'Denver Broncos', 'Detroit Lions', 'Green Bay Packers', 'Houston Texans', 'Indianapolis Colts', 'Jacksonville Jaguars', 'Kansas City Chiefs', 'Las Vegas Raiders', 'Los Angeles Chargers', 'Los Angeles Rams', 'Miami Dolphins', 'Minnesota Vikings', 'New England Patriots', 'New York Giants', 'New York Jets', 'New Orleans Saints', 'Philadelphia Eagles', 'Pittsburgh Steelers', 'San Francisco 49ers', 'Seattle Seahawks', 'Tampa Bay Buccaneers', 'Tennessee Titans', 'Washington Commanders']
const position = ['Quarterback', 'Running Back', 'Wide Receiver', 'Tight End', 'Offensive Lineman', 'Cornerback', 'Linebacker', 'Defensive Lineman', 'Safety', 'Kicker', 'Punter', 'Long Snapper']

let chooseTeam = () => {
    let i = Math.floor(Math.random() * teamName.length)
    return teamName[i]
}

let choosePosition = () => {
    let j = Math.floor(Math.random() * position.length)
    return position[j]
}

let gamesPlayed = () => {
    let k = Math.floor(Math.random() * 400)
    return k
}

console.log(`If you started training now, you could be a ${chooseTeam()} ${choosePosition()} with a ${gamesPlayed()} game career.`)
