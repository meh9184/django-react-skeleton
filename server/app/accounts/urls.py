from django.urls import path
from django.conf.urls import url, include
from rest_framework import routers

from rest_framework_jwt.views import obtain_jwt_token
from rest_framework_jwt.views import refresh_jwt_token
from rest_framework_jwt.views import verify_jwt_token

from app.accounts.views import UserViewSet

router = routers.DefaultRouter()
router.register(r'users', UserViewSet)

urlpatterns = [
    path('tokens/', obtain_jwt_token),
    path('tokens/refresh', refresh_jwt_token),
    path('tokens/verify', verify_jwt_token),

    url(r'^', include(router.urls)),
]
