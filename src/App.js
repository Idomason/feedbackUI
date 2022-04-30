import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import { FeedbackProvider } from './context/FeedbackContext'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'

function App() {
  // const { addFeedback } = useContext(FeedbackContext)s

  return (
    <FeedbackProvider>
      <Router>
        <Header text={true} />
        <div style={{ margin: '0 10% auto' }}>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                  {/* <AboutPage /> */}
                </>
              }
            ></Route>
            <Route path='/about' element={<AboutPage />} />
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  )
}

export default App
