import {useState } from "react";
import { AddStudent } from "./components/AddStudent";
import { StudentTable } from "./components/StudentTable";
import { data } from "./utils/data";

function App() {

  const [students, setStudents] = useState(data)

  return (
    <>
      <h1>Students Form</h1>
      <StudentTable students={students} />
      <AddStudent students={students} setStudents={setStudents} />
    </>
  );
}

export default App
