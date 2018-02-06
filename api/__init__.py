# -*- coding: utf-8 -*-
import requests
import json

def get_data():
    data = {
        'setting_type': 'call_to_actions',
        'thread_state': 'new_thread',
        'call_to_actions': [{"payload":"USER_DEFINED_PAYLOAD"}]
    }
    return data

def get_greeting_text():
    data = {
        "setting_type":"greeting",
        "greeting":{
            "text":"Estas con el BOT de Luis Enrique"
        }
    }
    return data

#Checked
def call_geoname_API(lat, lng, username):
    res = requests.get('http://api.geonames.org/findNearByWeatherJSON',
        params = { 'lat': lat, 'lng' : lng, 'username': username} )
    if res.status_code == 200:
        data = json.loads(res.text)
        temperature = data['weatherObservation']['temperature']
        city = data['weatherObservation']['stationName']
        return {'city' : city, 'temperature' : temperature}
#Checked
def call_send_API( data, token):
    res = requests.post('https://graph.facebook.com/v2.6/me/messages',
        params = {'access_token': token},
        data = json.dumps(data),
        headers = { 'Content-type': 'application/json' }
        )
    if res.status_code == 200:
        print "El mensaje fue enviado exitosamente!"
    else:
        print res.text
#Checked
def call_user_API( user_id, token):
    res = requests.get('https://graph.facebook.com/v2.6/' + user_id,
        params = { 'access_token': token} )
    data = json.loads(res.text)
    return data

#Checked
def call_set_started_button(token):
    res = requests.post('https://graph.facebook.com/v2.6/me/thread_settings',
    params = {'access_token': token},
    data = json.dumps(get_data()),
    headers = { 'Content-type': 'application/json' }
    )
    if res.status_code == 200:
        print(json.loads(res.text))
#funcion para quitar el boton de empezar en la conversación
def call_delete_started_button(token):
    res = requests.delete('https://graph.facebook.com/v2.6/me/thread_settings',
        params = {'access_token': token},
        data = json.dumps(get_data()),
        headers = { 'Content-type': 'application/json' }
        )
    if res.status_code == 200:
        print(json.loads(res.text))

def greeting_text(token):
    res = requests.post('https://graph.facebook.com/v2.6/me/thread_settings',
        params = {'access_token': token},
        data = json.dumps(get_greeting_text()),
        headers = { 'Content-type': 'application/json' }
        )
    if res.status_code == 200:
        print(json.loads(res.text))
