"""retrieval_es URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
# from django.urls import path
from django.conf.urls import url
from kottle import views

urlpatterns = [
    url('admin/', admin.site.urls),

    url('^$', views.first_page),
    url('^login_verify$', views.login_verify),

    url('^update_person_info$', views.want_update),
    url('^update_user$', views.update_user),

    # url('^person_info$', views.person_info),

    url('^todo_list$', views.thins_todo),
    url('^add_todo$', views.add_todo),
    # url('^update_todo$', views.update_todo),
]