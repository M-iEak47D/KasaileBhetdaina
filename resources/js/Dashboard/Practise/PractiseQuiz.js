import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import {useHistory, Link, Route, Switch, useRouteMatch, useLocation} from 'react-router-dom';
import Practise from "./Practise"
import Axios from "axios";
import { useAuth } from "../../Context/Auth";
import Timer from "../Quiz/Timer";
import PractiseResult from './PractiseResult';



let start = false;
export default function Newquiz(props) {

    let {path, url, params} = useRouteMatch();
    let {Authtoken} = useAuth();

    const [questions, setGetQuestion] = useState([])
    const [quizLength, setQuizLength] = useState(0)
    const [ResultResponse, setResultResponse] = useState([])
    const [Finish, setFinish] = useState(false)
    const getUrl = 'http://noname.hellonep.com/api/practise/'+params.chapterId 
    let history = useHistory();
    const localActive = localStorage.getItem('active')
    const [active, setActive] = useState(localActive ? JSON.parse(localActive):[]);

    useEffect(() => {
        if(params.class_id != Authtoken.class_id ){
            history.push({
                pathname: '/practise'
            })
        }
        let source = Axios.CancelToken.source();

        const loadData = async() => {
            try{
                const response = await Axios.get(getUrl, {
                    cancelToken: source.token,
                   
                });
                setGetQuestion(response.data.data);
                setQuizLength(response.data.data.length);
                if(!localStorage.getItem('active')){
                for(let i=0; i<response.data.data.length; i++){
                    active.push(null);
                }
                 localStorage.setItem('active',JSON.stringify(active))
                 setActive(active)
                }

            } catch (error) {
                if(Axios.isCancel(error)){
                    console.log(error)
                }else{
                    throw error;
                }
            }
    };
    loadData();
    return () =>{
        source.cancel()
    };

    }, [getUrl])

    const allQuestion = questions.length;
    const localData = localStorage.getItem('initialValue');
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(localData ? JSON.parse(localData) :0);

    const currentQuestion = useCurrentQuestion(currentQuestionIndex, questions, quizLength);
    
    const totalMarks = localStorage.getItem('score');
    const [Score, setScore] = useState(totalMarks ? JSON.parse(totalMarks):[]);
    const [SpecificMark, setSpecificMark] = useState([]);
    

     function handleChange(Correct,Index, activeId){
        active.filter(({...datas})=>(
            active[Index] = {questionId: currentQuestion.initialQuestion.id,answerId: activeId, indexId: Index}
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
        active[Index] = {questionId: currentQuestion.initialQuestion.id,answerId: activeId, indexId: Index}
        localStorage.setItem('active',JSON.stringify(active))
        localStorage.setItem('score', JSON.stringify(Score))   
    }
    

        

    const markCounter = useMarkCounter(Score)
         
    function is_active(qid,aid){
        var value = false;
        active.map((active)=>{
            
        if(active == null){
            return value;
        }
            else if(active.indexId == qid && active.answerId == aid  ){  
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

      const submitPractise = () =>{
        console.log("apple")  
        // e.preventDefault();
        const PractiseData = 
            JSON.parse(localStorage.getItem('active'))
        PractiseData.filter(({...datas}, index)=>
            {if(PractiseData[index] == null){
                PractiseData[index] = {
                    questionId: questions[index].id,
                    answerId: null
                };
             }
            }
        )
        axios({
            method: 'post',
            url: 'http://noname.hellonep.com/api/practise/store',
            data: {
                user_id: Authtoken.user_id,
                practise: PractiseData            
            }
        }).then(
            response => {
                if(response.data.status === "success"){
                 setResultResponse(response.data.data)
                 setFinish(true)
                }
            }
        ) 
    }

    useEffect(() => {
        if(Finish){
        history.push({
            pathname: url+'/result',
            state: ResultResponse
        })
    }
    }, [ResultResponse, Finish])

    const items = []
    let QuestionPosition = JSON.parse(totalMarks)

    for(let i = 1; i <= quizLength; i++){
        items.push(<li key={i} onClick={() => JumpQuestion(i)}
                    className={(QuestionPosition != null ? ((QuestionPosition[i-1]) === null ? "wrong" : "active") : "")}>
            {i}</li>)
    }

    const JumpQuestion = (i) => {
        setCurrentQuestionIndex(i-1)
    }
        

    return (
        <React.Fragment>
                <Route exact path={path}>
        <div>
        <span onClick = {openQuiz} id="quizOpen"><i class="fas fa-th-large"></i></span>
        <div id="quizSideNav" className="quizsidenav">
<div className="closebtn" onClick={closeQuiz}>&times;</div>
    <ul>
        {items}
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
                    </nav>
                    <Timer url={url} />
                </div>
                
                { questions.length > 0 ?
                <>
                <div className="container test-section">
                    <div className="question-container">
                        <div className="question-title">
                            <span className="question-number">{currentQuestionIndex + 1}.</span>
                            {currentQuestion.initialQuestion && currentQuestion.initialQuestion.name}
                        </div>
                    </div>
                    <div className="answer-container">
                        {currentQuestion.initialQuestion &&
                        <div className="row">
                            <div className="col-md-6 col-sm-6">
                                <div className={"answer-wrapper" +' '+ (is_active(currentQuestionIndex,currentQuestion.initialQuestion.answers[0].id) ? "active": "")}
                                    onClick={() => handleChange(currentQuestion.initialQuestion.answers[0].correct,
                                    currentQuestionIndex,
                                    currentQuestion.initialQuestion.answers[0].id)}>
                                    <div className="option-number">
                                        A
                                    </div>
                                    <div className="option" >
                                        {currentQuestion.initialQuestion.answers[0].name}
                                    </div>
                                    <div className="option-tick">
                                        <i className="fa fa-check"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6">
                                <div className={"answer-wrapper" +' '+ (is_active(currentQuestionIndex,currentQuestion.initialQuestion.answers[1].id) ? "active": "")}
                                 onClick={() => handleChange(currentQuestion.initialQuestion.answers[1].correct,
                                 currentQuestionIndex,
                                 currentQuestion.initialQuestion.answers[1].id)}>
                                    <div className="option-number" >
                                        B
                                    </div>
                                    <div className="option">
                                        {currentQuestion.initialQuestion.answers[1].name}
                                    </div>
                                    <div className="option-tick">
                                        <i className="fa fa-check"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6">
                                <div className={"answer-wrapper" +' '+ (is_active(currentQuestionIndex,currentQuestion.initialQuestion.answers[2].id) ? "active": "")}
                                onClick={() => handleChange(currentQuestion.initialQuestion.answers[2].correct,
                                currentQuestionIndex,
                                currentQuestion.initialQuestion.answers[2].id)}>
                                    <div className="option-number">
                                        C
                                    </div>
                                    <div className="option">
                                        {currentQuestion.initialQuestion.answers[2].name}

                                    </div>
                                    <div className="option-tick">
                                        <i className="fa fa-check"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6">
                            <div className={"answer-wrapper" +' '+ (is_active(currentQuestionIndex,currentQuestion.initialQuestion.answers[3].id) ? "active": "")}
                                onClick={() => handleChange(currentQuestion.initialQuestion.answers[3].correct,
                                currentQuestionIndex,
                                currentQuestion.initialQuestion.answers[3].id)}>
                                    <div className="option-number">
                                        D
                                    </div>
                                    <div className="option">
                                        {currentQuestion.initialQuestion.answers[3].name}
                                    </div>
                                    <div className="option-tick">
                                        <i className="fa fa-check"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        }
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
                                         onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
                                         >
                                        <span> Next</span> <i className="fa fa-arrow-circle-right" />
                                    </div> :
                                    <div className="next-btn" onClick={submitPractise}>
                                            <span> Finish </span>
                                             <i className="fa fa-arrow-circle-right"/>
                                        
                                    </div>
                            }
                        </div>
                    </div>
                </div>
                </>
                : <span>Loading....</span>
                }
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
            <PractiseResult result={ResultResponse}/>
        </Route>  
    </React.Fragment> 
    );

}

function useCurrentQuestion(initialValue, questions, quizLength) {
    const allQuestion = questions.length;
    const [initialQuestion, setQuestions] = useState(questions[initialValue]);
    useEffect(() => {
        localStorage.setItem('initialValue', JSON.stringify(initialValue))
        setQuestions(questions[initialValue]);
    }, [initialValue, quizLength]);
    return {
        initialValue,
        initialQuestion,
        allQuestion
    }
}

function useMarkCounter(myMarks){
    const Total = myMarks.reduce((a,b) => a + b, 0)
    return Total; 
}

