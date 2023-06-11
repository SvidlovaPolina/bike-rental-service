import PageLayout from '../page-layout/PageLayout'
import HelpPage from '../help/Helppage'
import StaffPage from '../for-staff/StaffPage'
import css from './Main.module.css'

const Main = (props) => {
	return (
		<main className={css.main}>
			<PageLayout />
			<HelpPage />
			<StaffPage />
		</main>
	)
}

export default Main