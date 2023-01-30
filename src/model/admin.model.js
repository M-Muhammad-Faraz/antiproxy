import axios from "axios";
export class admin {
  constructor() {}
  teacherAction(obj) {
    return axios.post("http://localhost:8000/teacher-action", obj, {
      headers: { "content-type": "application/json" },
    });
  }
  addStudent(obj) {
    return axios.post("http://localhost:8000/add-new-student", obj, {
      headers: { "content-type": "application/json" },
    });
  }
}
