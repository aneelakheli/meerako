from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import User
from .serializers import UserSerializer


@api_view(['GET'])
def ApiOverview(request):
    api_urls = {
        'Add': '/user',
        'Add': '/',
    }

    return Response(api_urls)
