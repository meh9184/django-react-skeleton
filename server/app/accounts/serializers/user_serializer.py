from rest_framework import serializers

from app.accounts.models import User


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = (
            'email',
            'full_name',
            'created_at',
            'updated_at',
            'is_active',
            'is_staff',
        )
