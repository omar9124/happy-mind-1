function filterCourses(category) {

    let courses = document.querySelectorAll(".subject");

    document.querySelectorAll(".course-link").forEach(link => {
        link.classList.remove("active");
        if (link.textContent == category){
            link.classList.add("active");
        }
    })


    for (let i = 0; i < courses.length; i++) {
        let courseCategory = courses[i].querySelector("h6").textContent;

        if (category === "ALL") {
            courses[i].style.display = "block";
        } else if (courseCategory === category) {
            courses[i].style.display = "block";
        } else {
            courses[i].style.display = "none";
        }
    }
}