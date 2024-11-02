import React from 'react';
import NameListItem from './NameListItem';


function NameList(){
    return(
        <React.Fragment>
            <h1>Name List</h1>
            <hr/>
            <ul>
                <NameListItem name="Waruni Hettiararchchi" course="ML"/>
                <NameListItem name="Pasindu Kanchana" course="AI"/>
                <NameListItem name="Kavindi Hettiarachchi" course="ReactJS"/>
            </ul>
        </React.Fragment>

    );
}

export default NameList;