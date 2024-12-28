document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("#readMenu .active").forEach(function (value) {
        let parentDetails = value;
        while (parentDetails) {
            if (parentDetails.tagName === "DETAILS") {
                parentDetails.setAttribute("open", "true");
            }
            parentDetails = parentDetails.parentElement;
        }
    });
});