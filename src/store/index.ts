import {createContext, useContext} from 'react'
import user from "@/store/modules/user";

const store = {user}
const RootStoreContext = createContext(store)
export const useStore = () => useContext(RootStoreContext)