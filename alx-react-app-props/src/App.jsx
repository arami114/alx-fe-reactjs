import WelcomeMessage from './components/WelcomeMessage'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import MainContent from './components/MainContent'
import ProfilePage from './components/Profilepage'
import UserContext from './components/UserContext'
function App() {
   const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <> 
     <Header />
      <MainContent />
      <WelcomeMessage />
      <UserContext.Provider value={userData}>
        <ProfilePage />
      </UserContext.Provider>
      
      <Footer />
    </>
  )
}

export default App