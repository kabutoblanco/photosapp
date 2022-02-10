from django.db import models

from utils.models import BaseModel

class Photo(BaseModel):
    id_unplash = models.CharField(max_length=255)
    preview = models.CharField(max_length=255)
    #fullview = models.CharField(max_length=255)
    favorite = models.BooleanField(default=False)
    #description = models.CharField(max_length=255)