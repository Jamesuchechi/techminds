import turtle

# Screen Setup
screen = turtle.Screen()
screen.bgcolor("white")
screen.title("Christmas Tree")

pen = turtle.Turtle()
pen.speed(0)
pen.hideturtle()

# Functions

def draw_triangle(x, y, size):
    """Draw a centered filled triangle."""
    height = (size * (3 ** 0.5)) / 2

    pen.penup()
    pen.goto(x - size / 2, y - height / 3)
    pen.setheading(0)
    pen.pendown()

    pen.begin_fill()
    for _ in range(3):
        pen.forward(size)
        pen.left(120)
    pen.end_fill()


def draw_star(x, y, size):
    pen.penup()
    pen.goto(x, y)
    pen.setheading(90)
    pen.pendown()

    pen.pencolor("gold")

    for _ in range(5):
        pen.forward(size)
        pen.right(144)


def draw_ball(x, y, color):
    pen.penup()
    pen.goto(x, y)
    pen.dot(20, color)

# Tree

pen.fillcolor("green")

draw_triangle(0, 120, 100)
draw_triangle(0, 50, 150)
draw_triangle(0, -40, 200)


# Trunk

pen.fillcolor("saddlebrown")
pen.penup()
pen.goto(-20, -150)
pen.setheading(0)
pen.pendown()

pen.begin_fill()
for _ in range(2):
    pen.forward(40)
    pen.left(90)
    pen.forward(80)
    pen.left(90)
pen.end_fill()

# Star

draw_star(0, 170, 25)

# Decorations

draw_ball(0, 110, "red")
draw_ball(-30, 80, "blue")
draw_ball(30, 80, "yellow")

draw_ball(-45, 20, "purple")
draw_ball(0, 0, "cyan")
draw_ball(45, 20, "orange")

draw_ball(-60, -60, "yellow")
draw_ball(-20, -80, "red")
draw_ball(20, -80, "blue")
draw_ball(60, -60, "purple")

turtle.done()