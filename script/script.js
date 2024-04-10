document.addEventListener("DOMContentLoaded", function() {
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const pageNumber = document.getElementById('pageNumber');

    let currentPage = 1;
    const totalPages = 23;

    function updatePagination() {
        pageNumber.textContent = currentPage + " de " + totalPages;
        prevButton.disabled = currentPage === 1;
        nextButton.disabled = currentPage === totalPages;
    }

    prevButton.addEventListener('click', function() {
        if (currentPage > 1) {
            currentPage--;
            updatePagination();
            // Perform any action you want when previous button is clicked
        }
    });

    nextButton.addEventListener('click', function() {
        if (currentPage < totalPages) {
            currentPage++;
            updatePagination();
            // Perform any action you want when next button is clicked
        }
    });

    updatePagination();
});
