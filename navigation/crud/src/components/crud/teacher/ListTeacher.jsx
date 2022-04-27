import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import TeacherTableRow from "./TeacherTableRow";

function ListTeacher() {
  const [teacher, setTeacher] = useState([]);
  //const [flag, setFlag] = useState(false)
  useEffect(() => {
    axios
      .get("http://localhost:3001/crud/teachers/list")
      .then((res) => {
        setTeacher(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function deleteTeacherById(id) {
    let teachersTemp = teacher;
    for (let i = 0; i < teachersTemp.length; i++) {
      if (teachersTemp[i].id === id) {
        //console.log("1")
        teachersTemp.splice(i, 1);
      }
    }
    setTeacher([...teachersTemp]); //deve-se criar um outro array para disparar o re-render
    //setFlag(!flag)
  }

  function generateTable() {
    if (!teacher) return;
    return teacher.map((teacher, i) => {
      return (
        <TeacherTableRow
          teacher={teacher}
          key={i}
          deleteTeacherById={deleteTeacherById}
        />
      );
    });
  }

  return (
    <>
      <main>
        <h2>Listar Professores</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Universidade</th>
              <th>Titulação</th>
              <th colSpan={2} style={{ textAlign: "center" }}></th>
            </tr>
          </thead>
          <tbody>{generateTable()}</tbody>
        </table>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default ListTeacher;
