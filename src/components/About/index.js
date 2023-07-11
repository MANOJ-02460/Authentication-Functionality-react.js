// Write your JS code here

import './index.css'
import Header from '../Header'
import LogoutButton from '../LogoutButton'

const Home = () => (
  <>
    <Header />
    <div className="about-container">
      <h1 className="about-heading">About Route</h1>
    </div>
    <LogoutButton />
  </>
)
export default Home
