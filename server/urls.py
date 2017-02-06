from django.conf.urls import url, include
from rest_framework import routers
from server.app import views

router = routers.DefaultRouter()

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^patients/$', views.PatientViewSet.as_view({'get': 'list',
                                                   'post': 'create'})),
    url(r'^patients/(?P<patient>[0-9])/$',views.PatientViewSet.as_view(
                                                  {'get': 'list'})),
    url(r'^patients/(?P<patient>[0-9])/notes/$', views.NoteViewSet.as_view(
                                                  {'get': 'list',
                                                   'post': 'create'})),
    url(r'^patients/(?P<patient>[0-9])/notes/(?P<note>[0-9])/$',
                                             views.NoteViewSet.as_view(
                                                  {'get': 'list'})),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
