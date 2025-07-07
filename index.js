//@ts-check

const displaySubmissionResponse = (function () {
    /**@type {HTMLFormElement} */
    const form = document.getElementsByTagName("form")[0];

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const formPage = document.querySelector(".form-page");
        const thankYouPage = document.querySelector(".thank-you-page");
        const ratingSpan = document.querySelector(".rating-span");

        const formData = new FormData(form);
        const rating = formData.get("rating");

        if(ratingSpan && formPage && thankYouPage) {
            ratingSpan.textContent = `${rating}`;
            formPage.classList.add("hidden");
            thankYouPage.classList.remove("hidden");
        }
    });
})();

/**
 * utility for creating html elements
 * @overload
 * @param {string} tagName
 * @param {string} textContent
 * @returns {HTMLElement}
 */

/**
 * @overload
 * @param {string} tagName
 * @returns {HTMLElement}
 */

/**
 * @param {string} tagName the element tag (p, h1 etc.)
 * @param {string | undefined} textContent text to put inside the element
 */

function createElement(tagName, textContent) {
    const element = document.createElement(tagName);
    if (typeof textContent === "string") element.textContent = textContent;
    return element;
}
