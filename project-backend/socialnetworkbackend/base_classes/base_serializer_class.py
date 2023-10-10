from rest_framework import serializers

"""
Base serializer class allowing for field arguments when instantiating the serializer
"""
class DynamicFieldsModelSerializer(serializers.ModelSerializer): 

    def __init__(self, *args, **kwargs): 
        fields = kwargs.pop('fields', None) 
 
        super().__init__(*args, **kwargs)

        if fields is not None: 
            allowed = set(fields)
            existing = set(self.fields)
            for field_name in existing - allowed:
                self.fields.pop(field_name)