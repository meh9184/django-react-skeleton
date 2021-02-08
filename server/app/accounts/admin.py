from django.contrib import admin
from .models.user import User


class UserAdmin(admin.ModelAdmin):
    list_display = (
        'email',
        'full_name',
        'created_at',
        'updated_at',
        'is_active',
        'is_staff',
    )


admin.site.register(User, UserAdmin)
