import React from 'react'
import css from './CaseDetail.module.css'
import { Link, useResolvedPath } from 'react-router-dom'

const CaseDetail = () => {

  const match = useResolvedPath('caseId')
  console.log(match.pathname.split(':')[1])

  return (
    <>
      <Link to='/cases' className={css.homeLink}>&#8592; Назад</Link>
      <div className={css.container}>
        <div className={css.staffInformation}>
          <table>
              <thead>
                <tr>
                  <th>Лицензионный номер</th>
                  <td>11111</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>ФИО клиента</th>
                  <td>Свидлова П.В.</td>
                </tr>
                <tr>
                  <th>Тип велосипеда</th>
                  <td>Sport</td>
                </tr>
                <tr>
                  <th>Цвет велосипеда</th>
                  <td>green</td>
                </tr>
                <tr>
                  <th>Дата кражи</th>
                  <td>22.06.2023г.</td>
                </tr>
                <tr>
                  <th>Ответственный сотрудник</th>
                  <td>Артём</td>
                </tr>
                <tr>
                  <th>Описание</th>
                  <td>Описание</td>
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

export default CaseDetail
