import { Link } from 'react-router-dom'
import FormAuthorization from '../../forms/FormAuthorization'
import css from './AuthorizationPage.module.css'

const AuthorizationPage = () => {

    return (
        <>
            <Link to='/staff'className={css.homeLink}>&#8592; Назад</Link>
            <FormAuthorization />

        </>
    )
}

export default AuthorizationPage