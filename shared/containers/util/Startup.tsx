import useAuth from "@/shared/hooks/context/useAuth"
import useCookie from "@/shared/hooks/useCookie"
import { FC, ReactNode, useEffect } from "react"

type Props = {
  children: ReactNode
}

const Startup: FC<Props> = ({ children }) => {
  const { token: tokenOperator } = useCookie()
  const { token, setToken } = useAuth()

  useEffect(() => {
    const jwt = tokenOperator.get()
    if (jwt) {
      setToken(jwt)
    } else {
      setToken(null)
    }
  }, [])

  useEffect(() => {
    if (token === null) {
    } else if (token === undefined) {
    } else {
      // call authentication API
      // eslint-disable-next-line no-console
      console.log("call authentication API")
    }
  }, [token])

  return <>{children}</>
}

export default Startup
