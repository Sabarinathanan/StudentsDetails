import React, { useContext, useState } from "react";
import StudentsList from "./components/StudentsList/StudentsList";
import StudentsInputs from './components/StudentsInputs/StudentsInputs'

const App = () => {
  const [showList,setShowList]=useState(<StudentsList/>)

  return (
    <div className="App">
        {
          showList
          ?<StudentsList setShowList={setShowList}/>
          :<StudentsInputs setShowList={setShowList}/>
        }
    </div>
  );
};

export default App;
