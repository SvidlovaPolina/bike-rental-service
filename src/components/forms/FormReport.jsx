import css from './Forms.module.css'

const FormReport = () => {
    return (
        <div className={css.form}>
            <form className={css.formReport}>
                <p className={css.formName}>Сообщить о краже</p>

                <p className={css.inputText}>Номер лицензии* <input 
				className={css.input}
				type="text" 
				name="licenseNumber" 
				placeholder="12 символов">
				</input></p>
						
				<p className={css.inputText}>ФИО* <input 
				className={css.input}
				type="text" 
				name="ownerFullName" 
				placeholder="">
				</input></p>

				<p className={css.inputText}>Тип велосипеда <select 
                className={css.select}>
                    <option>general</option>
                    <option>sport</option>
                </select></p>

				<p className={css.inputText}>Цвет велосипеда <input 
				className={css.input}
				type="text" 
				name="" 
				placeholder="">
				</input></p>

				<p className={css.inputText}>Дата кражи <input 
				className={css.input}
				type="text" 
				name="date" 
				placeholder="">
				</input></p>

                <p className={css.inputText}>Дополнительная информация <textarea 
				className={css.input}
				type="text" 
				name="description" 
				placeholder="">
				</textarea></p>

				<button className={css.submit} type='submit'>Отправить</button>
			</form>
		</div>
    )
}

export default FormReport