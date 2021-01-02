import { FC } from 'react'
import { Layout } from 'antd'
import './home.css'

const Home: FC = () => {
  const { Header, Content, Footer } = Layout
  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>Header</Header>
      <Content className="site-layout" style={{ marginTop: 64 }}>
        content
      </Content>
      <Footer style={{ textAlign: 'center' }}>React Boilerplate ©2021 Created by Shane</Footer>
    </Layout>
  )
}

export default Home
