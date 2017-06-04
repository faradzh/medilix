from django.contrib import admin
from health.models import MedicalRecord
from users.models import Appointment, Notification, Feedback


class AppointmentAdmin(admin.ModelAdmin):
    pass


class NotificationAdmin(admin.ModelAdmin):
    pass


class MedicalRecordAdmin(admin.ModelAdmin):
    pass


class FeedbackAdmin(admin.ModelAdmin):
    pass


admin.site.register(Appointment, AppointmentAdmin)
admin.site.register(Notification, NotificationAdmin)
admin.site.register(MedicalRecord, MedicalRecordAdmin)
admin.site.register(Feedback, FeedbackAdmin)
