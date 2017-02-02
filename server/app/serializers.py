from rest_framework import serializers
from server.app.models import Patient, Medication, Visit, Treatment, Note


class MedicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Medication
        fields = ('id', 'name', 'dosage', 'reason', 'instructions', 'date_prescribed')


class VisitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Visit
        fields = ('id', 'date', 'notes')

class TreatmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Treatment
        fields = ('id', 'description')

class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = ('id', 'datetime', 'note', 'patient')

class PatientSerializer(serializers.ModelSerializer):
    medications = MedicationSerializer(many=True)
    visits = VisitSerializer(many=True)
    treatments = TreatmentSerializer(many=True)

    class Meta:
        model = Patient
        fields = ('id',
                  'first_name',
                  'last_name',
                  'address',
                  'dob',
                  'medications',
                  'visits',
                  'treatments')

    def create(self, validated_data):
        medications_data = validated_data.pop('medications')
        visits_data = validated_data.pop('visits')
        treatments_data = validated_data.pop('treatments')
        patient = Patient.objects.create(**validated_data)

        for medication_data in medications_data:
            Medication.objects.create(patient=patient, **medication_data)

        for visit_data in visits_data:
            Visit.objects.create(patient=patient, **visit_data)

        for treatment_data in treatments_data:
            Treatment.objects.create(patient=patient, **treatment_data)

        return patient
