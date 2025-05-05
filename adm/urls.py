from django.urls import path
from adm import views
from django.conf import settings
from django.conf.urls.static import static

app_name = "adm"

urlpatterns = [
    # Index
    path("", views.index, name="index"),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
