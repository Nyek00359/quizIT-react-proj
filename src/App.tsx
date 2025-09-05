
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import TopBar from './components/TopBar/TopBar'

function App() {
  return (
    <>
      <TopBar/>
      <Hero 
        Desctiption='a lightweight quiz app made for fast
                    and easy exam reviews. Take short 
                    tests, refresh your knowledge, and 
                    track your progress anytime, 
                    anywhere. Perfect for students who 
                    want a simple way to prepare and 
                    stay confident before exams.' 
        Tagline='Learn. Play. Master IT.'
                  />
      <Footer/>
  </>
  )
}

export default App
