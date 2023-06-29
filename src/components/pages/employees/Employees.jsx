import css from './Employees.module.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'
import clsx from 'clsx'

const Employees = () => {
  const [ staff, setStaff ] = useState([])

  useEffect(() => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://sf-final-project-be.herokuapp.com/api/officers/',
      headers: {
        "authorization": `Bearer ${window.localStorage.getItem('token')}`
       }
    };
    
    axios(config)
    .then(function (response) {
      setStaff(response.data.officers)
    })

    .catch(function (error) {
      console.log(error);
    });
  }, [staff.officers])


  const DeleteStaff = (id) => {
    // console.log(id)
    let config = {
      method: 'delete',
      maxBodyLength: Infinity,
      url: 'https://sf-final-project-be.herokuapp.com/api/officers/' + id,
      headers: { 
        "authorization": `Bearer ${window.localStorage.getItem('token')}`
      },
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <>
      <Link to="/staff" className={css.homeLink}>&#8592; Назад</Link>
      <div className={css.container}>
        <table>
          <thead>
            <tr>
                <th>Имя</th>
                <th>Фамилия</th>
                <th>E-mail</th>
                <th>Идентификатор сотрудника</th>
                <th>Одобрен</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {staff.map((officer) => 
                  <tr key={officer._id}>
                      <td>{officer.firstName}</td>
                      <td>{officer.lastName}</td>
                      <td>{officer.email}</td>
                      <td>{officer._id}</td>
                      <td>{officer.approved ? 'Да' : 'Нет'}</td>
                    <td>
                      <Link to={`/employees/:${officer._id}`} key={officer._id}>
                        <button className={clsx(css.button, css.additional)}>Дополнительно</button>
                      </Link>
                      <button className={clsx(css.button, css.delete)} onClick={(e) => {DeleteStaff(officer._id)}}>Удалить</button>
                    </td>
                  </tr>
              )}
            </tbody>
          </table>
      </div>
    </>
  )
}

export default Employees
