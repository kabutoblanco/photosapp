from django.conf import settings

import requests


def get_photos(query=None):
    session = requests.Session()
    session.headers.update({'Authorization': 'Client-ID ' + settings.CLIENT_ID, 'Accept-Version': 'v1'})
    if query:
        r = session.get(settings.API_UNPLASH + '/search/photos?query=' + query)
    else:
        r = session.get(settings.API_UNPLASH + '/photos?per_page=50')
    if r.status_code == 200:
        return r.json()