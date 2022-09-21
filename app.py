from flask import Flask, request, redirect, render_template, session, flash
import flask_login
from models import dbConnect
from user import User
from datetime import timedelta
import hashlib
import uuid


app = Flask(__name__)
app.secret_key = 'secret_key'
app.permanent_session_lifetime = timedelta(days=30)


@app.route('/signup')
def signup():
    return render_template('registration/signup.html')

@app.route('/signup', methods=['POST'])
def userSignup():
    #フロントからの情報を受け取る
    name = request.form.get('name')
    email = request.form.get('email')
    password1 = request.form.get('password1')
    password2 = request.form.get('password2')

    #送られてきた値が空かどうか？二つのパスワードはあっているか？問題なければそのまま進む
    if name == '' or email =='' or password1 == '' or password2 == '':
        flash('空のフォームがあるようです')
    elif password1 != password2:
        flash('二つのパスワードの値が違っています')
    else:
        #パスワードを暗号化して変数に格納
        uid = uuid.uuid4()
        password = hashlib.sha256(password1.encode('utf-8')).hexdigest()
        #Userクラスのインスタンスを作成
        user = User(uid, name, email, password)
        #modelsにデータを送る
        dbConnect.createUser(user)
        session['uid'] = uid
        #問題なければindex.htmlへとばす
        return redirect('/')
    return redirect('/signup')

    

@app.route('/login')
def login():
    return render_template('registration/login.html')

@app.route('/login', methods=['POST'])
def userLogin():
    #パラメーターを受け取る
    email = request.form.get('email')
    password = request.form.get('password')

    #値が空かどうかの精査をする。空であればloginへ
    if email =='' or password == '':
        flash('空のフォームがあるようです')
    else:
        user = dbConnect.getUser(email)
        if user is None:
            flash('このユーザーは存在しません')
        else:
            hashPassword = hashlib.sha256(password.encode('utf-8')).hexdigest()
            if hashPassword != user["password"]:
                flash('パスワードが間違っています！')
            else:
                session['uid'] = user["uid"]
                return redirect('/')
    return redirect('/login')

@app.route('/logout')
def logout():
    session.clear()
    return redirect('/login')

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

@app.route('/delete/<cid>')
def delete_channel(cid):
    #　ここにdeleteの処理追加
    
    return 'ok'

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