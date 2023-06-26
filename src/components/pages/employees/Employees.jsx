import css from './Employees.module.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Employees = props => {

  const [ staff, setStaff ] = useState({
    officers: null,
  })

  // const { officers } = props

  useEffect(() => {

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://sf-final-project-be.herokuapp.com/api/officers/',
      headers: {
        "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OTk3MWFmMWUzNmZjOWU2ODAzYTg1NSIsImlhdCI6MTY4Nzc5NTk0OSwiZXhwIjoxNjg4NDAwNzQ5fQ.ASkcti4eR3MKD71njRriCgX0L8b6uiNQMLP5PJiF8vE"
       }
    };

    axios(config)
    .then(function (response) {
      // console.log(response);
      const allPersons = response.data.officers;
      // setStaff({
      //   officers: allPersons,
      // })
      staff.officers = allPersons
      console.log(staff.officers)
    })
    .catch(function (error) {
      console.log(error);
    });
  }, [setStaff])

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
              {staff.officers.map((officer) => 
                <tr key={officer._id}>
                  <td>{officer._id}</td>
                  <td>{officer.firstName}</td>
                  <td>{officer.lastName}</td>
                  <td>{officer.email}</td>
                  <td>{officer.approved ? 'Да' : 'Нет'}</td>
                </tr>
              )}
            </tbody>
          </table>
          <Link to="/employee-detail">Детальная страница сотрудника</Link>
      </div>
    </>
  )
}

export default Employees

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OTk3MWFmMWUzNmZjOWU2ODAzYTg1NSIsImlhdCI6MTY4Nzc5NTk0OSwiZXhwIjoxNjg4NDAwNzQ5fQ.ASkcti4eR3MKD71njRriCgX0L8b6uiNQMLP5PJiF8vE
