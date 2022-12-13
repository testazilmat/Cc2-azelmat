import React from 'react';
import './User.css';

export default function User(props) {
  return (
    <div className='User'>
        <img src={props.image} alt="Image de profile" />
        <div>
            <div className='FullName'>{props.nom}</div>
            <button onClick={props.Detail}>Detail User</button>
            <button onClick={props.ListPosts}>Liste des posts</button>
        </div>
    </div>
  )
}
