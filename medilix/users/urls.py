from django.conf.urls import url
from django.views.decorators.csrf import csrf_exempt
from rest_framework.routers import DefaultRouter
from users import views
from .views import UserViewSet, custom_auth_token

router = DefaultRouter()
router.register(r'users', UserViewSet)

urlpatterns = router.urls

urlpatterns += [
    url(r'^custom-auth-token/$', csrf_exempt(custom_auth_token)),
    url(r'^create-user$', views.create_user),
    url(r'^update-user-profile$', views.update_user_profile),
    url(r'^create-event-card$', views.create_event_card),
    url(r'^get-event-cards$', views.get_event_cards),
    url(r'^get-doctors$', views.get_doctors),
    url(r'^get-profile-data$', views.get_profile_data),
    url(r'^create-notification$', views.create_notification),
    url(r'^get-notifications$', views.get_notifications),
    url(r'^approve-notification$', views.approve_notification),
    url(r'^decline-notification$', views.decline_notification),
    url(r'^get-appointments$', views.get_appointments),
    url(r'^get-current-appointment$', views.get_current_appointment),
    url(r'^get-specializations$', views.get_specializations),
    url(r'^get-hospitals$', views.get_hospitals),
    url(r'^submit-feedback$', views.submit_feedback),
    url(r'^get-feedbacks$', views.get_feedbacks),
    url(r'^get-permission-for-feedback$', views.get_permission_for_feedback),
    url(r'^save-blank$', views.save_blank),
    url(r'^complete-appointment$', views.complete_appointment),
    url(r'^get-medical-records$', views.get_medical_records)
]