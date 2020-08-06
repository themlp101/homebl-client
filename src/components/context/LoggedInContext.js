import { createContext } from 'react'
import { useTokenService } from '../../services/token-services'
/**
 * Checks if browser has an authoken and sets boolean return as 'isLogged'
 */
export const LoggedInContext = createContext({
	isLogged: useTokenService.hasAuthToken(),
	setIsLogged: () => {},
})
