from django.contrib import admin
from .models import SoilType, CropType, Recommendation, YieldData

@admin.register(SoilType)
class SoilTypeAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'description')
    search_fields = ('name', 'description')

@admin.register(CropType)
class CropTypeAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'description')
    search_fields = ('name', 'description')

@admin.register(Recommendation)
class RecommendationAdmin(admin.ModelAdmin):
    list_display = ('product', 'soil_type', 'crop_type', 'dosage')
    list_filter = ('soil_type', 'crop_type')
    search_fields = ('product', 'description')

@admin.register(YieldData)
class YieldDataAdmin(admin.ModelAdmin):
    list_display = ('soil_type', 'crop_type', 'current_yield', 'potential_yield')
    list_filter = ('soil_type', 'crop_type') 