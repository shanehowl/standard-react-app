import { FC } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Layout } from 'antd'

import NavigationHeader from '../../components/navigation-header'
import Landing from '../landing'
import Features from '../features'
import Crud from '../crud'

import './home.css'

const Home: FC = () => {
  const { Header, Content, Footer } = Layout
  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <NavigationHeader title="R Base" />
      </Header>
      <Content className="site-layout" style={{ padding: '0 64px', marginTop: 64 }}>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/features" component={Features} />
          <Route path="/crud" component={Crud} />
        </Switch>
      </Content>
      <Footer style={{ textAlign: 'center' }}>React Boilerplate ©2021 Created by Shane</Footer>
    </Layout>
  )
}

export default Home
