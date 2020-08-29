import React, { useState } from 'react'
import {db} from "./firebase";
import firebase from "firebase";

const AddSkill= ()=> {

    const[skill, setSkill] = useState('')
    const[rating, setRating] = useState('')
    

    function Submit(e) {
        e.preventDefault()
        if(skill===null){
            
        }
        else{
            db.collection('data')
            .add({
                skill,
                rating,
                timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            })
            .then(()=>{
                setSkill('')
                setRating('')
            })
        }
    }
    return (
        <form onSubmit={Submit} >
            <h3>Add Your Skill</h3>
            <div>
                <label>Skill</label>
                <input type="text" value={skill} onChange={e=>setSkill(e.target.value)}/>
            </div>
            <div>
                <label>Rating</label>
                <input type="number" value={rating} max="10" min="1" onChange={e=>setRating(e.target.value)}/>
            </div>
      
            <input type="submit" value="Add Skill"/>
      </form>
    )
}

export default AddSkill;
