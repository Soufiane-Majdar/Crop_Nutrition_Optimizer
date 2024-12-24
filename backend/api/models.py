from django.db import models

class SoilType(models.Model):
    id = models.CharField(max_length=50, primary_key=True)
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)

class CropType(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)

class Recommendation(models.Model):
    soil_type = models.ForeignKey(SoilType, on_delete=models.CASCADE)
    crop_type = models.ForeignKey(CropType, on_delete=models.CASCADE)
    product = models.CharField(max_length=200)
    description = models.TextField()
    dosage = models.CharField(max_length=100)
    
class YieldData(models.Model):
    soil_type = models.ForeignKey(SoilType, on_delete=models.CASCADE)
    crop_type = models.ForeignKey(CropType, on_delete=models.CASCADE)
    current_yield = models.FloatField()
    potential_yield = models.FloatField() 