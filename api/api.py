# export FLASK_APP=api.py
# apparently .flaskenv does not run even though i have installed python-dotenv

import time
from flask import Flask, request, session, jsonify, redirect, render_template
from flask_cors import CORS;

app = Flask(__name__)
CORS(app)

@app.route('/test/', methods=['POST', 'GET'])
def api_post():
    if request.method == 'POST':
        req = request.json
        print(req)
        # req_reverse = req[::-1]
        return jsonify(name=req)


@app.route('/', methods=['GET', 'POST'])
def index():
	return {
		'name': 'Hello Kayla'
	}

@app.route('/reverse', methods=['GET', 'POST'])
def reverse():
	if request.method == 'POST':
		string = request.json
		return "post return"
	if request.method == 'GET':
		return {
			'good': 'morning'
		}

@app.route('/time')
def get_current_time():
	return {'time': time.time()}

if __name__ == '__main__':
	app.run(debug=True)