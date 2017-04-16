from django.contrib.auth.models import User
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from io import BytesIO
from rest_framework import viewsets, permissions, response
from rest_framework.parsers import JSONParser
from users.serializers import UserSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def retrieve(self, request, pk=None, *args, **kwargs):
        if pk == 'i':
            serialised_user = UserSerializer(request.user, context={'request': request})
            return response.Response(serialised_user.data)
        return super(UserViewSet, self).retrieve(request, pk)


@csrf_exempt
def create_user(request):
    if request.method == 'POST':
        user_serializer = UserSerializer(data=request.POST)
        if user_serializer.is_valid():
            user_serializer.create(user_serializer.data)
            return JsonResponse(user_serializer.data, status=201)
        return JsonResponse(user_serializer.errors, status=400)
