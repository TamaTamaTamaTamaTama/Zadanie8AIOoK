import { useState, useEffect } from 'react';
import { StudentClass} from './types/Student';

type StudentPropsType={
    student:StudentClass;
    hideForm: () => void;
  }

export default function EditStudent({student, hideForm}: StudentPropsType): React.ReactElement {
    const [editing_student, changeStudentData]=useState({
        name: student.Name, 
        surname: student.Surname, 
        index_nr: student.Index_nr, 
        dataUrodzenia: student.dataUrodzenia, 
        adres: student.adres, 
        grupa: student.grupa, 
        stypendium: student.stypendium,
        marks: student.marks
      });
      const [backup_student, RestoreStudentData]=useState({
        name: student.Name, 
        surname: student.Surname, 
        index_nr: student.Index_nr, 
        dataUrodzenia: student.dataUrodzenia, 
        adres: student.adres, 
        grupa: student.grupa, 
        stypendium: student.stypendium,
        marks: student.marks
      });
    
      useEffect(() => 
        { 
        changeStudentData({ 
        name: student.Name,
        surname: student.Surname,
        index_nr: student.Index_nr,
        dataUrodzenia: student.dataUrodzenia,
        adres: student.adres, grupa: student.grupa,
        stypendium: student.stypendium,
        marks: student.marks }); 

        RestoreStudentData({ name: student.Name,
        surname: student.Surname,
        index_nr: student.Index_nr,
        dataUrodzenia: student.dataUrodzenia,
        adres: student.adres,
        grupa: student.grupa,
        stypendium: student.stypendium,
        marks: student.marks }); 
        },
        [student]);

      const changeValue=(e:React.FormEvent<HTMLInputElement>):void =>{
        const Value = e.currentTarget.value;
        const name=e.currentTarget.name;
        let snapshot = {... editing_student}
     switch(name) 
      {
        case 'name':
            snapshot.name=Value;
            break;

        case 'surname':
            snapshot.surname=Value;
            break;

        case 'index':
             let numberifiedValue: number = +Value
            snapshot.index_nr=numberifiedValue;
            break;
        case 'adres':
            snapshot.adres=Value;
            break;

         case 'birthdate':
            snapshot.dataUrodzenia= new Date(Value)
            break;
      }  
      changeStudentData(snapshot);
    }

    const confirm=():void=>{
    student.Name = editing_student.name;
    student.Surname = editing_student.surname;
    student.Index_nr = editing_student.index_nr;
    student.adres = editing_student.adres;
    student.grupa = editing_student.grupa;
    student.stypendium = editing_student.stypendium;
    student.marks = editing_student.marks;
    student.dataUrodzenia = editing_student.dataUrodzenia;
    hideForm();
    }

    const rewind=():void=>{
     changeStudentData(backup_student);
     hideForm();
    } 

    return (
    
        <div>
        Name in edit mode: <input type='text' name="name" value= {editing_student.name} onChange={(e)=>changeValue(e)}/>
        Surname in edit mode: <input type='text' name="surname" value= {editing_student.surname} onChange={(e)=>changeValue(e)}/>
        Index in edit mode: <input type='number' name="index" value= {editing_student.index_nr} onChange={(e)=>changeValue(e)}/>
        Adress in edit mode: <input type='string' name="adres" value= {editing_student.adres} onChange={(e)=>changeValue(e)}/>
        <br></br>
        Date of birth in edit mode: <input type='date' name="birthdate" onChange={(e)=>changeValue(e)}/>
        <button onClick={()=>confirm()}>Confirm edit</button>
        <button onClick={()=>rewind()}>Cancel edit</button>
      </div>
    
    
    )
}