import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import Timer from "./Timer"
import questions from "./question.json"
import DisplayMark from "./DisplayMarks";
import {useHistory, useLocation} from "react-router-dom"


export default function QuizResult(props){

    const history = useHistory();
    const location = useLocation()
   
    const myScore = props.score;
    const myActive = props.active;
    const myTotal = props.total;
    console.log(myActive)
    localStorage.clear();
    const questionMap = [];
    const allQuestion = questions.length;
    
    for(var i=0; i <= allQuestion-1; i++){
        questionMap.push(i);
    }     
    
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const currentQuestion = useCurrentQuestion(currentQuestionIndex);
    const [active, setActive] = useState(myActive);

    const place = {
        pathname:'/learn'
    }

    useEffect(() => {
        window.onpopstate = e =>{
            history.replace(place);
        }
        if(history.action == "POP"){
            history.replace(place)
        }
    }, [history])



    function is_active(qid,aid){
        var value = false;
        active.map((active)=>{
            if(active.questionId == qid && active.answerId == aid  ){  
                value = true ; 
            }
        });
        return value;
    }
    return(
          <div className="quiz">
                <div className="quiz-header">
                    <nav className="navbar navbar-expand-sm" style={{
                        background: "linear-gradient(45deg, #0be788, #09d6af)",
                        boxShadow: "0px 2px 4px #a1a4a4"
                    }}>
                    </nav>
                    <DisplayMark fullMark={allQuestion} total={myTotal} />
                </div>
                {questionMap.map((question,index)=>
                <div className="container test-section">
                    <div className="question-container">

                        <div className="question-title">
                            <span className="question-number">{index + 1}.</span>
                            {questions[index].name}
                        </div>
                    </div>
                    <div className="answer-container">
                        <div className="row">
                            <div className="col-md-6 col-sm-6">
                                <div className={"answer-wrapper" +' '+ (is_active(index,currentQuestion.initialQuestion.answer[0].id) ? 
                                    (myScore[index] == 1 ? "active" : "wrong"): "")+ ' ' + (myScore[index] == 0 ? (questions[index].answer[0].correct == 1 ? "active" : "") : "")
                                    + ' ' + (myScore[index] == null ? (questions[index].answer[0].correct == 1 ? "wrong" : "") : ""  )}>
                                    <div className="option-number">
                                        A
                                    </div>
                                    <div className="option" >
                                        {questions[index].answer[0].answer} 
                                    </div>
                                    <div className="option-tick">
                                        <i className="fa fa-check"></i>
                                    </div>
                                    <div className="option-wrong">
                                        <i className="fa fa-times"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6">
                                <div className={"answer-wrapper" +' '+ (is_active(index,currentQuestion.initialQuestion.answer[1].id) ? 
                                    (myScore[index] == 1 ? "active" : "wrong"): "")+ ' ' + (myScore[index] == 0 ? (questions[index].answer[1].correct == 1 ? "active" : "") : "")
                                    + ' ' + (myScore[index] == null ? (questions[index].answer[1].correct == 1 ? "wrong" : "") : "")
                                    }
                                 >
                                    <div className="option-number" >
                                        B
                                    </div>
                                    <div className="option">
                                        {questions[index].answer[1].answer}
                                    </div>
                                    <div className="option-tick">
                                        <i className="fa fa-check"></i>
                                    </div>
                                    <div className="option-wrong">
                                        <i className="fa fa-times"></i>
                                    </div>
                                </div>  
                            </div>
                            <div className="col-md-6 col-sm-6">
                                <div className={"answer-wrapper" +' '+ (is_active(index,currentQuestion.initialQuestion.answer[2].id) ? 
                                    (myScore[index] == 1 ? "active" : "wrong"): "")+ ' ' + (myScore[index] == 0 ? (questions[index].answer[2].correct == 1 ? "active" : "") : "")
                                    +' '+(myScore[index] == null ? (questions[index].answer[2].correct == 1 ? "wrong" : "") : "")}>
                                    <div className="option-number">
                                        C
                                    </div>
                                    <div className="option">
                                        {questions[index].answer[2].answer}

                                    </div>
                                    <div className="option-tick">
                                        <i className="fa fa-check"></i>
                                    </div>
                                    <div className="option-wrong">
                                        <i className="fa fa-times"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6">
                                <div className={"answer-wrapper" +' '+ (is_active(index,currentQuestion.initialQuestion.answer[3].id) ? 
                                    (myScore[index] == 1  ? "active" : "wrong"): "")+ ' '+ (myScore[index] == 0 ? (questions[index].answer[3].correct == 1 ? "active" : "") : "")
                                    +' '+(myScore[index] == null ? (questions[index].answer[3].correct == 1 ? "wrong" : "") : "")}>
                                    <div className="option-number">
                                        D
                                    </div>
                                    <div className="option">
                                        {questions[index].answer[3].answer}
                                    </div>
                                    <div className="option-tick">
                                        <i className="fa fa-check"></i>
                                    </div>
                                    <div className="option-wrong">
                                        <i className="fa fa-times"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                )}
            </div>
    )
}

function useCurrentQuestion(initialValue) {
    const [initialQuestion, setQuestions] = useState(questions[initialValue]);
    useEffect(() => {
        setQuestions(questions[initialValue]);
    }, [initialValue]);
    return {
        initialValue,
        initialQuestion
    }
}