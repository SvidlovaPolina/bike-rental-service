import { BrowserRouter } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Main from './components/main/Main'

function App() {
  return (
		<div className='wrapper'>
			<BrowserRouter>
				<Header />
				<Main />
				<Footer />
			</BrowserRouter>
		</div>
  )
}

export default App
