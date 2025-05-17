from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from django.urls import reverse

from adm.models import Register


@login_required(login_url="adm:login")
def index(request):
    username = request.user.username
    print(f"\nUsername:{username}\n")

    context = {username}
    return render(request, "adm/index.html", {"context": context})


@login_required(login_url="adm:login")
def summary(request):
    username = request.user.username

    context = {username}
    print(f"\nContext:{context}\n")

    return render(request, "adm/partials/_summary.html", {"context": context})


@login_required(login_url="adm:login")
def register(request):
    username = request.user.username

    all_registers = Register.objects.all().order_by("-created_at")
    print(f"\nAll registers:{all_registers}\n")

    return render(
        request,
        "adm/partials/_register.html",
        {"username": username, "all_registers": all_registers},
    )


@login_required(login_url="adm:login")
def finance(request):
    username = request.user.username

    context = {username}
    print(f"\nContext:{context}\n")
    return render(request, "adm/partials/_finance.html", {"context": context})


@login_required(login_url="adm:login")
def calendar(request):
    username = request.user.username

    context = {username}
    print(f"\nContext:{context}\n")
    return render(request, "adm/partials/_calendar.html", {"context": context})


@login_required(login_url="adm:login")
def messages(request):
    username = request.user.username

    context = {username}
    print(f"\nContext:{context}\n")
    return render(request, "adm/partials/_messages.html", {"context": context})
