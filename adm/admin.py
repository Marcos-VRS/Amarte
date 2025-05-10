from django.contrib import admin
from .models import Register


class RegisterAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "birth_date",
        "phone",
        "document_type",
        "category",
        "created_at",
    )

    list_filter = ("document_type", "category", "created_at")

    search_fields = ("name", "birth_date", "document")

    fields = (
        "name",
        "birth_date",
        "phone",
        "document_type",
        "document",
        "adress",
        "observations",
        "category",
    )


admin.site.register(Register, RegisterAdmin)
