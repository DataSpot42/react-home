import '../pages/popup.css'
import React from 'react';
import { useParams } from "react-router-dom"
import Popup from 'reactjs-popup';
import AssignDocs from '../components/assignDocs';

const Assignments = () => {
    const { id } = useParams()
    console.log(`./docs/${id}`)
    return (
        <div className="full">
        <div className="navSpace"></div>
        <object data={`../docs/${id}`} type="application/pdf" width="100%" height="100%">
        <p className="navText">Unable to display PDF file. <a href={`../docs/${id}`}>Download</a> instead.</p>
            </object>
  </div>
    )   
}
export default Assignments