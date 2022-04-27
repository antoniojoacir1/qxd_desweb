const TeacherModel = require("../../models/teacher/TeacherModel");

let teachers = [
  { _id: 0, name: "Jefferson", university: "IFCE", degree: "Bacharelado"},
  { _id: 1, name: "Wladimir", university: "UFC", degree: "Graduação" },
  { _id: 2, name: "Aragão", university: "UECE", degree: "Graduação" },
];

let _id = 3;

class TeacherService {
  static create(data) {
    let teacher = new TeacherModel(
      _id++,
      data.name,
      data.university,
      data.degree
    );
    teachers.push(teacher);
    return teacher;
  }

  static update(_id, data) {
    for (let s of teachers) {
      if (s._id == _id) {
        s.name = data.name;
        s.university = data.university;
        s.degree = data.degree;
        return s;
      }
    }
    return null;
  }

  static delete(_id) {
    for (let i = 0; i < teachers.length; i++) {
      if (teachers[i]._id == _id) {
        teachers.splice(i, 1);
        return true;
      }
    }
    return s;
  }

  static retrieve(_id) {
    for (let i = 0; i < teachers.length; i++) {
      if (teachers[i]._id == _id) {
        return teachers[i];
      }
    }
    return {};
  }

  static list() {
    return teachers;
  }
}

module.exports = TeacherService;
