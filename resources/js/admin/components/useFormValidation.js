import React, {useState, useEffect, useCallback} from "react"

function useFormValidation(initial_state, validate, authenticateQuestion) {

    const [subjects,setSubjects] = useState([]);
    const [chapters,setChapters] = useState([]);

    const [values, setValues] = useState(initial_state);
    const [submitting, setSubmitting] = useState(false); 
    const [errors, setErrors] = useState({});
    const [yearRow,setYearRow] = useState([]);


    useEffect(() => {
        if(submitting){
            const noErrors = Object.keys(errors).length === 0;
            if(noErrors){
                authenticateQuestion();
                console.log('success');
                // setSubmitting(false);
            }
            else{
                setSubmitting(false);
            }
        }
    },[errors]);


    function handleChange(e){
        console.log(e.target.value);
        setValues({
            ...values,
            [e.target.name]:e.target.value,
        });
        console.log(values);
    }

    function handleYearChange(e) {
        const { year } = { ...values };
        const currentYear = year;
        const { name, value } = e.target;
        currentYear[name] = value;

        setValues({
            ...values,
                year: currentYear
        });
    }

    function handleImageChange(e) {
        console.log(e.target);
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        const {image} = {...values};
        const currentImage = image;
        reader.onloadend = () => {
            currentImage['file'] = file;
            currentImage['previewUrl'] = reader.result;
            setValues({
                ...values,
                image: currentImage,
            });
        };

        reader.readAsDataURL(file)
    }


    function handleSubmit(e) {
        e.preventDefault();
        setSubmitting(true);
        const validate_status = validate(values);
        console.log(values);
        setErrors(validate_status);
    }

    const SubjectDropdown = () => {
        if(subjects.length > 0){
            return (
                <select name="subject" className="form-control" onChange={handleSubjectChange} value={values.subject_id}>
                    <option value="null">Select a Subject</option>
                    {subjects.map((subject, index) =>
                        <option value={subject.id} data-id={subject.id}
                                key={index} >{subject.name} ({subject.code})</option>
                    )}
                </select>
            )

        }
        else {
            return (<span>Loading...</span>);

        }
    };

    function handleSubjectChange(e) {
        // const id = e.target[event.target.selectedIndex].getAttribute("data-id");
        const id = e.target.value;
        console.log(id);
        const selected_subject = subjects.filter((subject) =>
            subject.id === parseInt(id)
        );
        if(id === "null"){
            setChapters([]);
        }
        else {
            values.subject_id=e.target.value;
            setChapters(selected_subject[0]["chapters"]);
        }
    }


    const ChapterDropdown = () => {
        if(chapters.length > 0){
            return (
                <select name="chapter_id" className="form-control" onChange={handleChange} value={values.chapter_id}>
                    <option value="null">Select a Chapter</option>
                    {chapters.map((chapter, index) =>
                        <option value={chapter.id} data-id={chapter.id}
                                key={index} >{chapter.name}</option>
                    )}
                </select>
            )

        }
        else {
            return (<span className="errorForm">&nbsp;&nbsp;(Select a subject first...)</span>);

        }
    };

    function handleYearAdd(e){
        e.preventDefault();
        const id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
        setYearRow([...yearRow,  id ]);
    }

    const Prow = useCallback(
        ({index,id}) => {
            return(
                <tr>
                    <td>{id + 1}</td>
                    <td><input type="number" name={id} onChange={handleYearChange} value={values.year[id] || ""}/></td>
                    <td><button onClick={(e) =>{handleYearRemove(id,e)}}>Remove</button></td>
                </tr>
            );
        },
        [yearRow],
    );

    function handleYearRemove(id,e) {
        e.preventDefault();
        const { year } = {...values};
        setValues({
            ...values,
            year: year.filter((item, key) => key !== id)
        });
        setYearRow(yearRow.filter((item,key) => key !== id));
    }

    return {handleChange, handleImageChange, values, setValues, handleSubmit, errors, submitting, setSubmitting, ChapterDropdown, SubjectDropdown, handleYearAdd, Prow, yearRow ,setSubjects, subjects, setChapters, handleYearRemove, setYearRow}
}

export default useFormValidation;