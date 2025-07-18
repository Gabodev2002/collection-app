import { Header } from './components/Header'
import { Home } from './pages/Home'
import './App.css'
import { Layout } from './components/Layout'

// https://api.unsplash.com/photos/?client_id=Q2RreKXKTluL3jgHrsWvM97jT_iu8kpJmxkY-u8h_T0

function App() {
   return (
    <Layout>
        <Header />
        <Home />
    </Layout>
  )
}

export default App
