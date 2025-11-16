from flask import Flask, jsonify
from flask_cors import CORS

# Vercel akan mengimpor 'app'
app = Flask(__name__)
CORS(app) # Mengizinkan CORS saat deployed

@app.route('/')
def index():
    return "Serverless Function Python (Flask) Berjalan!"

@app.route('/api/data')
def get_data():
    data = {
        "message": "Data Admin berhasil diambil dari Flask Serverless Function!"
    }
    return jsonify(data)