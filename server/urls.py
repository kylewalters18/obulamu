from django.conf.urls import url, include
from rest_framework import routers
from server.app import views

router = routers.DefaultRouter()
router.register(r'patients', views.PatientViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^notes/(?P<patient>.+)/$', 
        views.NoteViewSet.as_view({'get': 'list', 'post': 'create'})),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
