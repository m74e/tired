  import Createnewpro from "../createnewpro.jsx";
  import AddProject from "../addProject.jsx";
  const counterPath=()=> { 
    console.log("m")
    if (modalCount === 0) {
      return <Createnewpro/>;
    } else if (count === 1) {
      return    <AddProject/>;

  }}

  export default counterPath;