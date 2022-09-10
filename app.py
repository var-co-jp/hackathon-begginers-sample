from flask import Flask

app = Flask(__name__)

@app.route('/')
def test():
    return render_template('signup.html')

if __name__ == '__main__':
    app.run()