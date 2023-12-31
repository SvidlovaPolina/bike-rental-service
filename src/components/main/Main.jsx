import { Routes, Route } from 'react-router-dom'
import PageLayout from '../pages/page-layout/PageLayout'
import HelpPage from '../pages/help/Helppage'
import StaffPage from '../pages/for-staff/StaffPage'
import RegistrationPage from '../pages/registration/RegistrationPage'
import AuthorizationPage from '../pages/authorization/AuthorizationPage'
import ReportPage from '../pages/report-a-theft/ReportPage'
import css from './Main.module.css'
import Cases from '../pages/cases/Cases'
import Employees from '../pages/employees/Employees'
import EmployeeDetail from '../pages/employee-detail/EmployeeDetail'
import CaseDetail from '../pages/case-detail/CaseDetail'
import Out from '../pages/authorization/LogOut'

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
				<Route path="/cases" element={<Cases />} />
				<Route path="/cases/:caseId" element={<CaseDetail />} />
				<Route path="/employees" element={<Employees />} />
				<Route path={'/employees/:staffId'} element={<EmployeeDetail />} />
				<Route path={'/logout'} element={<Out />} />
			</Routes>
		</main>
		</>
	)
}

export default Main