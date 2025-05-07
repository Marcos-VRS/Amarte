from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from django.urls import reverse


# @login_required(login_url="adm:login")
def index(request):
    username = request.user.username

    context = {username}

    return render(request, "adm/index.html", {"context": context})


# @login_required(login_url="adm:login")
def summary(request):
    username = request.user.username

    context = {username}

    return render(request, "adm/partials/_summary.html", {"context": context})
