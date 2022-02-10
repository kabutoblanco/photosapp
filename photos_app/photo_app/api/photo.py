from rest_framework import viewsets, generics
from rest_framework.response import Response
from photos_app.photo_app.models import Photo
from photos_app.photo_app.serializers import PhotoSerializer, PhotoModelSerializer
from photos_app.photo_app.service import get_photo, get_photos


class PhotoRetriewSet(generics.RetrieveAPIView):
    def retrieve(self, request, *args, **kwargs):
        pk = kwargs['pk']
        photo = get_photo(pk)
        if Photo.objects.filter(id_unplash=pk, favorite=True).exists():
            photo['favorite'] = True  
        else: 
            photo['favorite'] = False
        return Response(photo)
        

class PhotoViewSet(viewsets.ViewSet):
    def retrieve(self, request, *args, **kwargs):
        query = kwargs['pk']
        photos = get_photos(query)['results']
        photos = [PhotoSerializer({'id_unplash': x['id'], 'preview': x['urls']['small'], 'favorite': True}).data if Photo.objects.filter(id_unplash=x['id'], favorite=True).exists() else PhotoSerializer({'id_unplash': x['id'], 'preview': x['urls']['small']}).data for x in photos]
        return Response(photos)

    def list(self, request):
        photos = get_photos()
        photos = [PhotoSerializer({'id_unplash': x['id'], 'preview': x['urls']['small'], 'favorite': True}).data if Photo.objects.filter(id_unplash=x['id'], favorite=True).exists() else PhotoSerializer({'id_unplash': x['id'], 'preview': x['urls']['small']}).data for x in photos]
        return Response(photos)


class PhotoFavoriteModelViewSet(viewsets.ModelViewSet):
    queryset = Photo.objects.filter(favorite=True)
    serializer_class = PhotoModelSerializer

    def get_object(self):
        return Photo.objects.get(id_unplash=self.kwargs['pk'])
