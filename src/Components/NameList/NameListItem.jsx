import React from 'react';
import moment from 'moment';

function NameListItem(props){
    console.log(props)
    return(
        <li>
            <p><img src={props.avatar}/> </p>
            <p>Name :{props.name}</p>
            <p>City : {props.city}</p>
            <p>Email : {props.email}</p>
            <p>Birthday : {moment(props.birthday).format('DD-MM-YYYY')}</p>
        </li>
    );
}

export default NameListItem;