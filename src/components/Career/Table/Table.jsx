import React from "react";
import CareerData from "../CareerData";
import TableButton from "./tableButton/tableButton";

import "./Table.scss";

const CareerRow = () => {
  return (
    <div className="container">
      <table border={1}>
        <thead>
          <tr>
            <th>Position </th>
            <th>Deadline </th>
            <th>Contract type </th>
            <th>Job description </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Teaching Assistant (contract basis)</td>
            <td>31 May 22</td>
            <td>Full-time</td>
            <td>
              <TableButton title="VIEW" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CareerRow;

// <>
//   {CareerData.map((position, deadline, contractType, button, id) => {
//     return (
//       <tr>
//         <td className="td1" key={id}>
//           {position}
//         </td>
//         <td className="td2" key={id}>
//           {deadline}
//         </td>
//         <td className="td3" key={id}>
//           {contractType}
//         </td>
//         <td className="td4" key={id}>
//           {button}
//         </td>
//       </tr>
//     );
//   })}
// </>
