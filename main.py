import flask
from threading import Thread
from flask import Flask, redirect, url_for, render_template








import flask
from gevent.pywsgi import WSGIServer
from threading import Thread
from flask import request, jsonify, render_template

app = flask.Flask(__name__, template_folder='pages')

@app.route('/', methods=['GET'])
def home():
  return render_template('home.html')

@app.route('/about', methods=['GET'])
def about():
  return render_template('about.html')

@app.route('/contact', methods=['GET'])
def contact():
  return render_template('contact.html')

@app.route('/projects/robocollab', methods=['GET'])
def robocollab():
  return render_template('robocollab.html')

@app.route('/projects/zlyce', methods=['GET'])
def zlyce():
  return render_template('zlyce.html')

@app.route('/projects/z.net', methods=['GET'])
def znet():
  return render_template('znet.html')

@app.route('/projects/r.lol', methods=['GET'])
def rlol():
  return render_template('rlol.html')

@app.route('/projects/planned', methods=['GET'])
def planned():
  return render_template('planned.html')

@app.route('/projects/controlmanual', methods=['GET'])
def cm():
  return render_template('cm.html')

@app.errorhandler(404)
def page_not_found(e):
  return render_template('404.html'), 404

def run():
  http_server = WSGIServer(('0.0.0.0', 8080), app)
  http_server.serve_forever()


server = Thread(target=run)
server.start()

