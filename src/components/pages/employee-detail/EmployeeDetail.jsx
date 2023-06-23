import css from './EmployeeDetail.module.css'
import { Link } from 'react-router-dom'
import Avatar from '../../../assets/avatar.jpg'

import React from 'react'

const EmployeeDetail = () => {
  return (
    <>
      <Link to='/employees'className={css.homeLink}>&#8592; Назад</Link>
      <div className={css.container}>
      <img className={css.avatar} src={Avatar} alt='Avatar with business cat'/>
      <div className={css.staffInformation}>
        <table>
            <thead>
              <tr>
                <th>Имя</th>
                <td>Полина</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Фамилия</th>
                <td>Свидлова</td>
              </tr>
              <tr>
                <th>E-mail</th>
                <td>nikas231@mail.ru</td>
              </tr>
              <tr>
                <th>Одобрен</th>
                <td>Да</td>
              </tr>
            </tbody>
          </table>
      </div>
        <div className={css.editButtons}>
        <button className={css.button}>Редактировать</button>
        <button className={css.button}>Сохранить изменения</button>
      </div>
    </div>
    </>
  )
}

export default EmployeeDetail
