from dotenv import load_dotenv
import os
from datetime import timedelta
load_dotenv()

class AppConfig:
    SECRET_KEY=os.environ["SECRET_KEY"]
    SQLALCHEMY_DATABASE_URI="sqlite:///app.db"
    SQLALCHEMY_TRACK_MODIFICATIONS=False
    


