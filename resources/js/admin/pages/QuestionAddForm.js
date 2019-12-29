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
    "subject_id" : "null",
    "chapter_id" : "null",
    "importance" : "",
    "quiz_id" : "",
};

export default function Temp() {
    const { handleChange, handleImageChange, values, setValues, handleSubmit, errors, submitting, setSubmitting, ChapterDropdown, SubjectDropdown, handleYearAdd, Prow, yearRow ,setSubjects, subjects, setChapters } = useFormValidation(INITIAL_STATE, validateQuestion, authenticateQuestion);
    const [laravelError, setLaravelError] = useState(null);

    useEffect(()=>{
        axios.get('/api/subjects')
            .then(response=>{
                console.log(response);
                setSubjects(response.data);
                // setLoading(false)
            })
    },[]);



    async function authenticateQuestion() {
        const { question, marks, correct, year, importance, answerA, answerB, answerC, answerD, chapter_id, quiz_id} = values;
        const url = "/api/post_question_add";
        const bodyFormData = new FormData();
        console.log(year);
        bodyFormData.set("question",question);
        bodyFormData.set("marks",marks);
        const my ="hello";
        bodyFormData.set("year",JSON.stringify(year));
        bodyFormData.set("importance",importance);
        bodyFormData.set("correct",correct);
        bodyFormData.set("answerA",answerA);
        bodyFormData.set("answerB",answerB);
        bodyFormData.set("answerC",answerC);
        bodyFormData.set("answerD",answerD);
        bodyFormData.set("chapter_id",chapter_id);
        bodyFormData.set("quiz_id",quiz_id);
        console.log(bodyFormData.get("year"));

        // console.log(values);
        bodyFormData.append("file",values.image.file);
        try{
            await axios({
                method: 'post',
                url: url,
                data: bodyFormData,
                headers: {'Content-Type': 'multipart/form-data' }
            })
                .then(function (response) {
                    //handle success
                    console.log(response);
                    setSubmitting(false);
                    document.getElementById("add_question_form")[0].reset();
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


    return (
        <div className="card">
            <div className="card-body">
                <form
                    method="post"
                    id="add_question_form"
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
                                                    <td>Click Add to add Year Data</td>
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
                                /> :Yes
                                <input
                                    type="radio"
                                    name="importance"
                                    defaultValue={0}
                                    onChange={handleChange}
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
                            <div className="form-group">
                                <label>Assign to Quiz?</label>
                                <select name="quiz_id" value={values.quiz_id} onChange={handleChange} class="form-control">
                                    <option value="1">Quiz Physics</option>
                                    <option value="2">Quiz Biology</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    { values.image.previewUrl &&
                        <div>
                            <img className="question_add_image_preview" src={values.image.previewUrl}/>
                        </div>
                    }
                    <div className="form-group">
                        <label htmlFor="image">Image</label>
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
                                    <input type="radio" name="correct" defaultValue={1}
                                           onChange={handleChange}
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
                                    <input type="radio" name="correct" defaultValue={2}
                                           onChange={handleChange}
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
                                    <input type="radio" name="correct" defaultValue={3}
                                           onChange={handleChange}
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
                                    <input type="radio" name="correct" defaultValue={4}
                                           onChange={handleChange}
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
if(document.getElementById("question-add-form")) {
    ReactDOM.render(<Temp/>, document.getElementById("question-add-form"));
}