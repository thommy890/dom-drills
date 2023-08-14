document.addEventListener("DOMContentLoaded", function () {
    // Create a new div element
    var headerDiv = document.createElement("div");
    headerDiv.className = "header-container";

    // Create an h1 element
    var h1Element = document.createElement("h1");
    h1Element.className = "h1"; // Adding class "h1"
    var h1TextNode = document.createTextNode("This is an h1");
    h1Element.appendChild(h1TextNode);

    // Create an h2 element
    var h2Element = document.createElement("h2");
    h2Element.className = "h2"; // Adding class "h2"
    var h2TextNode = document.createTextNode("This is an h2");
    h2Element.appendChild(h2TextNode);

    // Create h3 to h6 elements in a loop
    for (var i = 3; i <= 6; i++) {
        var headingElement = document.createElement("h" + i);
        headingElement.className = "h" + i; // Adding classes "h3", "h4", "h5", "h6" respectively
        var textNode = document.createTextNode("This is an h" + i);
        headingElement.appendChild(textNode);

        // Append each heading to the div
        headerDiv.appendChild(headingElement);
    }

    // Append all heading elements to the div
    headerDiv.appendChild(h1Element);
    headerDiv.appendChild(h2Element);

    // Append the div to the body of the document
    document.body.appendChild(headerDiv);
});

document.addEventListener("DOMContentLoaded", function () {
    var colors = ["red", "blue", "green", "orange", "purple", "teal", "pink", "brown"];
    var listItemNumber = 1;

    // Function to get a random color from the colors array
    function getRandomColor() {
        var randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    }

    // Function to add a new list item
    function addListItem() {
        var listContainer = document.getElementById("list-container");
        var listItem = document.createElement("li");
        listItem.textContent = "This is list item " + listItemNumber;
        listItemNumber++;

        // Add event listener to change font color on click
        listItem.addEventListener("click", function () {
            var randomColor = getRandomColor();
            listItem.style.color = randomColor;
        });

        listContainer.appendChild(listItem);
    }

    // Add event listener to the button to add new list items
    var addButton = document.querySelector(".add-button");
    addButton.addEventListener("click", addListItem);
});

