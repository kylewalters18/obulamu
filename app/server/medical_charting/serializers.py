from rest_framework import serializers
from server.medical_charting.models import Patient


class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = ('id', 'first_name', 'last_name', 'age')
