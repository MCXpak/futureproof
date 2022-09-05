import turtle as t
from random import choice

t.shape("turtle")

while True:
  shape = input("Enter shape ")
  size = int(input("Enter size "))
  colour = input("Enter colour ")
  
  t.clear()
  t.color(colour)
  
  if shape == "square":
    for i in range(4):
      t.fd(size)
      t.lt(90)
  elif shape == "circle":
    t.circle(size)
  elif shape == "triangle":
    for i in range(3):
      t.fd(size)
      t.lt(120)
