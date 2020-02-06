import React, { useState, useEffect } from "react";
import Axios from "axios";

const Modal = ({ id }) => {
    const[FlashResponse, setFlashResponse] = useState({});

    let getUrl='http://noname.hellonep.com/api/flashcard/'+id;

    useEffect(() => {
        let source = Axios.CancelToken.source();

        const loadData = async() => {
            try{
                const response = await Axios.get(getUrl,{
                    cancelToken: source.token,
                   
                });
                setFlashResponse(response.data.data);
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
        setFlashResponse(null);
    };
}, [getUrl]);

console.log(FlashResponse)


    return (
        <div className="modal" id="flash-modal">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-body">
                    <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                    >
                        &times;
                    </button>
                    {FlashResponse && (
                        <div>
                            <strong>{FlashResponse.title}</strong>
                            <p style={{ fontWeight: "lighter" }}>
                                {" "}
                                {FlashResponse.description}{" "}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
        </div>
    );
};
export default Modal;
