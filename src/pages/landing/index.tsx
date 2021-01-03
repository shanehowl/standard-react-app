import { FC } from 'react'
import { Row, Col, Typography, Button, Space, Avatar } from 'antd'
import ReactLogo from '../../assets/images/react-logo.svg'
import AntDesignLogo from '../../assets/images/antd-logo.svg'
import './landing.less'

/**
 *
 * Landing
 *
 */
const Landing: FC = () => {
  const { Title, Paragraph } = Typography
  return (
    <>
      <Row align="middle" justify="space-between" gutter={16} className="landing-page">
        <Col span={10}>
          <Row>
            <Col>
              <Title className="left-section__title" level={1}>
                Acclerate your development
              </Title>
              <Paragraph className="left-section__paragraph">
                This boilerplate provides a standardized template to kickstart your React project.
                It comes with proper linting setup, folder structure and automated file setup.
              </Paragraph>
            </Col>
          </Row>
          <Row justify="end">
            <Col>
              <Space size={24}>
                <Button href="/features" type="default">
                  View more features
                </Button>
                <Button href="/crud" type="primary">
                  Simulate CRUD
                </Button>
              </Space>
            </Col>
          </Row>
        </Col>
        <Col span={4} />
        <Col span={10}>
          <Row>
            <Col>
              <Avatar
                className="right-section__avatar"
                size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 220, xxl: 100 }}
                src={ReactLogo}
              />
            </Col>
          </Row>
          <Row justify="center">
            <Col>
              <Avatar
                className="right-section__avatar"
                size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 120, xxl: 100 }}
                src={AntDesignLogo}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default Landing
