import {SET_RESTAURANTS, SET_FAVORITES, SET_SELECTED_RESTAURANT, SET_ERROR, SET_LOADING} from '.'

export function setRestaurants (data) {
    return {
        type: SET_RESTAURANTS,
        payload: data
    }
}


export function setFavorites (data) {
    return {
        type: SET_FAVORITES,
        payload: data
    }
}


export function setSelectedRestaurant (data) {
    return {
        type: SET_SELECTED_RESTAURANT,
        payload: data
    }
}

export function setLoading (data) {
    return {
        type: SET_LOADING,
        payload: data
    }
}

export function setError (data) {
    return {
        type: SET_ERROR,
        payload: data
    }
}