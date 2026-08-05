def greet(name):
    print(f"Goodmorning chief, {name}!")
    print("Have a great day ahead!")

greet("Jason")
greet("Samuel")
greet("fawaz")
greet("Martins")
greet("Jeremy")

# return statement

def add_numbers(a, b):
    return a * b

print(add_numbers(5, 7))

# Local Variables

def demo():
    x = 10
    print(x)

demo()

age = 20

def show():
    print(age)

show()


age = 20

def show():
    print(age)

show()


def slap(name="Jason"):
    print("Slap the hell out of", name)
    print("beat him too if he resists")

slap()
slap("Samuel")