const fMentorSolutionsEl = document.querySelector("ul.fmentor-solutions");

fetch("../fmentor.json")
    .then( response => response.json() )
    .then( data => {
        renderSolution(data);
    })
    .catch( err => console.log(err) );

//////////////////////////////////////////////////

function renderSolution(jsonData) {
    `
        Creates and appends a <li> element for each Frontend Mentor solution (details provided in the
        fmentor.json file) into the <ul class="fmentor-solutions"> parent.
        
        Each object includes the following details:
            - name: The name of the challenge.
            - date: The date of initial submission. Any edits done on future dates are not considered.
            - tags: An array of whichever languages the challenge featured; HTML for these are appended
              in the appendTag() function.
            - links: An object consisting of links needed for the <li> element, including the live page,
              thumbnail image, Frontend Mentor submission page, and GitHub repository path.
    `
    for (let item of jsonData) {
        let result = document.createElement("li");
        result.classList.add("fmentor-card");
        let innerHTML = "";

        // Thumbnail image
        innerHTML += `<a href="${item.links.livepage}" target="_blank" class="fmentor-card--image"><img src="${item.links.thumbnail}" alt=""></a>`;

        // Title
        innerHTML += `<a href="${item.links.livepage}" target="_blank" class="fmentor-card--title">${item.name}</a>`;

        // Links
        innerHTML += `<div class="fmentor-card--links">
        <p>
            <span class="fmentor-card--links-fe">
                <a href="${item.links.fmentor}" target="_blank">Frontend Mentor</a>
            </span><!--
            -->\u3000•\u3000<!--
            --><span class="fmentor-card--links-git">
                <a href="${item.links.github}" target="_blank">GitHub</a>
            </span>
        </p>`;
        innerHTML += `<p class="uppercase fw-semi-bold fs-300 flow" style="--flow-space: 0.5em;">`;
        for (let tag of item.tags) innerHTML += appendTag(tag);
        innerHTML += `</p>
        </div>`;

        // Date
        innerHTML += `<p class="fmentor-card--date fs-500">${item.date}</p>`;

        result.innerHTML = innerHTML;
        fMentorSolutionsEl.appendChild( result );
    }
}

function appendTag(tag) {
    `
        Returns a string of multiple <span> elements based on the provided tags from the JSON file.
        Support ranges from HTML, CSS, JavaScript, and API.
    `
    let result = "";
    switch (tag) {
        case "html":
            result += `<span class="box-html text-html">HTML</span>`;
            break;
        case "css":
            result += `<span class="box-css text-css">CSS</span>`;
            break;
        case "javascript":
            result += `<span class="box-javascript text-javascript">JS</span>`;
            break;
        case "api":
            result += `<span class="box-api text-api">API</span>`;
            break;
    }
    return result;
}