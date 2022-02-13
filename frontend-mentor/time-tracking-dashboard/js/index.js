const sortBtns = document.querySelectorAll("[role='tab']");
let jsonData = null;
const currentValues = document.querySelectorAll(".card--current");
const previousValues = document.querySelectorAll(".card--previous");

// Fetch JSON data
fetch("./data.json")
    .then( response => response.json() )
    .then( data => {
        jsonData = data;
    })
    .catch( err => console.log(err) );

// Add event listeners to each sort button
sortBtns.forEach(sortBtn => {
    sortBtn.addEventListener("click", () => {

        // Only reload values if not clicking on
        //   already-selected sort buttons
        if (sortBtn.getAttribute("aria-selected") === "false") {
            // console.log(`This button will do something!`);

            // Swap selected button focus
            document.querySelector("[aria-selected='true']").setAttribute("aria-selected", false);
            sortBtn.setAttribute("aria-selected", true);

            // Update all stat card values
            updateStatCardValues(sortBtn.getAttribute("tabindex"));
        }

    });
});

//////////////////////////////////////////////////

function updateStatCardValues(tabindex) {
    `
        Updates all the listed statistics on the stat cards in the DOM based on the data provided in data.json.
    `
    // Track stat card position
    let index = 0;

    jsonData.forEach(item => {
        // Update current values
        let newCurrVal = null;
        switch (tabindex) {
            case "1": newCurrVal = item.timeframes.daily.current; break;
            case "2": newCurrVal = item.timeframes.weekly.current; break;
            case "3": newCurrVal = item.timeframes.monthly.current; break;
        }
        newCurrVal += (newCurrVal === 1 ? "hr" : "hrs");

        currentValues[index].value = newCurrVal;
        currentValues[index].innerHTML = newCurrVal;

        // Update previous values
        let newPrevVal = null;
        let prevSpan = "";
        switch (tabindex) {
            case "1": newPrevVal = item.timeframes.daily.previous; prevSpan = "Last 24 Hours - "; break;
            case "2": newPrevVal = item.timeframes.weekly.previous; prevSpan = "Last Week - "; break;
            case "3": newPrevVal = item.timeframes.monthly.previous; prevSpan = "Last Month - "; break;
        }
        newPrevVal += (newPrevVal === 1 ? "hr" : "hrs");

        previousValues[index].firstElementChild.innerHTML = prevSpan;
        previousValues[index].lastElementChild.value = newPrevVal;
        previousValues[index].lastElementChild.innerHTML = newPrevVal;

        // Move to next stat card
        index++;
    });
}