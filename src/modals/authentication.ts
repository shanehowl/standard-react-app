import { UPDATE_USER_PROFILE } from '../redux/actions/action_authentication'

export interface AuthenticationReducer {
  userProfile: UserProfile | undefined
}

export interface UserProfile {
  googleId: string
  imageUrl: string
  email: string
  name: string
  givenName: string
  familyName: string
}

export interface UpdateUserProfileAction {
  type: typeof UPDATE_USER_PROFILE
  payload: UserProfile | undefined
}
