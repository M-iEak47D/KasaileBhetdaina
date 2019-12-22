import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import questions from "./question.json"

let start = false;
export default function Newquiz(props) {
    const allQuestion = questions.length;
    const localData = localStorage.getItem('initialValue');
    const [active, setActive] = useState([0]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(localData ? JSON.parse(localData) :0);
    const currentQuestion = useCurrentQuestion(currentQuestionIndex);
    const totalMarks = localStorage.getItem('score');
    const [Score, setScore] = useState(totalMarks ? JSON.parse(totalMarks):[]);
    const [SpecificMark, setSpecificMark] = useState([]);
    // console.log(active)

     function findelements(Index){
        var valueToFind = Index;
        var query = document.evaluate(`//*[dataid='${valueToFind}']`, document, null, XPathResult.ANY_TYPE, null);
        var elements = [], el;
        while(el = query.iterateNext()){
          // in your case you will filter it to not be the original node 
          // if(el !== original)
            el.classList.remove("active");
          }
        console.log(elements);
     }
     function handleChange(Correct,Index, activeId,e){
        // console.log(activeId)
        // findelements(Index);
        e.target.className += " active";
        setActive([activeId])
        console.log(active)
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
        localStorage.setItem('score', JSON.stringify(Score))   
    }

    const markCounter = useMarkCounter(Score)
     
    // console.log(markCounter);
    // totalMarks ? JSON.parse(totalMarks):

    const[Total, setTotal] = useState(markCounter);
    
    
    return (
        <div>
            <div className="quiz">
                <div className="quit-section">
                    <div className="quit">
                        <a href=""> <i className="fa fa-stop-circle"></i> Quit</a>
                    </div>
                </div>

                <div className="quiz-header">
                    <nav className="navbar navbar-expand-sm" style={{
                        background: "linear-gradient(45deg, #0be788, #09d6af)",
                        boxShadow: "0px 2px 4px #a1a4a4"
                    }}>

                        {/* Links               */}

                    </nav>
                    <div className="timer-container">
                        <div className="timer-wrapper">
                            <div className="time">
                                <span className="hour">02</span><span className="minute">:56</span><span
                                className="second">:34</span>
                            </div>
                        </div>
                    </div>
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
                                <div className="answer-wrapper"
                                    onClick={(e) => handleChange(currentQuestion.initialQuestion.answer[0].correct,
                                    currentQuestionIndex,
                                    currentQuestion.initialQuestion.answer[0].id,e)} dataid={currentQuestionIndex}>
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
                                <div className="answer-wrapper"
                                 onClick={(e) => handleChange(currentQuestion.initialQuestion.answer[1].correct,
                                 currentQuestionIndex,
                                 currentQuestion.initialQuestion.answer[1].id,e)} dataid={currentQuestionIndex}>
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
                                <div className="answer-wrapper"
                                onClick={(e) => handleChange(currentQuestion.initialQuestion.answer[2].correct,
                                currentQuestionIndex,
                                currentQuestion.initialQuestion.answer[2].id,e)} dataid={currentQuestionIndex}>
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
                                <div className="answer-wrapper" onClick={(e) => handleChange(currentQuestion.initialQuestion.answer[2].correct,
                                    currentQuestionIndex,
                                    currentQuestion.initialQuestion.answer[3].id,e)} dataid={currentQuestionIndex}>
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
                                    <div className="next-btn" onClick={()=> FinishQuiz}>
                                        <span> Finish </span> <i className="fa fa-arrow-circle-right"></i>
                                    </div>
                            }

                        </div>
                    </div>
                </div>
            </div>
            
            <div className="progress-container">
                <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width: "75%"}} aria-valuenow="75"
                         aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        </div>
    );

}

function useCurrentQuestion(initialValue) {
    const [initialQuestion, setQuestions] = useState(questions[initialValue]);
    useEffect(() => {
        localStorage.setItem('initialValue', JSON.stringify(initialValue))
        setQuestions(questions[initialValue]);
    }, [initialValue]);
    // const localData = localStorage.getItem('initialValue')
    return {
        initialValue,
        initialQuestion
    }
}
function useMarkCounter(myMarks){
    const Total = myMarks.reduce((a,b) => a + b, 0)
    // console.log(Total);
    return Total; 
}



