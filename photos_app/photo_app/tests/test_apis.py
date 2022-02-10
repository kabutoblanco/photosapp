from rest_framework.test import APITestCase, APIClient
from rest_framework import status
from model_mommy import mommy

from photos_app.photo_app.models import Photo


class TestApiUnsplash(APITestCase):

    def setUp(self):
        self.client = APIClient()
        self.url = "/api/photo/all/"
        self.photo_1 = mommy.make(Photo)
        self.photo_2 = mommy.make(Photo)


    """Comprueba sí la integración a la API Unsplash funciona correctamente
    En este caso traer cualquier elemento"""
    def test_get_photos_api(self):
        response = self.client.get(self.url, format='json')
        self.assertGreater(len(response.json()), 0)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    
    """Comprueba sí la integración a la API Unsplash funciona correctamente
    En este caso traer elementos que coincidan con la cadena de búsqueda 'futbol'"""
    def test_get_photos_by_query_api(self):
        response = self.client.get(self.url + 'futbol/', format='json')
        self.assertGreater(len(response.json()), 0)
        self.assertEqual(response.status_code, status.HTTP_200_OK)