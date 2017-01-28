from django.db import models

class Patient(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    address = models.CharField(max_length=60)
    dob = models.DateField(default='1984-01-01')


class Medication(models.Model):
    name = models.CharField(max_length=30)
    dosage = models.CharField(max_length=100)
    reason = models.CharField(max_length=200)
    instructions = models.CharField(max_length=1000)
    date_prescribed = models.DateField(default='2016-11-16')
    patient = models.ForeignKey(Patient, related_name='medications', on_delete=models.CASCADE)


class Visit(models.Model):
    date = models.DateField('2016-11-16')
    notes = models.CharField(max_length=1000)
    patient = models.ForeignKey(Patient, related_name='visits', on_delete=models.CASCADE)


class Treatment(models.Model):
    date = models.DateField(default='2016-11-16')
    description = models.CharField(max_length=2000)
    patient = models.ForeignKey(Patient, related_name='treatments', on_delete=models.CASCADE)

class Note(models.Model):
    datetime = models.DateTimeField(default='2017-01-28T09:32:00')
    note = models.CharField(max_length=2000)
    patient = models.ForeignKey(Patient, related_name='notes', on_delete=models.CASCADE)
