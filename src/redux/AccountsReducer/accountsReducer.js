import { ADD_NEW_ACCOUNT, DELETE_ACCOUNT, EDIT_ACCOUNT } from "../ActionsTypes/actionssTypes";
import { initState } from "../initState";

function accountsReducer (state = initState, action) {
    switch(action.type){
        case DELETE_ACCOUNT:
            let delAcc = state.accounts.filter(acc => {
                return acc.id !== action.payload.id
            })
            return {...state,
                accounts: delAcc
            }

        case ADD_NEW_ACCOUNT:
            return {...state,
                accounts: [...state.accounts, action.payload.newAcc]
            }

        case EDIT_ACCOUNT:
            let possition = state.accounts.map(acc => acc.id).indexOf(action.payload.editedAcc.id)
            state.accounts[possition] = action.payload.editedAcc
            return {...state,
                accounts: state.accounts
            }

        default: 
            return state
    }

}

export default accountsReducer