from django.contrib.auth.models import User
from rest_framework import viewsets, permissions, response

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