from django.db import models

class Employee(models.Model):
    empName = models.CharField(max_length= 75)
    empDesignation = models.CharField(max_length= 50)
    empCTC = models.DecimalField(max_digits= 10, decimal_places=2)
    empAddress = models.CharField(max_length= 150)
    empMobile = models.CharField(max_length= 12)

