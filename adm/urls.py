from django.urls import path
from adm import views
from django.conf import settings
from django.conf.urls.static import static

app_name = "adm"

urlpatterns = [
    # Index
    path("", views.index, name="index"),
    path("Resumo/", views.summary, name="summary"),
    path("Registros/", views.register, name="register"),
    path("Financeiro/", views.finance, name="finance"),
    path("Calendário/", views.calendar, name="calendar"),
    path("Mensagens/", views.messages, name="messages"),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
