import React from 'react'
import css from './CaseDetail.module.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useResolvedPath } from 'react-router-dom'

const CaseDetail = () => {

  const match = useResolvedPath('')
  const caseId = match.pathname.split(':')[1]

  const [ edit, setEdit ] = useState(
    new Map()
  )

  useEffect(() => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://sf-final-project-be.herokuapp.com/api/cases/' + caseId,
      headers: {
        "authorization": `Bearer ${window.localStorage.getItem('token')}`
       }
    };
    
    axios(config)
    .then(function (response) {
      let data = response.data.data
      setEdit(new Map([
        ['licenseNumber', data.licenseNumber],
        ['ownerFullName', data.ownerFullName],
        ['type', data.type],
        ['color', data.color],
        ['date', data.date],
        ['officer', data.officer],
        ['description', data.description]
      ]))
    })

    .catch(function (error) {
      console.log(error);
    });
  }, [setEdit])

  const onchange = (e, name) => {
    edit.set(name, e.target.innerHTML);
  }

  const Save = () => {
    let config = {
      method: 'put',
      maxBodyLength: Infinity,
      url: 'https://sf-final-project-be.herokuapp.com/api/cases/' + caseId,
      headers: {
        "authorization": `Bearer ${window.localStorage.getItem('token')}`
       },
       data: {
        'licenseNumber': edit.get('licenseNumber'),
        'ownerFullName': edit.get('ownerFullName'),
        'type': edit.get('type'),
        'color': edit.get('color'),
        'date': edit.get('date'),
        'officer': edit.get('officer'),
        'description': edit.get('description')
       }
    };
    
    axios(config)
    .then(function (response) {
      // let data = response.data.data
      console.log(response)
    })

    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <>
      <Link to='/cases' className={css.homeLink}>&#8592; Назад</Link>
      <div className={css.container}>
        <div className={css.staffInformation}>
          <table>
              <thead>
                <tr>
                  <th>Лицензионный номер</th>
                  <td contentEditable={true} suppressContentEditableWarning={true} onInput={(e) => onchange(e, 'licenseNumber')}>{edit.get('licenseNumber')}</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>ФИО клиента</th>
                  <td contentEditable={true} suppressContentEditableWarning={true} onInput={(e) => onchange(e, 'ownerFullName')}>{edit.get('ownerFullName')}</td>
                </tr>
                <tr>
                  <th>Тип велосипеда</th>
                  <td contentEditable={true} suppressContentEditableWarning={true} onInput={(e) => onchange(e, 'type')}>{edit.get('type')}</td>
                </tr>
                <tr>
                  <th>Цвет велосипеда</th>
                  <td contentEditable={true} suppressContentEditableWarning={true} onInput={(e) => onchange(e, 'color')}>{edit.get('color')}</td>
                </tr>
                <tr>
                  <th>Дата кражи</th>
                  <td contentEditable={true} suppressContentEditableWarning={true} onInput={(e) => onchange(e, 'date')}>{edit.get('date')}</td>
                </tr>
                <tr>
                  <th>Ответственный сотрудник</th>
                  <td contentEditable={true} suppressContentEditableWarning={true} onInput={(e) => onchange(e, 'officer')}>{edit.get('officer')}</td>
                </tr>
                <tr>
                  <th>Описание</th>
                  <td contentEditable={true} suppressContentEditableWarning={true} onInput={(e) => onchange(e, 'description')}>{edit.get('description')}</td>
                </tr>
              </tbody>
            </table>
        </div>
          <div className={css.editButtons}>
            <button className={css.button} onClick={Save}>Сохранить изменения</button>
        </div>
      </div>
    </>
  )
}

export default CaseDetail
