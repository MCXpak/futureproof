from random import choice
from random import randint
import turtle as t

def createBlobs():
  for i in range(50):
    c = choice(['red', 'green', 'yellow', 'blue', 'pink'])
    size = randint(0,60)
    t.pu()
    t.setpos(randint(-100,100),randint(-100,100))
    t.pd()
    blob(size, c)

def blob(size, color):
  t.color(color)
  t.begin_fill()
  t.circle(size)
  t.end_fill()

while True:
  createBlobs()
  t.clear()
