# 5. Напишите программу, которая принимает на вход координаты
# двух точек и находит расстояние между ними в 2D пространстве.
# https://ru.onlinemschool.com/math/library/analytic_geometry/point_point_length/
# in
# - 3
# - 6
# - 2
# - 1
# out
# 5.099

x1 = int(input())
y1 = int(input())
x2 = int(input())
y2 = int(input())

AB = ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** 0.5

print(round(AB, 3))
