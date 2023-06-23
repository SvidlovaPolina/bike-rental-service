import { useState } from 'react'
import css from './Forms.module.css'

const FormAuthorization = props => {

	const [values, setValues] = useState({
		email: '',
		password: ''
	})

	const handleChange = e => {
		const fieldName = e.target.name
		setValues({...values, [fieldName]: e.target.value})
	}

	const handleSubmit = e => {
		e.preventDefault()
		if (values.email && values.password) {
			formSubmit(values.email, values.password)
		}
	}

	const SignIn = () => {
        let axios = require('axios');

		let config = {
			method: 'post',
		  	maxBodyLength: Infinity,
			url: 'https://sf-final-project-be.herokuapp.com/api/auth/sign_in',
			headers: { },
			data : {
				"email": values.email,
				"password": values.password,
			}
		  };

		  axios(config)
			.then(function (response) {
  				console.log(JSON.stringify(response.data));
			})
			.catch(function (error) {
  				console.log(error);
			});
    }

	const formSubmit = (email, password) => {
		SignIn()
	}

	return (
        <div className={css.form}>
            <form onSubmit={handleSubmit} formSubmit={formSubmit} className={css.formAuthorization}>
                <p className={css.formName}>Авторизация</p>

                <p className={css.inputText}>E-mail* <input 
				className={css.input}
				id='auth'
				type='email'
				name='email'
				placeholder='E-mail'
				onChange={handleChange}
				value={values.email}>
				</input></p>
						
				<p className={css.inputText}>Пароль* <input 
				className={css.input}
				id='pass'
				type='password'
				name='password'
				placeholder='Введите пароль'
				onChange={handleChange}
				value={values.password}>
				</input></p>

				<button className={css.submit} type='submit'>Войти</button>
			</form>
		</div>
    )
}

export default FormAuthorization