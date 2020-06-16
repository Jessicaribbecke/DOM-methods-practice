const bodyElement = document.querySelector("body")
const mainElement = document.createElement("main")
const button = document.createElement("button")
const buttonInfo = document.createTextNode("remove")
const img = document.createElement("img")

bodyElement.append(mainElement)
bodyElement.append(button)
button.append(buttonInfo)
mainElement.append(img)
img. src = "https://static.boredpanda.com/blog/wp-content/uploads/2020/02/B5DzvJXoPzy-png__700.jpg"

img.style.width = 100 + "px"

button.addEventListener("click", function () {
    mainElement.remove()
})
 
const linkElement = document.createElement("a")
const linkName = document.createTextNode("cute stuff")
linkElement.append(linkName)
linkElement.title = "link to cute stuff"
linkElement.href = "https://www.boredpanda.com/cat-daily-life-photo/?utm_source=google&utm_medium=organic&utm_campaign=organic"
mainElement.append(linkElement)
