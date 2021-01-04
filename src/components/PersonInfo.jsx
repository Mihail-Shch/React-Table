import React from 'react'

function PersonInfo({ firstName, lastName, description, address }) {

    const { city, state, zip, streetAddress } = address;

    return (
        <div >
            <p>Выбран пользователь <b>{firstName} {lastName}</b> </p>
            <p>Описание:</p>
            <textarea name="desc" value={description} onChange={() => alert('Textarea was changed')} cols="30" rows="5"></textarea>
            <p>Адрес проживания: <b>{streetAddress}</b></p>
            <p>Город: <b>{city}</b></p>
            <p>Провинция/штат: <b>{state}</b></p>
            <p>Индекс: <b>{zip}</b></p>
        </div >
    )
}

export default PersonInfo
