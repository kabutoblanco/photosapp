from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .api import PhotoFavoriteModelViewSet, PhotoViewSet, PhotoRetriewSet

router = DefaultRouter()
router.register('photo/all', PhotoViewSet, basename='all')
router.register('photo', PhotoFavoriteModelViewSet, basename='favorite')

urlpatterns = [
    path('api/photo/self/<str:pk>/', PhotoRetriewSet.as_view()),
    path('api/', include((router.urls, 'photo_app'))),
]