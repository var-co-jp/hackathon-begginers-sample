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

@app.route('/')
def index():
    channels = dbConnect.getChannelAll()
    return render_template('index.html', channels=channels)

@app.route('/', methods=['POST'])
def add_channel():
    channel_name = request.form.get('channel-title')
    channel_description = request.form.get('channel-description')
    dbConnect.addChannel(channel_name, channel_description)
    return redirect('/')

@app.route('/detail')
def detail():
    return render_template('detail.html')

@app.route('/db')
def testDbConnection():
    channels = dbConnect.getChannelAll()

    return render_template('hello.html', title='データベースのテスト', channels=channels)
    
if __name__ == '__main__':
    app.run(debug=True)