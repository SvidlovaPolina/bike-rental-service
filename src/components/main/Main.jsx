import { Routes, Route } from 'react-router-dom'
import PageLayout from '../page-layout/PageLayout'
import HelpPage from '../help/Helppage'
import StaffPage from '../for-staff/StaffPage'
import css from './Main.module.css'

const Main = (props) => {
	return (
		<>
			<main className={css.main}>
			<Routes>
				<Route path="/" element={<PageLayout />} />
				<Route path="/help" element={<HelpPage />} />
				<Route path="/staff" element={<StaffPage />} />
			</Routes>
		</main>
		</>
	)
}

export default Main