from rest_framework import viewsets, status
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

        if not recommendations.exists():
            # Return soil-specific default recommendations
            default_recommendations = [
                {
                    'product': f'Standard {soil_type.title()} Soil Fertilizer',
                    'description': f'Basic nutrition optimized for {soil_type} soil',
                    'dosage': '200 kg/ha'
                },
                {
                    'product': 'Soil Enhancer',
                    'description': 'General purpose soil improvement supplement',
                    'dosage': '100 kg/ha'
                }
            ]
            return Response(default_recommendations)

        serializer = RecommendationSerializer(recommendations, many=True)
        return Response(serializer.data)

class YieldDataViewSet(viewsets.ViewSet):
    def create(self, request):
        soil_type = request.data.get('soilType')
        crop_type = request.data.get('cropType')
        
        try:
            yield_data = YieldData.objects.get(
                soil_type=soil_type,
                crop_type=crop_type
            )
            serializer = YieldDataSerializer(yield_data)
            return Response(serializer.data)
        except YieldData.DoesNotExist:
            # Return soil-type specific default yield data
            soil_type_yields = {
                'clay': {'current': 65, 'potential': 85},
                'sandy': {'current': 55, 'potential': 75},
                'loam': {'current': 75, 'potential': 95},
                'silt': {'current': 70, 'potential': 90}
            }
            
            default_yield_data = soil_type_yields.get(soil_type, {
                'current_yield': 60.0,
                'potential_yield': 80.0
            })
            
            return Response(default_yield_data) 