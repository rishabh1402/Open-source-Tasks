import imp
from unicodedata import name
from django.urls import path
from . import views

urlpatterns = [
    path('', views.loginUser, name="login"),
    path('logout/', views.logoutUser, name="logout"),
    path('register/', views.registerUser, name="register"),
    
    path('gallery/', views.gallery, name='gallery'),
    path('photo/<str:pk>', views.viewImage, name='photo'),
    path('add/', views.addImage, name='add'),
    path('delete/<str:pk>/',views.deletePhoto,name='delete'),
]