import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const TeacherTableRow = (props) => {
  const { _id, name, university, degree } = props.teacher;

  function deleteTeacher() {
    if (window.confirm(`Deseja excluir o elemento de ID: ${_id}?`)) {
      axios
        .delete(`http://localhost:3001/crud/teachers/delete/${_id}`)
        .then((response) => props.deleteTeacherById(_id))
        .catch((error) => console.log(error));
    }
  }

  return (
    <tr>
      <td>{_id}</td>
      <td>{name}</td>
      <td>{university}</td>
      <td>{degree}</td>
      <td style={{ textAlign: "center" }}>
        <Link to={`/editProfessor/${_id}`} className="btn btn-primary">
          Editar
        </Link>
      </td>
      <td style={{ textAlign: "center" }}>
        <button className="btn btn-danger" onClick={() => deleteTeacher()}>
          Apagar
        </button>
      </td>
    </tr>
  );
};

export default TeacherTableRow;
