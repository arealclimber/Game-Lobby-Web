import axios from "axios"
import type { AxiosInstance } from "axios"
import { createContext } from "react"

interface IAuthContext {
  token: string | null | undefined
  setToken: (token: string | null | undefined) => unknown
}

const AuthContext = createContext<IAuthContext>({
  token: undefined,
  setToken: () => null,
})

export default AuthContext
