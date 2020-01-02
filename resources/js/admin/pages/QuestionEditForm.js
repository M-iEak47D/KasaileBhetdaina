import React, {useState, useCallback, useEffect, useReducer} from "react";
import axios from "axios";
import ReactDOM from "react-dom";
import useFormValidation from "../components/useFormValidation";
import validateQuestion from "../components/validateQuestion"

const INITIAL_STATE = {
    "question": "",
    "marks": "",

    "answerA" : "",
    "answerB" : "",
    "answerC" : "",
    "answerD" : "",
    "correct" : "",
    "year" : [],
    "image" : [],
    "subject": [],
    "subject_id":"null",
    "chapter_id":"null",
    "importance" : "",
    "quiz_id" : "",
};

export default function QuestionEdit() {

    const { handleChange, handleImageChange, values, setValues, handleSubmit, errors, submitting, setSubmitting, ChapterDropdown, SubjectDropdown, handleYearAdd, Prow, yearRow ,setSubjects, subjects, setChapters, handleYearRemove, setYearRow } = useFormValidation(INITIAL_STATE, validateQuestion, authenticateQuestion);
    const [laravelError, setLaravelError] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState([]);


    useEffect(()=>{
        axios.get('/api'+window.location.pathname)
            .then(response=>{
                console.log(response.data);
                setSubjects(response.data["subjects"]);
                setCurrentQuestion(response.data["questions"]);
                setCurrentQuestion(prevState =>
                    ({ ...prevState, subject_id: response.data["subject_id"]})
                );
            })
    },[]);

    useEffect(() =>{
        if(currentQuestion.name) {
            setValues({
                ...values,
                    question:currentQuestion.name,
                    marks:currentQuestion.marks,
                    subject_id: currentQuestion.subject_id,
                    chapter_id: currentQuestion.chapter_id,
                    answerA: currentQuestion.answers[0].name,
                    answerB: currentQuestion.answers[1].name,
                    answerC: currentQuestion.answers[2].name,
                    answerD: currentQuestion.answers[3].name,
                    importance: currentQuestion.importance,
            });
            if(currentQuestion.image !== null || currentQuestion.image !== null){
                console.log(currentQuestion.image);
                const {image} = {...values};
                const currentImage = image;
                const preview_url = currentQuestion.image;
                currentImage['file'] = "";
                currentImage['previewUrl'] = preview_url;
                setValues(prevState =>({
                    ...prevState,
                        image: currentImage,
                }));
            }
            if(currentQuestion.year) {
                if (currentQuestion.year.length > 0) {
                    setValues(prevState => ({
                        ...prevState,
                        year: currentQuestion.year
                    }));
                    currentQuestion.year.map((year, id) => {
                        const random = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
                        setYearRow([...yearRow, random]);
                    });
                }
            }
            var correct = 100;
            currentQuestion.answers.map((answer,index)=> {
               if(answer.correct === 1){
                   correct = index+1;
               }
            });
            if(correct !== 100) {
                setValues(prevState =>({
                    ...prevState,
                    correct: correct
                }));
            }
            if(subjects.length > 0 && currentQuestion.subject_id){
                const subject_id = currentQuestion.subject_id;
                const selected_subject = subjects.filter((subject) =>
                    subject.id === parseInt(subject_id)
                );
                if(subject_id === "null"){
                    setChapters([]);
                }
                else {
                    setChapters(selected_subject[0].chapters);
                }
            }
        }
    },[currentQuestion, subjects]);
    
  console.log(values);
    const ImagePreview= useCallback(()=> { 
            return <img className="question_add_image_preview" src={values.image.previewUrl}/>
    
        
    },[values.image]);

    useEffect(()=>{
        
    },[values.correct]);


    async function authenticateQuestion() {
        const { question, marks, correct, year, importance, answerA, answerB, answerC, answerD, chapter_id} = values;
        const url = '/api'+window.location.pathname;
        const bodyFormData = new FormData();
        bodyFormData.set("question",question);
        bodyFormData.set("marks",marks);
        console.log(year);
        console.log(JSON.stringify(values));
        bodyFormData.append("year",JSON.stringify(year));
        bodyFormData.set("importance",importance);
        bodyFormData.set("correct",correct);
        bodyFormData.set("answerA",answerA);
        bodyFormData.set("answerB",answerB);
        bodyFormData.set("answerC",answerC);
        bodyFormData.set("answerD",answerD);
        bodyFormData.set("chapter_id",chapter_id);
        console.log(bodyFormData.get("year"));

        // console.log(values);
        bodyFormData.append("file",values.image.file);
        try{
            await axios({
                method: 'post',
                url: url,
                data: bodyFormData,year,
                headers: {'Content-Type': 'multipart/form-data' }
            })
                .then(function (response) {
                    //handle success
                    console.log(response);
                    setSubmitting(false);
                    window.location.replace(window.location.pathname+'/questions/')
                })
                .catch(function (response) {
                    //handle error
                    console.log('submit error'+response.message);
                    setLaravelError(response.message);
                    setSubmitting(false);
                });
        }
        catch (e) {
            console.log('submit error'.e);
            setLaravelError(e);
            setSubmitting(false);
        }
    }

    function handleCorrectChange(e){
        const val=e.target.value;
        setValues(prevState =>({
            ...prevState,
            correct: val,
        }));
    }
    return (
        <div className="card">
            <div className="card-body">
                <form
                    method="post"
                    encType="multipart/form-data"
                    onSubmit={(e) => {
                        handleSubmit(e)
                    }}
                >
                    <div className="form-group">
                        <label htmlFor="question">Enter Question Name:</label>
                        <textarea
                            id="question"
                            name="question"
                            value={values.question}
                            onChange={handleChange}
                            className={"form-control"}
                        />
                        { errors.question && <span className="errorForm">{errors.question}</span> }
                    </div>
                    <div className={"row"}>
                        <div className={"col-md-6"}>
                            <div className="form-group">
                                <label htmlFor="marks">Enter Marks:</label>
                                <input
                                    type="number"
                                    id="demo0"
                                    name="marks"
                                    className="form-control"
                                    value={values.marks}
                                    onChange={handleChange
                                    }
                                />
                                { errors.marks && <span className="errorForm">{errors.marks}</span> }
                            </div>
                            <div className="form-group">
                                <label htmlFor="year">Enter Year</label>
                                <div className="row">
                                    <div className="col-md-12">
                                        <table className="table table-bordered table-years " width="100%">
                                            <thead>
                                            <tr>
                                                <th>SN</th>
                                                <th>Year</th>
                                                <th>Action</th>
                                            </tr>
                                            </thead>

                                            <tbody id="year_row">
                                            {yearRow.length > 0 ?
                                                yearRow.map((index, id) =>
                                                    <Prow index={index} id={id} key={index}/>
                                                )

                                                : <tr>
                                                    <td>#</td>
                                                    <td>Click Add For More Year Data</td>
                                                    <td>..</td>
                                                </tr>
                                            }
                                            </tbody>

                                            <tfoot>
                                            <tr>
                                                <th/>
                                                <th/>
                                                <th>
                                                    <button onClick={e=>{handleYearAdd(e)}} className="btn btn-primary btn-sm btn-add-years">
                                                        Add New
                                                    </button>
                                                </th>
                                            </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="importance">Importance</label>
                                <input
                                    type="radio"
                                    name="importance"
                                    defaultValue={1}
                                    onChange={handleChange}
                                    checked={values.importance === 1}
                                /> :Yes
                                <input
                                    type="radio"
                                    name="importance"
                                    defaultValue={0}
                                    onChange={handleChange}
                                    checked={values.importance === 0}
                                /> :No
                            </div>
                        </div>
                        <div className={"col-md-6"}>
                            <div className="form-group">
                                <label>Select a Subject</label>
                                <SubjectDropdown/>
                            </div>
                            <div className="form-group">
                                <label>Select Chapter</label>
                                <ChapterDropdown/>
                            </div>
                            { errors.chapter_id && <span className="errorForm">{errors.chapter_id}</span>}
                        </div>
                    </div>
                    { values.image.previewUrl &&
                    <div>

                    </div>
                    }
                    <div className="form-group">
                        <label htmlFor="image">Image</label>
                        <ImagePreview />
                        <input type="file" name="image" onChange={handleImageChange} id="image" className="form-control"/>
                    </div>
                    <br/>
                    <hr/>
                    <label htmlFor="answers">Answers:</label>
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead>
                            <tr>
                                <th>Option</th>
                                <th>Answer</th>
                                <th>Correct?</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>A.</td>
                                <td>
                                    <input
                                        type="text"
                                        name="answerA"
                                        data-key="0"
                                        className="form-control"
                                        onChange={handleChange}
                                        value={values.answerA}

                                    />
                                </td>
                                <td>
                                    <input type="radio" name="correct" value={1}
                                           onChange={handleChange}
                                            checked = {values.correct === 1}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>B.</td>
                                <td>
                                    <input
                                        type="text"
                                        name="answerB"
                                        className="form-control"
                                        onChange={handleChange}
                                        value={values.answerB}
                                    />
                                </td>
                                <td>
                                    <input type="radio" name="correct" value={2}
                                           onChange={handleChange}
                                           checked = {values.correct === 2}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>C.</td>
                                <td>
                                    <input
                                        type="text"
                                        name="answerC"
                                        className="form-control"
                                        onChange={handleChange}
                                        value={values.answerC}
                                    />
                                </td>
                                <td>
                                    <input type="radio" name="correct" value={3}
                                           onChange={(e)=>{handleCorrectChange(e)}}
                                           checked = {values.correct === 3}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>D.</td>
                                <td>
                                    <input
                                        type="text"
                                        name="answerD"
                                        className="form-control"
                                        onChange={handleChange}
                                        value={values.answerD}
                                    />
                                </td>
                                <td>
                                    <input type="radio" name="correct" value={4}
                                           onChange={(e)=>{handleCorrectChange(e)}}
                                           checked = {values.correct === 4}
                                    />
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    { errors.answer && <span className="errorForm">{errors.answer}</span>}
                    &nbsp;&nbsp;{ errors.importance && <span className="errorForm">{errors.importance}</span>}
                    <hr/>
                    <button disabled={submitting} type="submit" id="add_preparation" className="btn btn-primary">
                        Save changes
                    </button>
                    { laravelError &&
                    <p><span className="errorForm">Form Submit Error. Please try again !!</span></p>
                    }
                </form>
            </div>
        </div>
    )
        ;

}
if (document.getElementById("question-edit-form")) {
    ReactDOM.render(<QuestionEdit/>, document.getElementById("question-edit-form"));
}