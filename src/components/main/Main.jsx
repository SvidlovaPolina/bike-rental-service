import { Routes, Route } from 'react-router-dom'
import PageLayout from '../pages/page-layout/PageLayout'
import HelpPage from '../pages/help/Helppage'
import StaffPage from '../pages/for-staff/StaffPage'
import RegistrationPage from '../pages/registration/RegistrationPage'
import AuthorizationPage from '../pages/authorization/AuthorizationPage'
import ReportPage from '../pages/report-a-theft/ReportPage'
import css from './Main.module.css'

const Main = (props) => {
	return (
		<>
			<main className={css.main}>
			<Routes>
				<Route path="/" element={<PageLayout />} />
				<Route path="/help" element={<HelpPage />} />
				<Route path="/staff" element={<StaffPage />} />
				<Route path="/registration" element={<RegistrationPage />} />
				<Route path="/authorization" element={<AuthorizationPage />} />
				<Route path="/report" element={<ReportPage />} />
			</Routes>
		</main>
		</>
	)
}

export default Main