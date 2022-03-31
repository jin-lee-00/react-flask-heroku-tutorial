import os
from flask import Flask, jsonify, request, json
# from flask_cors import CORS

app = Flask(__name__, static_folder="client/build", static_url_path="/")
# CORS(app)

@app.route("/")
def index():
  return app.send_static_file("index.html")

@app.route("/api/<fname>", methods=["GET", "POST"])
def getLname(fname: str):
  match fname:
    case "Jin": return jsonify({"content":"Lee"})
    case "Brandi": return jsonify({"content":"Nguyen"})
    case "Allen": return jsonify({"content":"Zhou"})
    case "Noah": return jsonify({"content":"Zamarripa"})
    case "Carson": return jsonify({"content":"Bone"})
    case "Abhay": return jsonify({"content":"Samant"})
    case "Taniya": return jsonify({"content":"Bhosale"})
    case _: return jsonify({"content":"User Not Found"})

@app.route("/api/search", methods=["POST"])
def search():
  request_data = json.loads(request.data)
  return request_data

@app.errorhandler(404)
def not_found(e):
  return app.send_static_file("index.html")

if __name__ == "__main__": 
  app.run(host="0.0.0.0", debug=False, port=os.environ.get("PORT", 80))      