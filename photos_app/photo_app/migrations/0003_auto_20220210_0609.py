# Generated by Django 3.1.7 on 2022-02-10 11:09

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('photo_app', '0002_auto_20220210_0446'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='photo',
            options={'get_latest_by': 'date_record', 'ordering': ['-date_update', '-date_record']},
        ),
    ]
