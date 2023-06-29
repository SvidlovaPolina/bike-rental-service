import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { signUp } from '../../store/authSlice'
import css from './Forms.module.css'

const FormRegistration = () => {

	const dispatch = useDispatch();

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
		let result = dispatch(signUp({ data }))
		console.log(result)
		/*if(result.payload.result.status){
			// перенаправить на страничку авториазции AuthorizationPage (/authorization)
		} else{
			// вывести сообщение, что не удалось зарегестрироваться
			alert(result.payload.result.message);
		}*/
		reset()
	}

	return (
        <div className={css.form}>
            <form onSubmit={handleSubmit(onSumbit)} className={css.formRegistration}>
                <p className={css.formName}>Регистрация</p>

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

				<label className={css.inputText}>Имя <input 
				className={css.input}
				type='text'
				placeholder=''
				{...register('firstName')}>
				</input>
				<div className={css.error}>{errors?.firstName && <p>{errors?.firstName?.message || "Error!"}</p>}</div></label>

				<label className={css.inputText}>Фамилия <input 
				className={css.input}
				type='text'
				placeholder=''
				{...register('lastName')}>
				</input>
				<div className={css.error}>{errors?.lastName && <p>{errors?.lastName?.message || "Error!"}</p>}</div></label>

				<label className={css.inputText}>Client ID* <input 
				className={css.input}
				type='text'
				placeholder=''
				{...register('clientId', {
					required: "Поле обязательно к заполнению",
					minLength: {
						value: 36,
						message: 'Подсказка: 1ce988f9-a327-4c5e-b749-4ba64ca7ea9b'
					}
				})}>
				</input>
				<div className={css.error}>{errors?.clientId && <p>{errors?.clientId?.message || "Error!"}</p>}</div></label>

				<button className={css.submit} type='submit' disabled={!isValid}>Зарегистрироваться</button>
			</form>
		</div>
    )
}

export default FormRegistration