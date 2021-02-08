from django.conf.urls import include, url
from django.contrib import admin
from rest_framework.documentation import include_docs_urls


urlpatterns = [
    # Admin
    url(r'^admin/', admin.site.urls),

    # Docs
    url(r'^docs/', include_docs_urls(title='Django REST Boilerplate')),

    # API
    url(r'^', include('app.accounts.urls')),
]
