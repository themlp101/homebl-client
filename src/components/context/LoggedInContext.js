import { createContext } from 'react'
import { useTokenService } from '../../services/token-services'

const { hasAuthToken } = useTokenService
export const LoggedInContext = createContext(hasAuthToken())
