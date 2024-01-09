from flask import Flask, jsonify, make_response, request
from flask_cors import CORS
from models import db, Pet
from flask_migrate import Migrate
from config import AppConfig

app = Flask(__name__)
app.config.from_object(AppConfig)
CORS(app, support_credentials=True)
db.init_app(app)
migrate = Migrate(app, db)

@app.route('/')
def index():
    response = {"message": "Welcome to the mock data!"}
    return make_response(jsonify(response), 200)

@app.route('/pets', methods=["GET", "POST"])
def all_pets():
    if request.method == "GET":
        pets = [pet.to_dict() for pet in Pet.query.all()]
        return make_response(jsonify(pets), 200)
    elif request.method == "POST":
        data = request.get_json()
        new_pet = Pet(**data)
        db.session.add(new_pet)
        db.session.commit()
        response = {"message": "Pet added successfully!", "new_pet": new_pet.to_dict()}
        return make_response(jsonify(response), 201)


@app.route("/pets/<int:id>", methods=["GET", "PATCH","DELETE"])
def pet_by_id(id):
   if request.method=="GET":
       pet=Pet.query.filter_by(id=id).first()
       return make_response(jsonify(pet.to_dict()),200)
   elif request.method=="PATCH":
       pet=Pet.query.filter_by(id=id).first()
       data=request.get_json()
       for attr,value in data.items():
           setattr(pet,attr,value)
       db.session.add(pet)
       db.session.commit()
       return make_response(jsonify(pet.to_dict()),200)
   if request.method=="DELETE":
       pet=Pet.query.filter_by(id=id).first()
       db.session.delete(pet)
       db.session.commit()
       return make_response(jsonify("Pet deleted successfully"),200)

if __name__ == "__main__":
    app.run(port=5000, debug=True)
