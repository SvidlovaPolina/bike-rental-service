import { useSelector } from 'react-redux'
import css from './Cases.module.css'
import { Link } from 'react-router-dom'

import React from 'react'

const Cases = () => {
  const cases = useSelector(state => state.thefts.cases)
  
  return (
    <>
      <Link to="/staff-auth" className={css.homeLink}>&#8592; Назад</Link>
      <div className={css.container}>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Лицензионный номер</th>
              <th>Тип</th>
              <th>Цвет</th>
              <th>Описание</th>
            </tr>
          </thead>
          
          <tbody>
            <tr>
              <td>1</td>
              <td>11111</td>
              <td>Sport</td>
              <td>green</td>
              <td>Описание</td>
            </tr>
            <tr>
              <td>2</td>
              <td>22222</td>
              <td>General</td>
              <td>red</td>
              <td>Описание</td>
            </tr>
            <tr>
              <td>3</td>
              <td>33333</td>
              <td>Sport</td>
              <td>yellow</td>
              <td>Описание</td>
            </tr>
            <tr>
              <td>4</td>
              <td>44444</td>
              <td>General</td>
              <td>blue</td>
              <td>Описание</td>
            </tr>
          </tbody>
        </table>
        <Link to="/case">Детальная страница кражи</Link>

        <div>{cases}</div>
      </div>
    </>
  )
}

export default Cases
