from django.db import models

class SoilType(models.Model):
    id = models.CharField(max_length=50, primary_key=True)
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.name

class CropType(models.Model):
    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.name

class Recommendation(models.Model):
    id = models.BigAutoField(primary_key=True)
    soil_type = models.ForeignKey(SoilType, on_delete=models.CASCADE)
    crop_type = models.ForeignKey(CropType, on_delete=models.CASCADE)
    product = models.CharField(max_length=200)
    description = models.TextField()
    dosage = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.product} for {self.crop_type.name} in {self.soil_type.name}"

class YieldData(models.Model):
    id = models.BigAutoField(primary_key=True)
    soil_type = models.ForeignKey(SoilType, on_delete=models.CASCADE)
    crop_type = models.ForeignKey(CropType, on_delete=models.CASCADE)
    current_yield = models.FloatField()
    potential_yield = models.FloatField()

    def __str__(self):
        return f"Yield data for {self.crop_type.name} in {self.soil_type.name}"

    class Meta:
        verbose_name_plural = 'Yield Data' 