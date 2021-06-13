import { Dispatch } from 'react'

//* Modals
import { UpdateUserProfileAction, UserProfile } from '../../modals/authentication'

export const UPDATE_USER_PROFILE = 'UPDATE_USER_PROFILE'
export const updateUserProfile = (userProfile: UserProfile | undefined) => (
  dispatch: Dispatch<UpdateUserProfileAction>
) => {
  return dispatch({
    type: UPDATE_USER_PROFILE,
    payload: userProfile,
  })
}
