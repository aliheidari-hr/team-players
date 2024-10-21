function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export function createMatches(players, teams, members, rounds) {
    let matches = [];

    for (let i = 0; i < rounds; i++) {
        let clonePlayers = [...players];
        let shuffledPlayers = shuffleArray(clonePlayers);

        let currentTeams = [];
        for (let j = 0; j < teams; j++) {
            if (shuffledPlayers.length >= members) {
                currentTeams.push(shuffledPlayers.splice(0, members));
            } else if (shuffledPlayers.length > 0) {
                currentTeams.push(shuffledPlayers.splice(0, shuffledPlayers.length));
            }
        }

        matches.push(currentTeams);
    }

    return matches;
}