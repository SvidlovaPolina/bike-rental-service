import axios from 'axios'
import { useForm } from 'react-hook-form'
// import { useSelector } from 'react-redux'
// import { setToken } from '../../store/authSlice'
import css from './Forms.module.css'

const FormAuthorization = () => {

	// const token = useSelector(state => state.auth.token)
	// console.log(token)

	const {
		register,
		formState: {
			errors,
			isValid
		},
		handleSubmit,
		reset,
	} = useForm({
		mode: 'onBlur',
	})

	const onSumbit = (data) => {
		SignIn(data);
		reset()
	}

	const SignIn = (data) => {

		let config = {
			method: 'post',
		  	maxBodyLength: Infinity,
			url: 'https://sf-final-project-be.herokuapp.com/api/auth/sign_in',
			headers: { 	},
			data : data
		};

		axios(config)
		  .then(function (response) {
		  console.log(JSON.stringify(response.data));
	  		})
	  	.catch(function (error) {
		  console.log(error);
	  	});
    }

	// 1ce988f9-a327-4c5e-b749-4ba64ca7ea9b

	return (
        <div className={css.form}>
            <form onSubmit={handleSubmit(onSumbit)} className={css.formAuthorization}>
                <p className={css.formName}>Авторизация</p>

                <label className={css.inputText}>E-mail* <input 
				className={css.input}
				type='email'
				placeholder='E-mail'
				{...register('email', {
					required: "Поле обязательно к заполнению",
				})}>
				</input>
				<div className={css.error}>{errors?.email && <p>{errors?.email?.message || "Error!"}</p>}</div></label>
						
				<label className={css.inputText}>Пароль* <input 
				className={css.input}
				autoComplete="on"
				type='password'
				placeholder='Введите пароль'
				{...register('password', {
					required: "Поле обязательно к заполнению",
					minLength: {
						value: 8,
						message: 'Минимум 8 символов'
					}
				})}>
				</input>
				<div className={css.error}>{errors?.password && <p>{errors?.password?.message || "Error!"}</p>}</div></label>

				<button className={css.submit} type='submit' disabled={!isValid}>Войти</button>
			</form>
		</div>
    )
}

export default FormAuthorization