from flask import Flask , jsonify, make_response
from flask_cors import CORS
from models import db, Pet
from flask_migrate import Migrate
from config import AppConfig


app=Flask(__name__)
app.config.from_object(AppConfig)
CORS(app, support_credentials=True)
db.init_app(app)
migrate = Migrate(app, db)

@app.route('/')
def index():
    response={"message":"Welcome to the mock data!"}
    return make_response(jsonify(response),200)


if __name__=="__main__":
    app.run(port=5000, debug=True)