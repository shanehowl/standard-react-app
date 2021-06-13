import _ from 'lodash'
import { useDispatch, useSelector } from 'react-redux'
import { FC, useCallback, useMemo } from 'react'
import {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
  useGoogleLogin,
  useGoogleLogout,
} from 'react-google-login'
import { Row, Col, Typography, Menu, Button } from 'antd'
import { Link, useHistory, useLocation } from 'react-router-dom'

//* Components
import { NavigationHeaderProp } from './modal'

//* Utilities
import { refreshTokenSetup } from '../../utilities/authentication'

//* Redux
import { updateUserProfile } from '../../redux/actions/action_authentication'

//* Styles
import './navigation-header.less'

//* Constants
const { Title } = Typography

/**
 *
 * NavigationHeader
 *
 */
const NavigationHeader: FC<NavigationHeaderProp> = ({
  btnType = 'primary',
  btnSize = 'middle',
  title = '',
}: NavigationHeaderProp) => {
  //* Hooks
  const history = useHistory()
  const dispatch = useDispatch()
  const { userProfile } = useSelector((state: any) => state.authenticationReducer)
  const { pathname } = useLocation<{ pathname: string }>()
  //* Memos
  const currentMenu = useMemo(() => _.chain(pathname).replace('/', '').value(), [pathname])
  //* Callbacks
  const onMenuClick = useCallback(
    (e): void => {
      history.push(`/${e.key}`)
    },
    [history]
  )
  //* Methods
  const onSuccess = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    console.log('#succ', response)
    const { profileObj } = response as GoogleLoginResponse
    //* Update to reducer
    dispatch(updateUserProfile(profileObj))

    //* Setup refresh token
    refreshTokenSetup(response as GoogleLoginResponse)
  }
  const onLogout = () => dispatch(updateUserProfile(undefined))
  //* Google OAuth
  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure: (error: any) => console.error(error),
    clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID || '',
    isSignedIn: true,
    uxMode: 'redirect',
    redirectUri: `${window.location.origin}${process.env.REACT_APP_BASE_URL}`,
    accessType: 'offline',
  })
  const { signOut } = useGoogleLogout({
    clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID || '',
    onLogoutSuccess: onLogout,
    onFailure: () => {},
  })
  console.log('User', userProfile)
  return (
    <>
      <Row align="middle" justify="space-between">
        <Col xs={20} sm={4} md={4} lg={4} xl={4}>
          <Link to="/" className="navigation-header__link">
            <Title level={3}>{title}</Title>
          </Link>
        </Col>
        <Col xs={3} sm={19} md={19} lg={19} xl={19}>
          <Row justify="end">
            <Col>
              <Menu
                className="navigation-header__menu"
                onClick={onMenuClick}
                selectedKeys={[currentMenu]}
                mode="horizontal"
              >
                <Menu.Item key="features">Features</Menu.Item>
                <Menu.Item key="crud">Basic CRUD</Menu.Item>
              </Menu>
            </Col>
          </Row>
        </Col>
        <Col xs={1} sm={1} md={1} lg={1} xl={1}>
          {userProfile ? (
            <Button type={btnType} size={btnSize} onClick={signOut}>
              Logout
            </Button>
          ) : (
            <Button type={btnType} size={btnSize} onClick={signIn}>
              Login
            </Button>
          )}
        </Col>
      </Row>
    </>
  )
}

export default NavigationHeader
