from app import app
from .views import *

@app.route("/")
def home():
    return index()

@app.route("/upload",methods=['GET','POST'])
def upload():
    return Upload()