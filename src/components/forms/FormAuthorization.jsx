import css from './Forms.module.css'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { axiosAuthorization } from '../../store/authSlice'
import { Link } from 'react-router-dom'
// import { signIn } from '../../store/authSlice'


const FormAuthorization = () => {

	const dispatch = useDispatch();
	// const auth = useSelector(state => state.auth.auth)
	// console.log(auth)
	const {status, error} = useSelector(state => state.auth)
	console.log(status)
	// dispatch(axiosAuthorization())

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
		dispatch(axiosAuthorization(data))

		/*if(result.payload.result.status){
			// перенаправить на страничку StaffPage (/staff)
		} else{
			// вывести сообщение из ошибки (почему не удалось авторизоваться)
			alert(result.payload.result.message);
		}*/
		reset()
	}

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

				{status === 'loading' && <h2>Loading...</h2>}
				{status === 'resolved' && <Link to='/staff'></Link>}
				{error && <h2>An error occured: {error}</h2>}
			</form>
		</div>
    )
}

export default FormAuthorization