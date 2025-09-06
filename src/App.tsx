
import Wrapper from './components/Wrapper/Wrapper'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import TopBar from './components/TopBar/TopBar'

function App() {
    const containers = [
    {
      Title: "Types of Test",
      cards: [
        { id: 1, title: "Card One", description: "This is the first card" },
        { id: 2, title: "Card Two", description: "This is the second card" },
        { id: 3, title: "Card Three", description: "This is the third card" }
      ]
    },
    {
      Title: "Popular Subjects",
      cards: [
        { id: 4, title: "Mathematics", description: "Test your math skills with quizzes on algebra, geometry, calculus, and more." },
        { id: 5, title: "Science", description: "Explore quizzes on physics, chemistry, biology, and earth science to enhance your scientific knowledge." },
        { id: 6, title: "History", description: "Challenge yourself with quizzes on world history, ancient civilizations, and significant historical events." }
      ]
    },
    {
      Title: "Upcoming Features",
      cards: [
        { id: 7, title: "Timed Quizzes", description: "Experience the thrill of timed quizzes to test your knowledge under pressure." },
        { id: 8, title: "Progress Tracking", description: "Monitor your learning journey with detailed progress tracking and performance analytics." },
        { id: 9, title: "Custom Quiz Creation", description: "Create your own quizzes tailored to your study needs and share them with friends." }
      ]
    }
  ];
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
      <Wrapper containers={containers}/>
      <Footer/>
  </>
  )
}

export default App
