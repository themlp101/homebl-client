import { createContext } from 'react'
import { useTokenService } from '../../services/token-services'

export const LoggedInContext = createContext({
	isLogged: useTokenService.hasAuthToken(),
	setIsLogged: () => {},
})
