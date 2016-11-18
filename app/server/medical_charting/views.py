from rest_framework import viewsets
from server.medical_charting.serializers import PatientSerializer
from server.medical_charting.models import Patient


class PatientViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer
