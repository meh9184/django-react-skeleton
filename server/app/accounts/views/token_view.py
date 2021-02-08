from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

from app.accounts.models import User
from rest_framework_jwt.serializers import VerifyJSONWebTokenSerializer


class TokenView(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = VerifyJSONWebTokenSerializer
    permission_classes = [AllowAny]
