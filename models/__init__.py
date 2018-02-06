from pymongo import MongoClient
from user import User
from message import Message
from topic import Topic
import json
import os

def get_path():
    return os.path.dirname( os.path.realpath( __file__ ) )

def pluralize_class(instance):
    return "{class_name}s".format( class_name = instance.__class__.__name__ )

def load_data(model, folder = 'data'):
    path = "{path}/{folder}/{file_name}.json".format(
            path = get_path(),
            folder = folder,
            file_name = pluralize_class(model))

    with open('models/data/messages.json') as data:
        list_data = json.load(data)
        for json_data in list_data:
            model.save(json_data)

URL = 'localhost'
PORT = 27017
USER_COLLECTION = 'users'
MESSAGE_COLLECTION = 'messages'
TOPIC_COLLECTION = 'topics'

client = MongoClient(URL, PORT)
database = client.facebookbot

UserModel = User(database, USER_COLLECTION)
UserModel.delete_collection()#quitar acabando con usuarios

MessageModel = Message(database, MESSAGE_COLLECTION)
MessageModel.delete_collection()

TopicModel = Topic(database, TOPIC_COLLECTION)

load_data(MessageModel)
load_data(TopicModel)
