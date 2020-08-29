import React ,{useEffect, useState}from 'react';
import './App.css';
import DataTable from 'react-data-table-component';
import {db} from "./firebase";

function App() {

  const[datas, setData] = useState([]);
  const columns = [
              {
              name: 'Skills',
              selector: 'skills',
              sortable: true,
              },
              {
              name: 'Rating',
              selector: 'rating',
              sortable: true,
              right: true,
              },
  ];

  useEffect(()=>{
    db.collection('data').onSnapshot(snapshot=>{
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
    </div>
  );
}

export default App;

 
