from django.db import models


class Register(models.Model):
    DOCUMENT_TYPE_CHOICES = [
        ("CPF", "CPF"),
        ("CNPJ", "CNPJ"),
        ("Passaporte", "Passaporte"),
    ]

    CATEGORY_CHOICES = [
        ("Alunos", "Alunos"),
        ("Professores", "Professores"),
        ("Fornecedores", "Fornecedores/Prestador de serviço"),
    ]

    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=11)
    birth_date = models.DateField(blank=True, null=True)
    document_type = models.CharField(
        max_length=50,
        choices=DOCUMENT_TYPE_CHOICES,
        blank=True,
        null=True,
    )
    document = models.CharField(max_length=14, blank=True, null=True)
    adress = models.CharField(max_length=100, blank=True, null=True)
    observations = models.TextField(max_length=10000, blank=True, null=True)
    category = models.CharField(
        max_length=50,
        choices=CATEGORY_CHOICES,
    )
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
