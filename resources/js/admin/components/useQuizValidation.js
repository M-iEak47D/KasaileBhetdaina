import React, {useState,useEffect} from "react";
import axios from "axios";
import validate from "../components/validateQuizQuestion";

export default function useQuizValidation(quiz, quiz_question_count, belongsToQuiz, setBelongsToQuiz) {
    const [assigned,setAssigned] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [errors, setErrors] = useState({});

    useEffect(()=>{
        const noErrors = Object.keys(errors).length === 0;
        if(noErrors){
            authenticate();
            setSubmitting(false);
        }
        else{
            setSubmitting(false);
        }
    },[errors]);

    async function authenticate() {
        if(assigned !== "") {
            await axios.post('/api/admin/quiz/add_remove_ques/' + quiz.id + '/' + assigned)
                .then(response => {
                    belongsToQuiz = response.data.belongsToQuiz;
                    setBelongsToQuiz(belongsToQuiz);
                    console.log(response.data.message);
                });
        }
        console.log('success');
    }
    function handleCheckboxClick(e) {
        const id=e.target.value;
        setAssigned(id);
        setSubmitting(true);
        const type=e.target.id;
        // console.log(type);
        const validate_status = validate(quiz, quiz_question_count, type);
        setErrors(validate_status);
    }


    return {assigned, handleCheckboxClick, errors, submitting};
}