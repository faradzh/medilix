from django.conf.urls import url
from medilix.main.views import Index

urlpatterns = [
    url(r'^$', Index.as_view(), name='index')
]