from adm.models import Register


def create_register(data):

    return Register.objects.create(
        name=data.get("name"),
        phone=data.get("phone"),
        birth_date=data.get("birth_date"),
        document_type=data.get("document_type"),
        document=data.get("document"),
        adress=data.get("adress"),
        observations=data.get("observations"),
        category=data.get("category"),
    )


def delete_register(register_id):
    return Register.objects.filter(id=register_id).delete()


def get_register(register_id):
    return Register.objects.filter(id=register_id)


def update_register(register_id, data):
    register = Register.objects.get(id=register_id)
    register.name = data.get("name")
    register.phone = data.get("phone")
    register.birth_date = data.get("birth_date")
    register.document_type = data.get("document_type")
    register.document = data.get("document")
    register.adress = data.get("adress")
    register.observations = data.get("observations")
    register.category = data.get("category")
    register.save()
