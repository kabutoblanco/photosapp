from photos_app.photo_app.models import Photo
from rest_framework import serializers


class PhotoSerializer(serializers.Serializer):
    id = serializers.IntegerField(default=-1)
    is_active = serializers.BooleanField(default=False)
    date_record = serializers.DateField(default='12/12/2021')
    date_update = serializers.DateField(default='12/12/2021')
    id_unplash = serializers.CharField()
    preview = serializers.CharField()
    favorite = serializers.BooleanField(default=False)


class PhotoModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Photo
        fields = '__all__'

    def create(self, validated_data):
        # Verify if exist a record photo equals id_unplash
        try:
            photo = Photo.objects.get(id_unplash=validated_data['id_unplash'])
            photo.favorite = True
            photo.save()
            return photo
        except:
            return super().create(validated_data)
        