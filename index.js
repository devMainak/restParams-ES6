const restExample = (a, b, ...rest) => {
  console.log(a)
  console.log(b)
  console.log(rest)
}

restExample(1, 2, 3, 4, 5, 6)

const concatenateStrings = (...strings) => strings.join(" ")

console.log(concatenateStrings("Hello", "World"))
console.log(concatenateStrings("JavaScript", "is", "not", "so", "fun"))

const countArguments = (...args) => console.log(args.length)

countArguments(1, 2, "Hello", "Aloha")
countArguments("Good", "job")