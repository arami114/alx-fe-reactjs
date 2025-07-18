import WelcomeMessage from './components/WelcomeMessage'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import MainContent from './components/MainContent'
import UserProfile from './components/UserProfile'
import Counter from './components/Counter'
function App() {
  return (
    <> 
     <WelcomeMessage />
     <Header />
     <MainContent />
     <UserProfile 
    name="Alice"
    age="25"
    bio="Loves hiking and photography"
    />
      <Footer />
      <Counter />
    </>
  )
}

export default App