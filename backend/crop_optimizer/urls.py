from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.routers import DefaultRouter
from api.views import (
    SoilTypeViewSet,
    CropTypeViewSet,
    RecommendationViewSet,
    YieldDataViewSet
)

router = DefaultRouter()
router.register(r'soil-types', SoilTypeViewSet)
router.register(r'crop-types', CropTypeViewSet)
router.register(r'recommendations', RecommendationViewSet, basename='recommendations')
router.register(r'yield-data', YieldDataViewSet, basename='yield-data')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT) 