const accordion = document.querySelectorAll("div.container");

// Adds onClick events for each accordion that adds/removes the "active" class, causing accordion content to expand
// Ensure only one accordion is open at a time
for (let container of accordion) {
    container.addEventListener("click", () => {

        // Removes the "active" class from all other containers
        const activeAccordion = document.querySelectorAll("div.container.active");
        for (let activeContainer of activeAccordion) {
            if (activeContainer !== container) activeContainer.classList.remove("active");
        }

        // Adds/removes the "toggle" class from selected container
        container.classList.toggle("active");

    });
}