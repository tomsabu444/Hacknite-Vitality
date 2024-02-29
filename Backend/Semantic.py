from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/process_image_data', methods=['POST'])
def process_image_data():
    data = request.get_json()
    text = data['text']  

    print("Received text: ", text) # Print the text to the console

    # Your text processing logic here:
    processed_text = process_text(text)  # Replace with your processing function

    return jsonify({'status': 'success', 'processed_text': processed_text})

def process_text(text):
    # Example: Simply reverse the text for demonstration
    return text[::-1] 

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=6000, debug=True) # Host on 0.0.0.0 to allow connections
