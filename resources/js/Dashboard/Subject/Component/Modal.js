import React, { useState, useEffect } from "react";

const Modal = ({ id }) => {
    const [modalId, setModalId] = useState();
    useEffect(() => {
        setModalId(id);

        console.log(modalId + "new data");
    }, []);

    return (
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
                    {id == 5 ? (
                        <div>
                            <strong>What is Force?</strong>
                            <p style={{ fontWeight: "lighter" }}>
                                {" "}
                                Himal Ma Hiu{" "}
                            </p>
                        </div>
                    ) : id == 6 ? (
                        <div>
                            <strong>What is Measurement?</strong>
                            <p style={{ fontWeight: "lighter" }}>
                                {" "}
                                Himal Ma Hello{" "}
                            </p>
                        </div>
                    ) : (
                        <div>
                            <h1>No thing to show</h1>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
export default Modal;
