import React from "react";

export default function validate(quiz, quiz_question_count, type) {
    const errors ={};

    if(type === "add_ques") {
        if (quiz.total_question <= quiz_question_count) {
            errors.limit = "Maximum Question Limit For Quiz Reached";
        }
    }

    return errors;
}