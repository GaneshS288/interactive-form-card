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


