import React from "react";

export default function validateQuestion(values) {

    const errors = {};

    //question errors
    if (!values.question) {
        errors.question = '*Required';
    }
    // else if (
    //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.question)
    // ) {
    //     errors.question = 'Invalid email address';
    // }

    //marks errors
    if (!values.marks) {
        errors.marks = '*Required';
    } else if (values.marks < 0) {
        errors.marks = '*Value must be more than 0';
    }

    if(!values.answerA || !values.answerB || !values.answerC || !values.answerD){
        errors.answer = "*All Options Must Be Filled";
    }

    if(!values.correct){
        errors.importance = "*Must Select a Correct Option";
    }

    if(!values.chapter_id || values.chapter_id === "null"){
        errors.chapter_id = "*Please Assign Chapter to Question"
    }

    return errors;

}