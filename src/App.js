import React ,{useEffect, useState}from 'react';
import './App.css';
import DataTable , { createTheme }from 'react-data-table-component';
import {db} from "./firebase";
import AddSkill from "./addSkill";

function App() {

  const[datas, setDatas] = useState([]);
  const columns = [
              {
              name: 'Skills',
              selector: 'skill',
              sortable: true,
              },
              {
              name: 'Rating(10)',
              selector: 'rating',
              sortable: true,
              right: true,
              },
  ];
  createTheme('solarized', {
    text: {
      primary: '#268bd2',
      secondary: '#2aa198',
    },
    background: {
      default: 'white',
    },
    context: {
      background: '#cb4b16',
      text: '#FFFFFF',
    },
    divider: {
      default: '#073642',
    },
    action: {
      button: 'rgba(0,0,0,.54)',
      hover: 'rgba(0,0,0,.08)',
      disabled: 'rgba(0,0,0,.12)',
    },
  });
  

  useEffect(()=>{
    db.collection('data').orderBy('timestamp','desc').onSnapshot(snapshot=>{
      setDatas(snapshot.docs.map(doc=>({
        id:doc.id,
        ...doc.data()
      })));
    })
    },[]);
      
    
  return (
    <div className="App">
        <DataTable
          title="Experience On Web"
          columns={columns}
          data={datas}
          theme="solarized"
        />
         <AddSkill/>
    </div>
  );
}

export default App;

 
