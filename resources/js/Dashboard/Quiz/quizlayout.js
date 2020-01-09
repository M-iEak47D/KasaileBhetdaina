import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import questions from "./question.json";
import {useHistory, Link, Route, Switch, useRouteMatch, useLocation} from 'react-router-dom';
import Timer from "./Timer"
import Axios from "axios";
import QuizResult from "./QuizResult"


let start = false;
export default function Newquiz(props) {

    let {path, url} = useRouteMatch();
    const allQuestion = questions.length;
    const localData = localStorage.getItem('initialValue');
    const localActive = localStorage.getItem('active')
    const [active, setActive] = useState(localActive ? JSON.parse(localActive):[]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(localData ? JSON.parse(localData) :0);
    const currentQuestion = useCurrentQuestion(currentQuestionIndex);
    const totalMarks = localStorage.getItem('score');
    const [Score, setScore] = useState(totalMarks ? JSON.parse(totalMarks):[]);
    const [SpecificMark, setSpecificMark] = useState([]);
    // console.log(active)
    

     function handleChange(Correct,Index, activeId){
        active.filter(({...datas})=>(
            active[Index] = {questionId: Index,answerId: activeId}
        ))    
       
             
        SpecificMark.filter(({...datas})=>(
                  Score[Index] = Correct
            ))
        setSpecificMark([
                ...SpecificMark,
            {
                index: Index,
                correct: Correct,
            }
        ]);
        
        Score[Index] = Correct
        active[Index] = {questionId: Index,answerId: activeId}
        localStorage.setItem('active',JSON.stringify(active))
        localStorage.setItem('score', JSON.stringify(Score))   
    }
   
        

    const markCounter = useMarkCounter(Score)
    // console.log(markCounter)
     


    // const[Total, setTotal] = useState({markCounter});
    // console.log(Total);
    
    function is_active(qid,aid){
        var value = false;
        active.map((active)=>{
            
        if(active == null){
            return value;
        }
            else if(active.questionId == qid && active.answerId == aid  ){  
                value = true ; 
            }
        });
        return value;
    }    
    function openQuiz() {
        
        document.getElementById("quizSideNav").style.width = "250px";
       
      }
      
      /* Set the width of the side navigation to 0 */
      function closeQuiz() {
        document.getElementById("quizSideNav").style.width = "0";
       
      }
      let History = useHistory();
    return (
        <React.Fragment>
                <Route exact path={path}>
        <div>
        <span onClick = {openQuiz} id="quizOpen"><i class="fas fa-th-large"></i></span>
        <div id="quizSideNav" className="quizsidenav">
<div className="closebtn" onClick={closeQuiz}>&times;</div>
    <ul>
        
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
        <li>11</li>
        <li>12</li>
        <li>13</li>
        <li>14</li>
        <li>15</li>
        <li>16</li>
        <li>17</li>
        <li>18</li>
        
    
    </ul>
   
</div>
            <div className="quiz">
                <div className="quit-section">
                    <div className="quit">
                        <a href="" data-toggle="modal" data-target="#quitModal"> <i className="fa fa-stop-circle"></i> Quit</a>
                    </div>
                </div>
                <div className="modal" id="quitModal">
  <div className="modal-dialog">
    <div className="modal-content">

     
      <div className="modal-body">
      <button type="button" className="close" data-dismiss="modal">&times;</button>
        <div className="title">
            Really, wanna quit it?
        </div>
        <div className="button-container">
            <a href="" onClick={History.goBack} data-dismiss="modal" className="yes">Yes</a> 
            <a href="" className="no" data-dismiss="modal" >No </a>
        </div>    
      </div>

    
     

    </div>
  </div>
</div>

                <div className="quiz-header">
                    <nav className="navbar navbar-expand-sm" style={{
                        background: "linear-gradient(45deg, #0be788, #09d6af)",
                        boxShadow: "0px 2px 4px #a1a4a4"
                    }}>

                        {/* Links               */}
                    
                    </nav>
                    <Timer />
                </div>

                {/* <!--  <div id="main"> -->       */}
                <div className="container test-section">
                    <div className="question-container">

                        <div className="question-title">
                            <span className="question-number">{currentQuestionIndex + 1}.</span>
                            {currentQuestion.initialQuestion.name}
                        </div>
                    </div>
                    <div className="answer-container">
                        <div className="row">
                            <div className="col-md-6 col-sm-6">
                                <div className={"answer-wrapper" +' '+ (is_active(currentQuestionIndex,currentQuestion.initialQuestion.answer[0].id) ? "active": "")}
                                    onClick={() => handleChange(currentQuestion.initialQuestion.answer[0].correct,
                                    currentQuestionIndex,
                                    currentQuestion.initialQuestion.answer[0].id)}>
                                    <div className="option-number">
                                        A
                                    </div>
                                    <div className="option" >
                                        {currentQuestion.initialQuestion.answer[0].answer}
                                    </div>
                                    <div className="option-tick">
                                        <i className="fa fa-check"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6">
                                <div className={"answer-wrapper" +' '+ (is_active(currentQuestionIndex,currentQuestion.initialQuestion.answer[1].id) ? "active": "")}
                                 onClick={() => handleChange(currentQuestion.initialQuestion.answer[1].correct,
                                 currentQuestionIndex,
                                 currentQuestion.initialQuestion.answer[1].id)}>
                                    <div className="option-number" >
                                        B
                                    </div>
                                    <div className="option">
                                        {currentQuestion.initialQuestion.answer[1].answer}
                                    </div>
                                    <div className="option-tick">
                                        <i className="fa fa-check"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6">
                                <div className={"answer-wrapper" +' '+ (is_active(currentQuestionIndex,currentQuestion.initialQuestion.answer[2].id) ? "active": "")}
                                onClick={() => handleChange(currentQuestion.initialQuestion.answer[2].correct,
                                currentQuestionIndex,
                                currentQuestion.initialQuestion.answer[2].id)}>
                                    <div className="option-number">
                                        C
                                    </div>
                                    <div className="option">
                                        {currentQuestion.initialQuestion.answer[2].answer}

                                    </div>
                                    <div className="option-tick">
                                        <i className="fa fa-check"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6">
                            <div className={"answer-wrapper" +' '+ (is_active(currentQuestionIndex,currentQuestion.initialQuestion.answer[3].id) ? "active": "")}
                                onClick={() => handleChange(currentQuestion.initialQuestion.answer[3].correct,
                                currentQuestionIndex,
                                currentQuestion.initialQuestion.answer[3].id)}>
                                    <div className="option-number">
                                        D
                                    </div>
                                    <div className="option">
                                        {currentQuestion.initialQuestion.answer[3].answer}
                                    </div>
                                    <div className="option-tick">
                                        <i className="fa fa-check"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="button-section">
                    <div className="container">
                        <div className="button-row justify-content-between">

                            {
                                currentQuestionIndex > 0 ?
                                    <div className="prev-btn"
                                         onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}>
                                        <i className="fa fa-arrow-circle-left"></i>
                                        <span>Previous</span>
                                    </div>
                                    :
                                    <div className="prev-btn" style={{display: "none"}}>
                                        <i className="fa fa-arrow-circle-left"></i>
                                        <span>Previous</span>
                                    </div>
                            }
                            {
                                currentQuestionIndex + 1 != allQuestion ?
                                    <div className="next-btn"
                                         onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}>
                                        <span> Next</span> <i className="fa fa-arrow-circle-right"></i>
                                    </div> :
                                    <Link to={`${url}/result`}>
                                    <div className="next-btn">
                                        <span> Finish </span> <i className="fa fa-arrow-circle-right"></i>
                                    </div>
                                    </Link>
                            }

                        </div>
                    </div>
                </div>
            </div>
            
            <div className="progress-container">
                <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width: ((currentQuestionIndex/allQuestion)*100)+"%"}} aria-valuenow="75"
                         aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        </div>
</Route>
        <Route path={`${path}/result`} >
        <QuizResult score={Score} active={active} total={markCounter}/>
        </Route>  
    </React.Fragment>
    );

}

function useCurrentQuestion(initialValue) {
    const [initialQuestion, setQuestions] = useState(questions[initialValue]);
    useEffect(() => {
        localStorage.setItem('initialValue', JSON.stringify(initialValue))
        setQuestions(questions[initialValue]);
    }, [initialValue]);
    return {
        initialValue,
        initialQuestion
    }
}
function useMarkCounter(myMarks){
    const Total = myMarks.reduce((a,b) => a + b, 0)
    return Total; 
}
