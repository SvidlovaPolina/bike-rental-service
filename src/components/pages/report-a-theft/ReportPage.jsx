import { Link } from 'react-router-dom'
import FormReport from '../../forms/FormReport'
import css from './ReportPage.module.css'

const ReportPage = () => {
    return (
        <>
            <Link to='/help'className={css.homeLink}>&#8592; Назад</Link>
            <FormReport />
        </>
    )
}

export default ReportPage