import React, { useRef, useState } from 'react';
import { ReactComponent as FileIcon } from "../icons/File_Icon.svg";
import { ReactComponent as Loading } from "../icons/Ellipsis_Loading_Bar.svg";
import TermsAndConditions from './T&C';
import { FILE_API } from './API';

const File = () => {
    const fileInputRef = useRef(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [isFileUploaded, setIsFileUploaded] = useState(false);
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChooseFile = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        setIsFileUploaded(false);
        setResult(null); 
    };

    const handleUpload = async () => {
        if (!selectedFile) {
            alert("Please select a file first!");
            return;
        }

        setLoading(true);

        const formData = new FormData();
        formData.append('file', selectedFile);

        try {
            const response = await fetch(FILE_API, {
                method: 'POST',
                body: formData
            });

            // Simulate a minimum delay of 2 seconds before updating the result
            setTimeout(async () => {
                // Parse the JSON response
                const data = await response.json();

                // Update the state with the result
                setResult(data.result.message);
                setIsFileUploaded(true);
                setLoading(false); // Set loading to false when the response is received
            }, 2000); // Minimum delay of 2 seconds

        } catch (error) {
            console.error('Error uploading file:', error);
            setResult({ error: 'Error uploading file' });
            setIsFileUploaded(true);
            setLoading(false);
        }
    };

    const handleCancelUpload = () => {
        setSelectedFile(null);
        setIsFileUploaded(false);
        setResult(null);
    };

    return (
        <div className="vstack gap-4 align-items-center">
            <FileIcon />
            <form className="vstack gap-4 align-items-center">
            <input
                type="file"
                accept=".exe"
                hidden
                id="fileSelector"
                ref={fileInputRef}
                onChange={handleFileChange}
            />
                {selectedFile && (
                    <div className='file-confirmation'>
                        <div className="file-details">
                            <span className='selected-file'>
                                {selectedFile.name}
                            </span>
                            <span
                                role="button"
                                className="close-icon"
                                onClick={handleCancelUpload}>
                                &#10006;
                            </span>
                        </div>
                        {!isFileUploaded &&(
                            <div>
                                <button type="button" className="btn" onClick={handleUpload}>
                                    Confirm Upload
                                </button>
                            </div>
                        )}
                    </div>
                )}
                {!selectedFile && (
                    <button
                        id="infoIcon"
                        type="button"
                        className="btn"
                        onClick={handleChooseFile}
                    >
                        Choose File
                    </button>
                )}
            </form>
            {loading && <Loading />}
            {isFileUploaded && result && !loading && (
                <div className="file-result">
                    <p>{result}</p>
                </div>
            )}
            <TermsAndConditions />
        </div>
    );
};

export default File;
