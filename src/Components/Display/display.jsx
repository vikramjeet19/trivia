import React from 'react';
import './display.css';
import { toast } from 'react-toastify';
import {decode} from 'he'

const display = ({question:{incorrect_answers,correct_answer,question},incrementHandler}) => {
    let handler = (e) => {
    
        if (e === correct_answer) {
            toast.success('Right Answer',{position:"top-right",autoClose :1500});
            incrementHandler("correct");
        }
        if (e !== correct_answer) {
            toast.error('Wrong Answer!',{position:"top-right",autoClose:1500});
           return incrementHandler();       
        }
    }
    const renderOptions =  incorrect_answers.map((key, i) =>
        <div className="col-5 center" key ={i}>
            <button className='button' onClick={() => handler(key, i)}>{decode(key)}</button>

        </div>
    );


    return (<div className='main-section'>
        <div className='question'>
            <h2 className="center">{decode(question)}</h2>
            <div className="row">
               {renderOptions}
            </div>
        </div>
    </div>)
}
export default display;