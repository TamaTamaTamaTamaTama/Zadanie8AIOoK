import { MouseEventHandler, useState } from 'react';
import Student from './Student';
import { StudentClass, StudentType } from './types/Student';
import AddStudent from './AddStudent';
import EditStudent from './EditStudent';
import StudentName from './StudentName';
import StudentSurname from './StudentSurname'; 
import StudentIndex from './StudentIndex';
import StudentAdres from './StudentAdres';
import StudentDate from './StudentDate';
import StudentGroup from './StudentGroup';
import StudentScholarship from './StudentScholarship';
import StudentMarks from './StudentMarks';
export default function Students() {
  const listTitle = 'Students list';
  const [studentList,updateList]=useState([
    new StudentClass('Ala', 'Makota', 123485, new Date('2000-01-21')),
    new StudentClass('Jan', 'Kowlaski', 2345, new Date('1999-10-23')),
    new StudentClass('Adrian', 'Duda', 156789, new Date('2001-04-01'))
  ]);
  const [showAddForm,changeValue]=useState(false);
  const [showEditForm, changeEditVisibility]=useState(false);
  const [selectedStudent, setSelectedStudent] = useState<StudentClass | null>(null);
  const addNewStudent=(student:StudentClass)=>{
    changeValue(false)
    console.log("add fn invoked")
    //studentList.push(student);
    let students=[...studentList];
    students.push(student)
    updateList(students)
  }

   const showform = (targetstudent:StudentClass): void => {
        setSelectedStudent(targetstudent)
        changeEditVisibility(true)
    };

    const hideEditForm = (): void => {
      changeEditVisibility(false);
    };

  return (
    <>
      {listTitle}
      {studentList.length>0 &&
      <ul>
      {studentList.map((el) => {return <li key={el.Index_nr}>
        <StudentName student= {el.Name} /> 
        <StudentSurname student={el.Surname} /> 
        <StudentIndex student={el.Index_nr} /> 
        <StudentAdres student={el.adres} /> 
        <StudentGroup student={el.grupa} /> 
        <StudentScholarship student={el.stypendium} /> 
        <StudentMarks student={el.marks} /> 
        <StudentDate student={el.dataUrodzenia} /> 
        <button onClick={()=>showform(el)}>Edit student</button></li>
})}

      </ul>}
      {studentList.length===0 && <p>No students stored</p>}
      {!showAddForm &&
      <button onClick={()=>changeValue(true)}>Add student</button>
      }
{showAddForm && <AddStudent addFn={addNewStudent}/>}
   
    {showEditForm && selectedStudent !== null && (
      <EditStudent student = {selectedStudent} hideForm= {hideEditForm} />
    )
    
    }
       </>
  );

}
