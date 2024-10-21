import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    players: [],
    teams: 2,
    members: 2,
    rounds: 1,
    error: '',
    matches: [],
    matchesGrid: 3,
    openSide: true,
    playersArray: [
        { id: 0, img: 'images/user/1.png', name: 'ali' },
        { id: 1, img: 'images/user/2.png', name: 'mahdi' },
        { id: 2, img: 'images/user/3.png', name: 'alireza' },
        { id: 3, img: 'images/user/4.png', name: 'hadi' },
        { id: 4, img: 'images/user/5.png', name: 'abolfazl' },
        { id: 5, img: 'images/user/6.png', name: 'amir hossin' },
    ]
};

const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        setPlayers: (state, action) => {
            state.players = action.payload;
        },
        setTeams: (state, action) => {
            state.teams = action.payload;
        },
        setMembers: (state, action) => {
            state.members = action.payload;
        },
        setRounds: (state, action) => {
            state.rounds = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        setMatches: (state, action) => {
            state.matches = action.payload;
        },
        setMatchesGrid: (state, action) => {
            state.matchesGrid = action.payload;
        },
        setOpenSide: (state) => {
            state.openSide = !state.openSide;
        },
        reset: (state) => {
            state.players = [];
            state.teams = 2;
            state.members = 2;
            state.rounds = 1;
            state.error = '';
            state.matches = [];
        },
    },
});

export const {
    setPlayers,
    setTeams,
    setMembers,
    setRounds,
    setError,
    setMatches,
    setMatchesGrid,
    setOpenSide,
    reset
} = mainSlice.actions;
export default mainSlice.reducer;