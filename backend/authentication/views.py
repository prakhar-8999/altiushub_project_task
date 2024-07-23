from django.shortcuts import render
from django.http import JsonResponse
import json
from .models import User, tasks
import base64;  



# Create your views here.
def register(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        check = User.objects.filter(email=data['email']).exists() # checks if email already exists or not.
        if check:
            return JsonResponse({'msg': 'email already exists!'}, status=409)
        else:
            passwd = base64.b64encode(data['password'].encode('utf8')) # password encoding
            User.objects.create(name=data['name'], age=data['age'], email=data['email'], password=passwd) # if everythig is correct user will be created
        return JsonResponse({'msg': 'data saved successfully'}, status=200)
    else:
        return JsonResponse({'msg': 'Invalid request method!'}, status=400)

def login(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        check = User.objects.filter(email=data['email']).exists() # check if user exists or not !!
        if not check:
            return JsonResponse({'msg': "User doesn't exists!"}, status=409)
        else:
            passwd = base64.b64encode(data['password'].encode('utf8'))
            user = list(User.objects.filter(email=data['email']).values())
            print(user[0]['password'])
            print(passwd)
            if(passwd != user[0]['password']):  # match for the correct password
                return JsonResponse({'msg': 'Invalid Password !!'}, status=409)
            return JsonResponse({'msg': 'user is valid'}, status=200) # if everything is correct user will be logged in
    else:
        return JsonResponse({'msg': 'Invalid request method!'}, status=400)
    

def addTask(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        tasks.objects.create(task=data['task'], task_status='PENDING') # At the time of task creation initially task status will be pending
        return JsonResponse({'msg': 'data saved successfully'}, status=200)
    else:
        return JsonResponse({'msg': 'Invalid request method!'}, status=400)
    
def getAlltask(request):
    if request.method == 'GET':
        task_data = list(tasks.objects.all().values()) # fetching all tasks
        return JsonResponse({'data': task_data}, status=200)
    else:
        return JsonResponse({'msg': 'Invalid request method!'}, status=400)