from flask import * 
import flask_login
from models import dbConnect

app = Flask(__name__)


@app.route('/signup')
def signup():
    return render_template('registration/signup.html')

@app.route('/login')
def login():
    return render_template('registration/login.html')

@app.route('/index')
def index():
    channels = dbConnect.getChannelAll()
    return render_template('index.html', channels=channels)

@app.route('/detail')
def detail():
    return render_template('detail.html')

@app.route('/db')
def testDbConnection():
    channels = dbConnect.getChannelAll()

    return render_template('hello.html', title='データベースのテスト', channels=channels)

@app.route('/message', methods=['GET'])
def hello():
    messages = dbConnect.getMessageAll()
    return render_template('hello.html', messages=messages)

@app.route('/message', methods=['POST'])
def message():
    message = request.form.get('message')
    dbConnect.createMessage(message)
    messages = dbConnect.getMessageAll()
    return render_template('hello.html', messages=messages)
    
if __name__ == '__main__':
    app.run(debug=True)