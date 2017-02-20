from rest_framework import viewsets, status
from rest_framework.response import Response
from server.app.serializers import PatientSerializer, NoteSerializer
from server.app.models import Patient, Note


class PatientViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows patients to be viewed or created.
    """
    serializer_class = PatientSerializer

    def get_queryset(self):
        if 'patient' in self.kwargs:
            patientId = self.kwargs['patient']
            return Patient.objects.filter(id=patientId)
        else:
            return Patient.objects.all()

class NoteViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows notes to be viewed or created.
    """
    serializer_class = NoteSerializer

    def get_queryset(self):
        patientId = self.kwargs['patient']
        if 'note' in self.kwargs:
            noteId = self.kwargs['note']
            return Note.objects.filter(patient__id=patientId).filter(id=noteId).order_by('-datetime')
        else:
            return Note.objects.filter(patient__id=patientId).order_by('-datetime')
