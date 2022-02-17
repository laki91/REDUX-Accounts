import { ADD_NEW_ACCOUNT, DELETE_ACCOUNT, EDIT_ACCOUNT } from "../ActionsTypes/actionssTypes"


export const DELETE_ACCOUNT_ACTION = (arg) => {
    return {
        type: DELETE_ACCOUNT,
        payload: {
            id: arg
        }
    }
}

export const ADD_NEW_ACCOUNT_ACCTION = (arg) => {
    return {
        type: ADD_NEW_ACCOUNT,
        payload: {
            id: arg.id = Math.floor(Math.random()*(10000-10)-10),
            newAcc: arg
        }
    }
}

export const EDIT_ACCOUNT_ACTION = (arg) => {
    return {
        type: EDIT_ACCOUNT,
        payload: {
            editedAcc: arg
        }
    }
}