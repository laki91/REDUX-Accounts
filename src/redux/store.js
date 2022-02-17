import { createStore } from "redux";
import accountsReducer from "./AccountsReducer/accountsReducer";

const store = createStore(accountsReducer)

export default store