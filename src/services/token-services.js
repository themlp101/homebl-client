import config from '../config'

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
	makeBasicAuthToken(userName, password) {
		return window.btoa(`${userName}:${password}`)
	},
}
