import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import SelectDropdown from "../components/SelectDropdown";

export default function QuestionAssign() {
    const [subjects, setSubjects] = useState([]);
    const [chapters, setChapters] = useState([]);
    const [questions, setQuestions] = useState([]);
    const [values, setValues] = useState({
        'subject_id': '',
        'chapter_id': '',
    });

    console.log(questions);

    useEffect(()=>{
        axios.get('/api/admin/quiz/get_subjects')
            .then(response=>{
                console.log(response);
                setSubjects(response.data);
                // setLoading(false)
            })
    },[]);

    function handleSubjectChange(e) {
        const selected_subject_id = e.target.value;
        setValues({
            ...values,
            [e.target.name]:selected_subject_id,
        });
        const selected_subject = subjects.filter((subject) =>
            subject.id === parseInt(selected_subject_id)
        );
        if(selected_subject_id === "null" || selected_subject_id === ""){
            setChapters([]);
        }
        else {
            setChapters(selected_subject[0]["chapters"]);
        }
    }

    function handleChapterChange(e) {
        const id = e.target.value;
        setValues({
            ...values,
            [e.target.name]:id,
        });
        axios.get('/api/admin/quiz/get_questions/'+id).then(response=>{
            console.log(response);
            setQuestions(response.data);
        });
    }

    return (
        <React.Fragment>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label>Select Subject:</label>
                        <SelectDropdown name="subject_id" action={handleSubjectChange} value={values.subject_id} content={subjects} defaultOption = "Select a Category"/>
                    </div>
                    <div className="form-group">
                        <label>Select a Chapter:</label>
                        { chapters.length > 0 ?
                            <SelectDropdown name="chapter_id" action={handleChapterChange} content={chapters} value={values.chapter_id} defaultOption = "Select a Chapter"/>
                            :
                            <div>
                                <span>Select a Subject first..</span>
                            </div>
                        }
                    </div>
                </div>
            </div>
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
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{question.name}</td>
                                            <td>
                                                    {/*<button className="btn-chnage-status btn btn-sm btn-default text-primary btn-outline-primary"><i className="ion-toggle-filled"/> </button>*/}
                                                    <button className="btn-chnage-status btn btn-sm btn-default text-danger btn-outline-danger"><i className="ion-toggle"/> </button>
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