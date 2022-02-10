from rest_framework.test import APITestCase, APIClient
from rest_framework import status
from model_mommy import mommy

from photos_app.photo_app.models import Photo
from photos_app.photo_app.serializers import PhotoModelSerializer


class TestApiPhoto(APITestCase):

    def setUp(self):
        self.client = APIClient()
        self.url = "/api/photo/"
        self.photo_1 = mommy.make(Photo)
        self.photo_2 = mommy.make(Photo)


    """Comprueba sí se realiza el registro exitoso de una foto
     con valores por defecto"""
    def test_create_photo(self):
        response = self.client.post(self.url, data=PhotoModelSerializer(self.photo_1).data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

        count = Photo.objects.filter(favorite=True).count()
        self.assertEquals(1, count)


    """Comprueba sí el uso de un POST Photo a un registro existente actualiza el dato
    en vez de generar uno nuevo o fallar en el intento"""
    def test_create_photo_equal_record(self):
        data_ = PhotoModelSerializer(self.photo_1).data
        data_.favorite = False

        self.client.post(self.url, data=data_, format='json')

        data_.favorite = True
        response = self.client.post(self.url, data=data_, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

        count = Photo.objects.filter(favorite=True).count()
        self.assertEquals(1, count)

    
    """Comprueba sí el uso de un PATCH Photo a un registro existente para remover 
    un Photo favorito actualiza el dato en vez de eliminarlo fisicamente"""
    def test_remove_favorite(self):
        data_ = PhotoModelSerializer(self.photo_1).data

        self.client.post(self.url, data=PhotoModelSerializer(self.photo_1).data, format='json')
        self.client.post(self.url, data=PhotoModelSerializer(self.photo_2).data, format='json')

        data_.favorite = False

        response = self.client.patch(self.url + self.photo_1.id_unplash + '/', data=data_, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        count = Photo.objects.filter().count()
        count_favorite = Photo.objects.filter(favorite=True).count()
        
        # Verifica que aún existan dos registros en total 
        self.assertEquals(2, count)
        # Verifica que una Photo se haya removido como favorita
        self.assertEquals(1, count_favorite)