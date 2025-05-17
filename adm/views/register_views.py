# adm/views.py
from django.http import JsonResponse
from django.views.decorators.http import require_POST
from django.contrib.auth.decorators import login_required
import json
from adm.utils import *


@login_required(login_url="adm:login")
@require_POST
def add_register_view(request):
    try:
        data = json.loads(request.body)
        registro = create_register(data)
        return JsonResponse({"status": "success", "id": registro.id})
    except Exception as e:
        return JsonResponse({"status": "error", "message": str(e)}, status=400)


@login_required(login_url="adm:login")
def get_register_view(request, id):
    try:
        register = get_register(id)
        if register.exists():
            data = {
                "id": register[0].id,
                "name": register[0].name,
                "phone": register[0].phone,
                "birth_date": register[0].birth_date,
                "document_type": register[0].document_type,
                "document": register[0].document,
                "adress": register[0].adress,
                "observations": register[0].observations,
                "category": register[0].category,
            }

            print(f"DATA:{data}")
            return JsonResponse({"status": "success", "data": data})
        else:
            return JsonResponse(
                {"status": "error", "message": "Register not found"}, status=404
            )
    except Exception as e:
        return JsonResponse({"status": "error", "message": str(e)}, status=400)


@login_required(login_url="adm:login")
@require_POST
def update_register_view(request, id):
    try:
        data = json.loads(request.body)
        update_register(id, data)
        return JsonResponse({"status": "success"})
    except Exception as e:
        return JsonResponse({"status": "error", "message": str(e)}, status=400)


@login_required(login_url="adm:login")
@require_POST
def delete_register_view(request, id):
    try:
        # Se quiser usar dados extras do corpo JSON, pode usar json.loads
        delete_register(id)
        return JsonResponse({"status": "success"})
    except Exception as e:
        return JsonResponse({"status": "error", "message": str(e)}, status=400)
