from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.contrib.auth import logout
from django.shortcuts import redirect

# Create your views here.


def login_view(request):
    return render(request, "adm/login.html", {})


@login_required(login_url="adm:login")
def logout_view(request):
    logout(request)
    return redirect("adm:login")
