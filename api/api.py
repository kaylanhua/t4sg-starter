# export FLASK_APP=api.py
# apparently .flaskenv does not run even though i have installed python-dotenv

import time
from flask import Flask, request, session, jsonify, redirect, render_template
from flask_cors import CORS;

app = Flask(__name__)
CORS(app)

print("flask has started running!!!!!")

@app.route('/test/', methods=['POST', 'GET'])
def api_post():
    if request.method == 'POST':
        req = request.json
        rev_string = req["name"][::-1]
        req["name"] = rev_string
        print(req["name"])
        return jsonify(name=req)
    if request.method == 'GET':
        return {
			'test': 'test'
		}


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