import requests


url = 'https://translate.google.com/translate_a/single'
headers = {'User-Agent': ("Mozilla/5.0 (X11; Linux x86_64)" +
                          " AppleWebKit/537.36 (KHTML, like Gecko')" +
                          " Chrome/47.0.2526.106 Safari/537.36"),
           'accept': '*/*',
           'accept-encoding': ['gzip', 'deflate', 'sdch'],
           'cache-control': 'max-age=0',
           'x-client-data': 'CKO2yQEI35TKAQj9lcoB',
           'referer': 'https://translate.google.com/'}

data = {'client': 'p',
        'sl': 'en',
        'tl': 'vi',
        'hl': 'en',
        'dt': ['md', 'ex'],
        # 'dt': ['md', 'at', 'ss', 't', 'rm', 'rw', 'qca', 'ld', 'ex', 'bd'],
        'ie': 'UTF-8',
        'oe': 'UTF-8',
        'source': 'bh',
        'ssel': '0',
        'tsel': '0',
        'kc': '1',
        'tco': '2',
        'q': 'feature'}

s = requests.Session()
res = s.post(url, data=data, headers=headers)
# print res.request.headers
print res.status_code
# print res.headers['content-type']
try:
    res.json()
except:
    print "gotcha"
print res.content
