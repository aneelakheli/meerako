from django.db.models import fields
from rest_framework import serializers
from .models import User


class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("email", "password")
