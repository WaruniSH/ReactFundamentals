import React, {useState, useEffect} from 'react';
import NameListItem from './NameListItem';



function NameList(){
  const [loadData, setLoadData] = useState(new Date());
  console.log("loadData",loadData)
    const [nameList, setNameList] = useState(
      [
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
    },
  
    ]);

    useEffect(() => {
      fetch("https://randomuser.me/api")
      .then((response) => {
        return response.json();

      })
      .then((responseData) => {
      setNameList((nameList) => [...nameList, responseData.results[0]]);
      });
    }, [loadData]);
    
const nameListComponent = () => {
  return nameList.map(aName => {
      return(
        <NameListItem 
        key={aName.id}
        name={aName.name.first + " " + aName.name.last}
        city={aName.location.city}
        email={aName.email}
        birthday={aName.dob.date}
        avatar={aName.picture.medium}
        />
      );
    });
  };

  const addUserHandler = () => {
    setLoadData(new Date());
    console.log("executing add user");
 };
  

    return(
        <React.Fragment>
    
           <div className='container mt-4'>
            <button className='btn btn-primary mb-2' onClick ={addUserHandler}>Add Name</button>
           <ul className='list-group'>{nameListComponent()} </ul>
           </div>
            
        </React.Fragment>

    );
}

export default NameList;