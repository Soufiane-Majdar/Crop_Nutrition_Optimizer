from rest_framework import serializers
from .models import SoilType, CropType, Recommendation, YieldData

class SoilTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = SoilType
        fields = '__all__'

class CropTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = CropType
        fields = '__all__'

class RecommendationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recommendation
        fields = '__all__'

class YieldDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = YieldData
        fields = '__all__' 