from flask import Flask, jsonify, request
from flask_cors import CORS
import os
from final import core
import base64

app=Flask(__name__)
CORS(app)



@app.route('/', methods=['GET'])
def home():
    return app.send_static_file("index.html")

@app.route('/upload', methods = ['POST'])
def upload_file():
    fileD = request.form.get("fileData")
    fileN = request.form.get("fileName")
    print("the file name is: ",fileN)
    fh=open(fileN, "wb")
    imageData=base64.b64decode(fileD)
    fh.write(imageData)
    fh.close()
    os.rename(fileN,"bananaIMG.jpg")
    ripe=core("bananaIMG.jpg")
    print("POST FINAL PROCESSING: " + str(ripe))
    return str(ripe)
app.run(port=5000, debug=True)
