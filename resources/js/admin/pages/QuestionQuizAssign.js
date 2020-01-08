import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import SelectDropdown from "../components/SelectDropdown";
import useQuizValidation from "../components/useQuizValidation";

export default function QuestionAssign() {
    const [quiz,setQuiz] = useState([]);
    const [subjects, setSubjects] = useState([]);
    const [chapters, setChapters] = useState([]);
    const [questions, setQuestions] = useState([]);
    const [belongsToQuiz, setBelongsToQuiz] = useState([]);
    const [values, setValues] = useState({
        'subject_id': '',
        'chapter_id': '',
        'quiz_question_count': '',
    });
    const {assigned, handleCheckboxClick, errors, submitting} = useQuizValidation(quiz,values.quiz_question_count, belongsToQuiz, setBelongsToQuiz);

    console.log(values);

    useEffect(()=>{
        const pathname = window.location.pathname;
        const id = pathname.match(/(\d+)/);
        axios.get('/api/admin/quiz/get_subjects/'+id[0])
            .then(response=>{
                console.log(response);
                setSubjects(response.data.subjects);
                setQuiz(response.data.quiz);
                // setLoading(false)
            })
    },[]);

    useEffect(()=>{
        const pathname = window.location.pathname;
        const id = pathname.match(/(\d+)/);
        axios.get('/api/admin/quiz/get_subjects/'+id[0])
            .then(response=>{
                console.log(response);
                setQuiz(response.data.quiz);
                setValues({
                    ...values,
                    quiz_question_count:response.data.quiz_question_count,
                });
                setBelongsToQuiz(response.data.belongsToQuiz);
            })
    },[errors]);

    function handleSubjectChange(e) {
        const selected_subject_id = e.target.value;
        console.log(e.target);
        setValues({
            ...values,
            subject_id:parseInt(selected_subject_id),
            chapter_id:'',
        });
        const selected_subject = subjects.filter((subject) =>
            subject.id === parseInt(selected_subject_id)
        );
        if(selected_subject_id === "null" || selected_subject_id === ""){
            setChapters([]);
            setQuestions([]);
        }
        else {
            setChapters(selected_subject[0]["chapters"]);
            setQuestions([]);
        }
    }

    function handleChapterChange(e) {
        console.log(e.target);
        const chapter_id = e.target.value;
        setValues({
            ...values,
            [e.target.name]:chapter_id,
        });
        axios.get('/api/admin/quiz/get_questions/'+quiz.id+'/'+chapter_id).then(response=>{
            console.log(response);
            setQuestions(response.data.questions);
        });
    }

    const BelongsToQuiz = ({question}) =>{
        if(belongsToQuiz.includes(question.id)) {
            return(<button onClick={handleCheckboxClick} value={question.id} id="remove_ques"
                    className="btn-chnage-status btn btn-sm btn-default text-primary btn-outline-primary">
                Yes</button>
            )
        }
        else{
            return(<button onClick={handleCheckboxClick} value={question.id} id="add_ques"
                      className="btn-chnage-status btn btn-sm btn-default text-danger btn-outline-danger">
                No</button>
            )
        }
    };
    console.log(belongsToQuiz);


    return (
        <React.Fragment>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label>Select Subject:</label>
                        <SelectDropdown key={"subject"} name="subject_id" action={handleSubjectChange} def_value={values.subject_id} content={subjects} defaultOption = "Select a Category"/>
                    </div>
                    <div className="form-group">
                        <label>Select a Chapter:</label>
                        { chapters.length > 0 ?
                            <SelectDropdown key={"chapter"} name="chapter_id" action={handleChapterChange} content={chapters} def_value={values.chapter_id} defaultOption = "Select a Chapter"/>
                            :
                            <div>
                                <span>Select a Subject first..</span>
                            </div>
                        }
                    </div>
                </div>
                <div className="col-md-6">
                    { errors.limit &&
                    <span className="alert alert-danger">{ errors.limit }</span>
                    }
                </div>
            </div>

            {/*<div id="overlay" style={{display:(submitting ? "block" : "none")}}>Loading...</div>*/}

            { questions.length > 0 ?
                <div className="row">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Question</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                questions.map((question,index)=>{
                                    return(
                                        <tr key={index}>
                                            <td>{question.id}</td>
                                            <td>{question.name}</td>
                                            <td>
                                                <BelongsToQuiz key={question.id} question={question}/>
                                                </td>
                                        </tr>
                                            )
                                })
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
                :
                // (submitting === true) ? <span>Processing : </span>:
                <div>
                    <span>Select Above Options to View Questions To Assign</span>
                </div>
            }
        </React.Fragment>
    );

}

if (document.getElementById('quiz_question_assign')) {
    ReactDOM.render(<QuestionAssign/>, document.getElementById('quiz_question_assign'))
}