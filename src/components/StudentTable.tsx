import { Student } from "../utils/data";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from "@mui/material/TableContainer";
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useMemo } from "react";

interface Props {
  students: Student[]
}

export const StudentTable = ({ students }: Props) => {

    useEffect(() => {
      if(students.length === 5){
        alert("Max limit reached")
      }
    }, [students])

    const studentsWithScholarship = useMemo(() => {
      return students.map((s) => {
        let result = false;
        for(let i = 0; i <= 100000; i++) {
          Math.random() > 0.5
        }
        return { ...s, eligible: result};
      });
    }, []); 

    return (
        <TableContainer component={Paper} sx={{ width: 800 }}>
        <Table size="small" sx={{ border: 2 }}>
        <TableHead>
          <TableRow>
            <TableCell>Full Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Class</TableCell>
            <TableCell>Scholarship</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((item, index) => {
              return (
                <TableRow>
                  <TableCell>{item.fullName}</TableCell>
                  <TableCell>{item.age}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{item.class}</TableCell>
                  <TableCell>{studentsWithScholarship[index]?.eligible ? "Yes" : "No"}</TableCell>
                </TableRow>
              );
          })}
        </TableBody>
      </Table>
      </TableContainer>
    );
};