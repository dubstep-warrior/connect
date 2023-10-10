# Generated by Django 4.1.7 on 2023-02-25 06:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("account", "0003_alter_appuser_description_alter_appuser_profile_img"),
    ]

    operations = [
        migrations.AddField(
            model_name="appuser",
            name="status",
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name="appuser",
            name="description",
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name="appuser",
            name="learning",
            field=models.CharField(blank=True, max_length=3, null=True),
        ),
        migrations.AlterField(
            model_name="appuser",
            name="native",
            field=models.CharField(blank=True, max_length=3, null=True),
        ),
        migrations.AlterField(
            model_name="appuser",
            name="profile_img",
            field=models.FileField(blank=True, null=True, upload_to="profile_images"),
        ),
    ]
