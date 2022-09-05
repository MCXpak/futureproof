import turtle as t
from random import randint

t.speed(0)
      
def randBool():
  num = randint(0,100)
  if num % 2 == 0:
    return True
  else:
    return False

def generateMaze():
  t.pu()
  t.setpos(-100,-100)
  t.pd()
  for i in range(10):
    t.pu()
    t.setpos(0,i*20)
    for i in range(10):
      if randBool():
        t.pd()
      else:
        t.pu()
      t.fd(20)
      t.pu()
  t.setpos(-100,-100)
  t.lt(90)
  t.pu()
  for i in range(10):
    t.pu()
    t.setpos(i*20,0)
    for i in range(10):
      if randBool():
        t.pd()
      else:
        t.pu()
      t.fd(20)
      t.pu()

generateMaze()

'''
screen = t.Screen()

def f():
  t.fd(50)

def l():
  t.lt(90)
  
def r():
  t.rt(90)
  
screen.onkey(f, "Up")
screen.onkey(l, "Left")
screen.onkey(r, "Right")
screen.listen()

'''
