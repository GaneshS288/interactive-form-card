//@ts-check

const displaySubmissionResponse = (function () {
    /**@type {HTMLFormElement} */
    const form = document.getElementsByTagName("form")[0];

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        /**@type {HTMLDivElement | null} */
        const card = document.querySelector(".card");

        const formData = new FormData(form);
        const rating = formData.get("rating");

        const thankYouIllustrationImg = createElement("img");
        if (thankYouIllustrationImg instanceof HTMLImageElement)
            thankYouIllustrationImg.src = "./images/illustration-thank-you.svg";

        const ratingPara = createElement(
            "p",
            `You selected ${rating} out of 5`
        );
        ratingPara.classList.add("rating-para");

        const thankYouHeading = createElement("h1", "Thank you!");

        const thankYouParaText = `We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!`;
        const thankYouPara = createElement("p", thankYouParaText);

        const thankYouCard = createElement("div");
        thankYouCard.classList.add("card", "thank-you-card");
        thankYouCard.append(
            thankYouIllustrationImg,
            ratingPara,
            thankYouHeading,
            thankYouPara
        );

        if (card instanceof HTMLDivElement) card.replaceWith(thankYouCard);
        else console.error("card div doesn't exist");
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
