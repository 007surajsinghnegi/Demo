import React, { useState } from 'react'
import {db} from "./firebase";
import firebase from "firebase";
import './addSkill.css';

const AddSkill= ()=> {

    const[skill, setSkill] = useState('')
    const[rating, setRating] = useState('')
    

    function Submit(e) {
        e.preventDefault()
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
    return (
        <form onSubmit={Submit} className="form">
            <h3>Add Your Skill</h3>
            <div className="form__skill">
                <label>Skill</label>
                <input type="text" value={skill} onChange={e=>setSkill(e.target.value)}/>
            </div>
            <div className="form__rating">
                <label>Rating</label>
                <input type="number" value={rating} max="10" min="1" onChange={e=>setRating(e.target.value)}/>
            </div>
      
            <input type="submit" value="Add Skill"/>
      </form>
    )
}

export default AddSkill;
