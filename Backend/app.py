from flask import Flask, request, jsonify, Response
from flask_cors import CORS  
from URL_Backend.maldetect_url import get_predictions_from_urls
from File_Backend.file_checker import checkFile
import numpy as np

app = Flask(__name__)
CORS(app)  

@app.route('/check_url', methods=['POST'])
def check_url():
    json_data = request.json  
    results = get_predictions_from_urls(json_data)  
    return jsonify(results)

@app.route('/check_file', methods=['POST'])
def check_file():
    if 'file' not in request.files:
        return jsonify({'error': 'No file uploaded'}), 400
    
    uploaded_file = request.files['file']
    file_data = uploaded_file.read()
    
    result = checkFile(file_data)

    if isinstance(result, Response):
        # Handle case where checkFile returns a Response object
        return result

    # Convert int64 to Python int if needed
    if isinstance(result, np.int64):
        result = result.item()

    # Assign the message based on the value of result
    if result == 1:
        message = 'File is legitimate'
    else:
        message = 'File is likely malware'

    # Prepare the response data
    response_data = {
        'result': result,
        'message': message
    }

    # Return the response as JSON
    return jsonify(response_data)


if __name__ == '__main__':
    app.run(debug=True)