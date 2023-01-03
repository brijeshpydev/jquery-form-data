from flask import render_template, redirect, jsonify, request
import os
def index():
    return render_template("index.html")


def Upload():
    name = request.form.get('FullName')
    email = request.form.get('Gender')
    files = request.files
    for x in files:
        file = files[x]
        file.save(f"app/static/media/{file.filename}")
    print(name)
    print(email)
    return jsonify({"res":os.listdir("app/static/media")})