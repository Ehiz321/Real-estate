import { createContext } from "react";

export const AppContext = createContext({
  user:null,
  setUser:()=>{}
})

export const AppContextProvider = AppContext.Provider
