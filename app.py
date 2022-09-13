from flask import Flask, render_template


app = Flask(__name__)

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

if __name__ == '__main__':
    app.run()