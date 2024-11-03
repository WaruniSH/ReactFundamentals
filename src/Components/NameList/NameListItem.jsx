import React from 'react';
import moment from 'moment';
 
import './NameListItem.css';

function NameListItem(props){
    console.log(props)
    return(
        <li className='list-group-item shadow-sm'>
            <div className='row align-items-center'>
                <div className='col-2'>
                     <img 
                     src={props.avatar} 
                     alt={props.name} 
                     className='border border-darl rounded-circle shadow-sm'/>
                </div>
            <div className='col-10'>
                <h4>{props.name}</h4>
                <p>
                    {props.city} | {props.email} 
                </p>
                <small>{moment(props.birthday).format('DD-MM-YYYY')}</small>
 
            </div>
            </div>
        </li>
    );
}

export default NameListItem;