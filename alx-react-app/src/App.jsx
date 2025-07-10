import WelcomeMessage from './components/WelcomeMessage'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import MainContent from './components/MainContent'

function App() {
  return (
    <> 
     <h1> my welcomeMessage</h1>
     <WelcomeMessage />
     <Header />
     <MainContent />
      <Footer />
    </>
  )
}

export default App