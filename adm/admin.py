from django.contrib import admin
from .models import Register


class RegisterAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "owner",
        "birth_date",
        "phone",
        "document_type",
        "category",
        "created_at",
    )

    list_filter = ("document_type", "category", "created_at", "owner")

    search_fields = ("name", "owner", "birth_date", "document")

    fields = (
        "name",
        "owner",
        "birth_date",
        "phone",
        "document_type",
        "document",
        "adress",
        "observations",
        "category",
    )


admin.site.register(Register, RegisterAdmin)
