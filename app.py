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

# uidもmessageと一緒に返す
@app.route('/detail/<channel_id>')
def detail(channel_id):
    channel_id = channel_id
    channel = dbConnect.getOneChannel(channel_id)
    messages = dbConnect.getMessageAll(channel_id)
    # 後でsessionのuidに書き換え
    uid = '1'

    return render_template('detail.html', messages=messages, channel=channel, uid=uid)



@app.route('/db')
def testDbConnection():
    channels = dbConnect.getChannelAll()

    return render_template('hello.html', title='データベースのテスト', channels=channels)

@app.route('/message', methods=['GET'])
def hello():
    cid = 1
    messages = dbConnect.getMessageAll(cid)
    return render_template('hello.html', messages=messages)

# TODO
# 各メッセージにuidをつける
# sessionからuser_idを取り出してcreateMessageに引数で渡す
@app.route('/message', methods=['POST'])
def message():
    message = request.form.get('message')
    channel_id = request.form.get('channel_id')
    print(message, channel_id)
    # cid = request.form.get('channel_id')
    cid = 1
    # このuid変数にsessionのuidをセット
    uid = '1'
    dbConnect.createMessage(uid, cid, message)

    channel = dbConnect.getOneChannel(channel_id)
    messages = dbConnect.getMessageAll(channel_id)
    # 後でsessionのuidに書き換え
    uid = '1'

    return render_template('detail.html', messages=messages, channel=channel, uid=uid)
    
@app.route('/error')
def show_error():
    return render_template('error/error.html')

@app.errorhandler(404)
def show_error404(error):
    return render_template('error/404.html')

@app.errorhandler(500)
def show_error500(error):
    return render_template('error/500.html')

# テスト表示用
@app.route('/error500')
def test_show_error500():
    return render_template('error/500.html')

if __name__ == '__main__':
    app.run(debug=True)