from flask import * 
import pymysql
import flask_login

app = Flask(__name__)



app.route("/")
def jump():
    return redirect("/login")


@app.route('/signup')
def signup():
    return render_template('registration/signup.html')

@app.route('/login')
def login():
    return render_template('registration/login.html')

@app.route('/index')
def index():
    return render_template('index.html')

@app.route('/detail')
def detail():
    return render_template('detail.html')

@app.route('/db')
def testDbConnection():
    db = pymysql.connect(
        host="localhost",
        db="chatapp",
        user="testuser",
        password="testuser",
        charset="utf8",
        cursorclass=pymysql.cursors.DictCursor
        )
    cur = db.cursor()
    sql = "select * from users;"
    cur.execute(sql)
    users = cur.fetchall()

    cur.close()
    db.close()

    return render_template('hello.html', title='データベースのテスト', users=users)
    
if __name__ == '__main__':
    app.run()