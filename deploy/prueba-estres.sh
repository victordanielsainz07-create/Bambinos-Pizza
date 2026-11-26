#!/bin/bash
# Pruebas de estrés al servidor Nginx de Bambinos Pizza en AWS EC2
# Ejecutar en AWS CloudShell (o cualquier Linux con ApacheBench)
sudo dnf install -y -q httpd-tools   # instala "ab" (ApacheBench)

H=ec2-23-22-116-217.compute-1.amazonaws.com

echo "== PRUEBA 1: 10000 peticiones, 100 concurrentes (index.html) =="
ab -n 10000 -c 100 http://$H/

echo "== PRUEBA 2: 20000 peticiones, 500 concurrentes (index.html) =="
ab -n 20000 -c 500 http://$H/

echo "== PRUEBA 3: 1000 peticiones, 50 concurrentes (imagen PIZZA1.jpeg, 312 KB) =="
ab -n 1000 -c 50 -s 60 http://$H/assets/images/PIZZA1.jpeg

echo "== PRUEBA 4 (sostenida): 60 segundos, 200 concurrentes (index.html) =="
ab -t 60 -n 5000000 -c 200 http://$H/
