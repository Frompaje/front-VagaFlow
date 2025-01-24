'use client'

import cookies from 'js-cookie'
import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { api } from '@/lib/axios'

import { useRouter } from 'next/navigation'
import { decodeJWT } from '@/helpers/decodeJWT'

type TAuthContext = {
  user: {
    id: string
    email: string
    name: string
  } | null
  userToken: string | undefined | null
  handleLogin: (data: string) => Promise<void>
  handleLogout: () => void
}

const AuthContext = createContext({} as TAuthContext)

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter()

  const [userToken, setUserToken] = useState<string | undefined | null>(() => {
    return cookies.get('_UserAuth')
  })

  const publicRoutes = useMemo(() => ['/', '/signup', '/forgot-password'], [])

  const [user, setUser] = useState(() => {
    if (userToken) {
      api.defaults.headers.authorization = `Bearer ${userToken}`
      const user = decodeJWT(userToken)
      return {
        id: user.id,
        name: user.name,
        email: user.email,
      }
    }
    return null
  })

  const handleLogin = useCallback(
    async (data: string) => {
      setUserToken(data)
      cookies.set('_UserAuth', data, { expires: 7 })
      api.defaults.headers.authorization = `Bearer ${data}`
      router.push(`/app`)
    },
    [router],
  )

  const handleLogout = useCallback(() => {
    setUserToken(null)
    setUser(null)
    cookies.remove('_UserAuth')
    router.push('/')
  }, [setUserToken, setUser])

  useEffect(() => {
    if (userToken) {
      api.defaults.headers.authorization = `Bearer ${userToken}`
      const user = decodeJWT(userToken)

      setUserToken(() => userToken)
      setUser({
        id: user.id,
        name: user.name,
        email: user.email,
      })
    }
  }, [userToken])

  useEffect(() => {
    const token = cookies.get('_UserAuth')
    const currentPath = window.location.pathname
    if (!token && !publicRoutes.includes(currentPath)) return router.push('/')
    if (token && currentPath === '/') return router.push('/app')
  }, [router, publicRoutes])

  const value = useMemo(
    () => ({
      user,
      userToken,
      handleLogin,
      handleLogout,
    }),
    [handleLogin, handleLogout, user, userToken],
  )
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
}
