import css from './Employees.module.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'

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
      // console.log(staff.officers)
    })

    .catch(function (error) {
      console.log(error);
    });
  }, [staff.officers])


  const DeleteStaff = (id) => {
    console.log(id)
    let config = {
      method: 'delete',
      maxBodyLength: Infinity,
      url: 'https://sf-final-project-be.herokuapp.com/api/officers/' + id,
      headers: { 
        "authorization": `Bearer ${window.localStorage.getItem('token')}`
      },
      // params: {
      //   id
      // }
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      // staff.find()
      // setStaff()
    })
    .catch(function (error) {
      console.log(error);
    });
  }

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
                <th>Удаление</th>
              </tr>
            </thead>
            <tbody>
              {staff.map((officer) => 
                  <tr key={officer._id}>
                      <td><Link to={`/employees/:${officer._id}`} key={officer._id}>{officer._id}</Link></td>
                      <td>{officer.firstName}</td>
                      <td>{officer.lastName}</td>
                      <td>{officer.email}</td>
                      <td>{officer.approved ? 'Да' : 'Нет'}</td>
                    <td><button className={css.button} onClick={(e) => {DeleteStaff(officer._id)}}>Удалить</button></td>
                  </tr>
              )}
            </tbody>
          </table>
      </div>
    </>
  )
}

export default Employees
