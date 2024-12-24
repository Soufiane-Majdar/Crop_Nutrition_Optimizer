from rest_framework import viewsets
from rest_framework.response import Response
from .models import SoilType, CropType, Recommendation, YieldData
from .serializers import (
    SoilTypeSerializer, 
    CropTypeSerializer,
    RecommendationSerializer,
    YieldDataSerializer
)

class SoilTypeViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = SoilType.objects.all()
    serializer_class = SoilTypeSerializer

class CropTypeViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = CropType.objects.all()
    serializer_class = CropTypeSerializer

class RecommendationViewSet(viewsets.ViewSet):
    def create(self, request):
        soil_type = request.data.get('soilType')
        crop_type = request.data.get('cropType')
        
        recommendations = Recommendation.objects.filter(
            soil_type=soil_type,
            crop_type=crop_type
        )
        serializer = RecommendationSerializer(recommendations, many=True)
        return Response(serializer.data)

class YieldDataViewSet(viewsets.ViewSet):
    def create(self, request):
        soil_type = request.data.get('soilType')
        crop_type = request.data.get('cropType')
        
        yield_data = YieldData.objects.get(
            soil_type=soil_type,
            crop_type=crop_type
        )
        serializer = YieldDataSerializer(yield_data)
        return Response(serializer.data) 