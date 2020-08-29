import React ,{useEffect, useState}from 'react';
import './App.css';
import DataTable from 'react-data-table-component';
import {db} from "./firebase";
import AddSkill from "./addSkill";

function App() {

  const[datas, setData] = useState([]);
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

  useEffect(()=>{
    db.collection('data').orderBy('timestamp','desc').onSnapshot(snapshot=>{
      setData(snapshot.docs.map(doc=>({
        id:doc.id,
        ...doc.data()
      })));
    })
    },[]);
    console.log(datas);
  return (
    <div className="App">
      <DataTable
         title="Experience On Web"
         columns={columns}
         data={datas}
      />
      <AddSkill/>
    </div>
  );
}

export default App;

 
