import Header from '../Header'
import './index.css'
import LogoutButton from '../LogoutButton'

const Home = props => {
  const {history} = props

  return (
    <div className="home-components">
      <Header />
      <h1>Home Route</h1>
      <LogoutButton history1={history} />
    </div>
  )
}
export default Home
