from requests import Session


url = "http://translate.google.com/translate_a/t"

data = {'client': 'p',
        'ie': 'UTF-8',
        'oe': 'UTF-8',
        'sl': 'en',
        'tl': 'vi',
        'dt': ['md'],
        'q': 'home'}

s = Session()
res = s.post(url, data=data)

print res.json()
