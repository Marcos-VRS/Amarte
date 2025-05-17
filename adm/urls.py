from django.urls import path
from adm import views
from django.conf import settings
from django.conf.urls.static import static

app_name = "adm"

urlpatterns = [
    # login/logout
    path("logout/", views.logout_view, name="logout"),
    path("login/", views.login_view, name="login"),
    # Index
    path("", views.index, name="index"),
    path("Resumo/", views.summary, name="summary"),
    path("Registros/", views.register, name="register"),
    path("Financeiro/", views.finance, name="finance"),
    path("Calendário/", views.calendar, name="calendar"),
    path("Mensagens/", views.messages, name="messages"),
    # Register
    path("api/add-register/", views.add_register_view, name="add_register"),
    path(
        "api/delete-register/<int:id>/",
        views.delete_register_view,
        name="delete_register",
    ),
    path(
        "api/get-register/<int:id>/",
        views.get_register_view,
        name="get_register",
    ),
    path(
        "api/update-register/<int:id>/",
        views.update_register_view,
        name="update_register",
    ),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
