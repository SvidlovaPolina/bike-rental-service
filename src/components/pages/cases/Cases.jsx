import css from './Cases.module.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'

import React from 'react'

const Cases = () => {

  const [ thefts, setThefts ] = useState([])

  useEffect(() => {

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://sf-final-project-be.herokuapp.com/api/cases/',
      headers: {
        "authorization": `Bearer ${window.localStorage.getItem('token')}`
       }
    };
    
    axios(config)
    .then(function (response) {
      setThefts(response.data.data)
      console.log(thefts.data)
    })

    .catch(function (error) {
      console.log(error);
    });
  }, [thefts.data])
  
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
          {thefts.map((data) => 
                <tr key={data._id}>
                  <td>{data._id}</td>
                  <td>{data.licenseNumber}</td>
                  <td>{data.type}</td>
                  <td>{data.color}</td>
                  <td>{data.description}</td>
                </tr>
              )}
          </tbody>
        </table>
        <Link to="/case">Детальная страница кражи</Link>
      </div>
    </>
  )
}

export default Cases
