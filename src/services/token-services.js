import config from '../config'
/**
 * Authentication services for the jwt authentication procedure
 * Saves authToken to the browser, checks if authToken exists, gets the authToken and clears the authToken
 */
export const useTokenService = {
	saveAuthToken(token) {
		window.localStorage.setItem(config.TOKEN_KEY, token)
	},
	hasAuthToken() {
		return !!useTokenService.getAuthToken()
	},
	getAuthToken() {
		return window.localStorage.getItem(config.TOKEN_KEY)
	},
	clearAuthToken() {
		window.localStorage.removeItem(config.TOKEN_KEY)
	},
}
