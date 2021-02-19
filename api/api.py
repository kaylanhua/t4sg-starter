# export FLASK_APP=api.py
# apparently .flaskenv does not run even though i have installed python-dotenv

import time
from flask import Flask

app = Flask(__name__)

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/hello')
def say_hello_world():
    return {'result': "hello, kayla."}
