from models import db, Pet
from app import app
from faker import Faker
import random

fake = Faker()

def generate_fake_pets(num_pets=10):
    for _ in range(num_pets):
        pet_type = random.choice(["Cat", "Dog"])
        pet = Pet(
            name=fake.name(),
            breed=fake.word(),
            type=pet_type,
            age=random.randint(1, 10),
            price=random.uniform(10, 100),
        )
        db.session.add(pet)
    db.session.commit()

if __name__ == "__main__":
    with app.app_context():
        generate_fake_pets()
        print("Fake pets generated and added to the database.")
