// Gallery data: one object per activity/project.
// Each object holds the info shown in the main display area when its
// matching thumbnail is clicked.
const galleryItems = [
    {
        title: "Academic Activity",
        image: "images/activity-1.jpg",
        description:
            "Coursework, lab sessions and classroom activities as part of " +
            "the B.Tech in Artificial Intelligence & Data Science programme."
    },
    {
        title: "Project Work",
        image: "images/activity-2.jpg",
        description:
            "Hands-on project work, including building and testing " +
            "personal coding projects outside the classroom."
    },
    {
        title: "Workshop / Event",
        image: "images/activity-3.jpg",
        description:
            "Participation in technical workshops, seminars and events " +
            "related to technology and web development."
    }
];

$(document).ready(function () {

    // Attach a click handler to every thumbnail in the gallery.
    $(".gallery-thumb").on("click", function () {

        // data-index tells us which item in galleryItems was clicked.
        const index = $(this).data("index");
        const item = galleryItems[index];

        if (!item) {
            return;
        }

        // Update the main display area using jQuery DOM methods.
        $("#gallery-display-img").attr("src", item.image);
        $("#gallery-display-img").attr("alt", item.title);
        $("#gallery-display-title").text(item.title);
        $("#gallery-display-desc").text(item.description);

        // Highlight the selected thumbnail.
        $(".gallery-thumb").removeClass("gallery-thumb-active");
        $(this).addClass("gallery-thumb-active");
    });

    // Mark the first thumbnail active by default.
    $(".gallery-thumb").first().addClass("gallery-thumb-active");
});
