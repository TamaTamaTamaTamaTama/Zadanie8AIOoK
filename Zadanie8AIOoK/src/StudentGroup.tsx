import PropTypes from "prop-types";

type StudentPropType={
    student:string
}

//export default function Student({student}:{student: StudentClass}) {
    export default function StudentGroup({student}:StudentPropType) : React.ReactElement{
        
  
  return (
    
    <>
    
     Group:   {student}  &nbsp; 
    </>
  );
}


StudentGroup.propTypes = {
    student: PropTypes.string
}