import css from './Forms.module.css'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { axiosReport } from '../../store/reportSlice'

const FormReport = () => {

	const dispatch = useDispatch();
	const {status, error} = useSelector(state => state.report)

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
		dispatch(axiosReport(data))
		reset()
	}

    return (
        <div className={css.form}>
            <form onSubmit={handleSubmit(onSumbit)} className={css.formReport}>
                <p className={css.formName}>Сообщить о краже</p>

                <label className={css.inputText}>Номер лицензии* <input 
				className={css.input}
				type='text'
				placeholder='5 символов'
				{...register('licenseNumber', {
					required: "Поле обязательно к заполнению",
					minLength: {
						value: 5,
						message: 'Минимум 5 символов'
					}
				})}>
				</input>
				<div className={css.error}>{errors?.licenseNumber && <p>{errors?.licenseNumber?.message || "Error!"}</p>}</div></label>
						
				<label className={css.inputText}>ФИО* <input 
				className={css.input}
				type='text'
				placeholder=''
				{...register('ownerFullName', {
					required: "Поле обязательно к заполнению",
				})}>
				</input>
				<div className={css.error}>{errors?.ownerFullName && <p>{errors?.ownerFullName?.message || "Error!"}</p>}</div></label>

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

				<label className={css.inputText}>Тип велосипеда* <select 
                className={css.select}
				{...register('type', {
					required: "Выберите тип"
				})}
				defaultValue='general'>
                    <option value='general'>general</option>
                    <option value='sport'>sport</option>
                </select></label>

				<label className={css.inputText}>Цвет велосипеда <input 
				className={css.input}
				type='text'
				placeholder=''
				{...register('color')}>
				</input></label>

				<label className={css.inputText}>Дата кражи <input 
				className={css.input}
				type='date'
				{...register('date')}>
				</input></label>

                <label className={css.inputText}>Дополнительная информация <textarea 
				className={css.input}
				type='text'
				placeholder=''
				{...register('description')}>
				</textarea></label>


				<button className={css.submit} type='submit' disabled={!isValid}>Отправить</button>
			</form>
			{status === 'loading' && <h3>Loading...</h3>}
			{status === 'resolved' && <h3 className={css.succes}>Данные приняты, спасибо!</h3>}
			{error && <h3 className={css.errorServer}>An error occured: {error}</h3>}
		</div>
    )
}

export default FormReport