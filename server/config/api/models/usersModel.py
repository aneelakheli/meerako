from django.db import models


class User(models.Model):
    email = models.EmailField(max_length=50)
    password = models.CharField(min_length=6)

    def __str__(self) -> str:
        return self.email
