# Photosapp | Electronika
Aplicación para visualizar imagenes desde el API de Unsplash, marcar favoritas y ver detalles.

Para la ejecución de pruebas, nos ubicamos dentro de la raíz del proyecto y ejecutamos:
```
python manage.py test photos_app/photo_app/test
```

La app cuenta con 4 funcionalidades principales:

1. Listar imagenes
2. Marcar y desmascar imagenes favoritas
3. Listar imagenes favoritas
4. Ver detalles de imagenes
5. Búscar imagenes por una query

Todas las consultas hacia el API externa de Unsplash se realizan desde el servidor Django, en el modulo de photo_app, especificamente en el archivo service.py.
