import { SET_USERS, SET_TOKEN, SET_REGISTER_SUCCESS } from '.'

export function setUser (data) {
    return {
        type: SET_USERS,
        payload: data
    }
}

export function setToken (data) {
    return {
        type: SET_TOKEN,
        payload: data
    }
}

export function setRegisterSuccess (data) {
    return {
        type: SET_REGISTER_SUCCESS,
        payload: data
    }
}