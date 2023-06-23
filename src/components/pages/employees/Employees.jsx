import css from './Employees.module.css'
import { Link } from 'react-router-dom'

import React from 'react'

const Employees = () => {
  return (
    <>
      <Link to="/staff-auth" className={css.homeLink}>&#8592; Назад</Link>
      <div className={css.container}>
        <table>
          <thead>
            <tr>
                <th>#</th>
                <th>Имя</th>
                <th>Фамилия</th>
                <th>E-mail</th>
                <th>Одобрен</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Джейк</td>
                <td>Пес</td>
                <td>ляляля@mail.ru</td>
                <td>Да</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Финн</td>
                <td>Парнишка</td>
                <td>бубубу@mail.ru</td>
                <td>Да</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Марселин</td>
                <td>Абадир</td>
                <td>люблюБиби@mail.ru</td>
                <td>Да</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Боннибель</td>
                <td>Бубльгум</td>
                <td>принцесса@mail.ru</td>
                <td>Да</td>
              </tr>
            </tbody>
          </table>
          <Link to="/employee-detail">Детальная страница сотрудника</Link>
      </div>
    </>
  )
}

export default Employees
