import { Header } from './components/Header'
import { Home } from './pages/Home'
import './App.css'
import { Layout } from './components/Layout'

function App() {
   return (
    <Layout>
        <Header />
        <Home />
    </Layout>
  )
}

export default App
