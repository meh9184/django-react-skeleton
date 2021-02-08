import uuid
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.db import models

from app.accounts.managers import UserManager


class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True)
    full_name = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'email'

    class Meta:
        app_label = 'accounts'
        verbose_name = 'user'
        verbose_name_plural = 'users'
        db_table = 'users'
        ordering = ('created_at',)

    def __str__(self):
        return self.full_name

    def save(self, *args, **kwargs):
        if not self.password:
            self.password = str(uuid.uuid4()).replace('-', '')
        super(User, self).save(*args, **kwargs)
