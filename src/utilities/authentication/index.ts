import { GoogleLoginResponse } from 'react-google-login'

export const DEFAULT_EXPIRES = 3600 - 5 * 60
export const refreshTokenSetup = (response: GoogleLoginResponse): void => {
  let refreshTime = (response.tokenObj.expires_in || DEFAULT_EXPIRES) * 1000

  const refreshToken = async () => {
    const authResponse = await response.reloadAuthResponse()
    refreshTime = (authResponse.expires_in || DEFAULT_EXPIRES) * 1000

    setTimeout(refreshToken, refreshTime)
  }
  setTimeout(refreshToken, refreshTime)
}
