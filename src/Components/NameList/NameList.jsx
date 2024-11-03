import React from 'react';
import NameListItem from './NameListItem';


function NameList(){
    const nameList = [
      {
        id : 1,
        name: { title: "Miss", first: "Jennie", last: "Nichols"},
        location: {city:"Billings",},
        email: "jennie.nichols@example.com",
        dob: {date: "1992-03-08T15:13:16.688Z",age: 30,},
       picture: { medium: "https://randomuser.me/api/portraits/med/men/75.jpg",},
    },
    {
      id : 2,
      name: {"title":"Mr","first":"Manus","last":"Narain"},
      location: {city:"Foudgum",},
      email: "jennie.nichols@example.com",
      dob: {date: "1949-06-25T23:53:33.331Z",age: 75,},
     picture: { medium: "https://randomuser.me/api/portraits/med/women/23.jpg",},
    },

    {
      id : 3,
      name: {"title":"Mr","first":"Roy","last":"Dean"},
      location: {city:"Sunshine Coast",},
      email: "roy.dean@example.com",
      dob: {date: "1969-10-21T10:46:15.807Z",age: 55,},
     picture: { medium: "https://randomuser.me/api/portraits/med/men/41.jpg",},
  }

  ];
const nameListComponent = () =>{
  return(
    nameList.map(aName => {
      console.log("aName .. ",aName)
      return(
        <NameListItem 
        key={aName.id}
        name={aName.name.first + " " + aName.name.last}
        city={aName.location.city}
        email={aName.email}
        birthday={aName.dob.date}
        avatar={aName.picture.medium}
        />
      )
    })
    
  );
};

    return(
        <React.Fragment>
            <h1>Name List</h1>
            <hr/>
            <ul>
               {nameListComponent()} 
                
            </ul>
        </React.Fragment>

    );
}

export default NameList;