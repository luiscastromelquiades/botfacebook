import os

class Config(object):
	SECRET_KEY = 'my_secret_key'
	PAGE_ACCESS_TOKEN = 'EAAG3Qm0OSAIBALseZChBVeXL4L7rlZBxzmoAED0TnUZBlBP0aB4AHgUecAruOIHj2Deg6XM6GLI1jRhulxphzHZA195FWMeK1nQbCJNDkG4EdHywnzgCjH1HD0lkWEl3tZAYLhZCMV5hROaIkr4YCYcn45iJi8Od3T7fYEUIgwrgZDZD'
	USER_GEONAMES = 'luisenrique.c' #os.environ.get('USER_GEONAMES')
class DevelopmentConfig(Config):
	DEBUG = True
