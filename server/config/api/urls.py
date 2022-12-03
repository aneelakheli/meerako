from django.urls import path

urlpatterns = [
    path('', views.ApiOverview, name='home')
]
