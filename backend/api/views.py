from .models import Employee
from .serializers import EmployeeSerializer
from rest_framework.generics import ListAPIView

class EmployeeList(ListAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer
