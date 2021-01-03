import _ from 'lodash'
import { FC, useCallback, useMemo } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { Row, Col, Typography, Menu, Button } from 'antd'
import { NavigationHeaderProp } from './modal'

import './navigation-header.less'
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
  const history = useHistory()
  const { Title } = Typography
  const { pathname } = useLocation<{ pathname: string }>()
  const currentMenu = useMemo(() => _.chain(pathname).replace('/', '').value(), [pathname])
  const onMenuClick = useCallback(
    (e): void => {
      history.push(`/${e.key}`)
    },
    [history]
  )
  return (
    <>
      <Row align="middle" justify="space-between">
        <Col span={3}>
          <Link to="/" className="navigation-header__link">
            <Title level={3}>{title}</Title>
          </Link>
        </Col>
        <Col span={11} />
        <Col span={10}>
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
                <Button type={btnType} size={btnSize}>
                  Login
                </Button>
              </Menu>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default NavigationHeader
