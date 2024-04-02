import React, { useState } from 'react';
import { ReactComponent as UrlIcon } from "../icons/Url_Icon.svg";
import { ReactComponent as Loading } from "../icons/Ellipsis_Loading_Bar.svg";
import TermsAndConditions from "./T&C";
import { URL_API } from './API';

const URL = () => {

    const [url, setUrl] = useState('');
    const [result, setResult] = useState('');
    const [loading, setLoading] = useState(false);

    const handleUrlChange = (event) => {
        setUrl(event.target.value);
        // Clear the result when the URL changes
        setResult('');
    };

    const handleUrlSubmit = async (event) => {
        event.preventDefault();
        setLoading(true); // Set loading to true when submitting the form

        try {
            // Send a POST request to the Flask server
            const response = await fetch(URL_API, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ url })
            });

            // Simulate a minimum delay of 2 seconds before updating the result
            setTimeout(async () => {
                // Parse the JSON response
                const data = await response.json();

                // Update the state with the result
                setResult(data[0][0] + " " + data[0][1]);
                setLoading(false); // Set loading to false when the response is received
            }, 2000); // Minimum delay of 2 seconds
        } catch (error) {
            console.error('Error fetching data:', error);
            setResult('Error fetching data');
            setLoading(false); // Set loading to false in case of an error
        }
    };

    return (
        <div className="search vstack gap-4 align-items-center">
            <div className="tab-logo">
                <UrlIcon />
            </div>
            <form className="url-search-form" id="searchUrlForm" onSubmit={handleUrlSubmit}>
                <input id="urlSearchInput" autoFocus type="text" className="form-control" placeholder="Search or scan a URL" value={url} onChange={handleUrlChange} />
                <button type="submit" className="btn m-b-10" id="searchUrlButton"> Search </button>
            </form>
            {loading && <Loading />} {/* Display Loading component when loading is true */}
            {result && !loading && (
                <div className="url-result">
                    <p>{result}</p>
                </div>
            )}
            <TermsAndConditions />
        </div>
    );
};

export default URL;
