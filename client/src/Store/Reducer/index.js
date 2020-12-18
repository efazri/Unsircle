import {
    SET_FAVORITES, 
    SET_RESTAURANTS, 
    SET_SELECTED_RESTAURANT, 
    SET_USERS, SET_LOADING, 
    SET_ERROR, 
    SET_TOKEN,
    SET_REGISTER_SUCCESS
} from '../Actions'

const initialState = {
    restaurants: [],
    users: [],
    favorites: [],
    selectedRestaurant: {},
    loading: false,
    error: false,
    token: false,
    registerSuccess: false
}


export default function reducer (state = initialState, action) {
    switch (action.type) {
        case SET_USERS:
            console.log(`ini dari reducers`);
            return {...state, users: state.users.concat(action.payload)}
        case SET_FAVORITES:
            return {...state, favorites: state.favorites.concat(action.payload)}
        case SET_RESTAURANTS:
            return {...state, restaurants: action.payload}
        case SET_SELECTED_RESTAURANT:
            return {...state, selectedRestaurant: action.payload}
        case SET_LOADING:
            return {...state, loading: action.payload}
        case SET_ERROR:
            return {...state, error: action.payload}
        case SET_TOKEN:
            return {...state, token: action.payload}
        case SET_REGISTER_SUCCESS:
            return {...state, registerSuccess: action.payload}
        default: {
            return state
        }
    }
}