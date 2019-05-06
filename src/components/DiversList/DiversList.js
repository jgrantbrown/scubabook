import React from 'react';
import { Link} from 'react-router-dom';

// LAter to get from backend and link to details of specfice diver profile
let divers = [{id:1, firstName: "Joe", lastName: "Smith"},{id:2, firstName: "Mike", lastName: "Johnson"}]
const listDivers = divers.map((diver)=>
  <li>{diver.firstName} {diver.lastName} <Link to="/profiles">Details</Link></li>
)


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
