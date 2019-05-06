import React from 'react';

// LAter to get from backend
let divers = [{id:1, firstName: "Joe", lastName: "Smith"},{id:2, firstName: "Mike", lastName: "Johnson"}]
const listDivers = divers.map((diver)=>
  <li>{diver.firstName} {diver.lastName} </li>)


class DiversList extends React.Component {
  render(){
  return (
    <div className="diverListSection">
        <p> Diver List</p>

          <ul>
            {listDivers}
          </ul>

    </div>
  )};
}

export default DiversList;
