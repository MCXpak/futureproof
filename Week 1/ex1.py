values = []

for i in range(3):
    values.append(input("Input a value: "))

if "elephant" in values:
    print("This is a very angry message")
elif values[0] == values[1] == values[2]:
    print("What...why?")
else:
    shortestWord = values[0]
    for i in range(len(values)-1):
        if values[i] > values[i+1]:
            shortestWord = values[i+1]
    print(shortestWord)
            


