from django.contrib import admin
from users.models import Specialization, Procedure, Hospital


class SpecializationAdmin(admin.ModelAdmin):
    pass


class ProcedureAdmin(admin.ModelAdmin):
    pass


class HospitalAdmin(admin.ModelAdmin):
    pass

admin.site.register(Specialization, SpecializationAdmin)
admin.site.register(Procedure, ProcedureAdmin)
admin.site.register(Hospital, HospitalAdmin)