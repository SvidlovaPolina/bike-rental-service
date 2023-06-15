import { Link } from 'react-router-dom'
import FormRegistration from '../../forms/FormRegistration'
import css from './RegistrationPage.module.css'

const RegistrationPage = () => {
    return (
        <>
            <Link to='/staff'className={css.homeLink}>&#8592; Назад</Link>
            <FormRegistration />
        </>
    )
}

export default RegistrationPage