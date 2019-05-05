//Followup Element JS File
module.exports = {
    create() {
        var el = document.createElement("div");
        el.setAttribute("class", "dropdown");
        el.innerHTML = this.renderHTML();
        el.children[1].addEventListener("click", function() { //Add actoion when clicking followup button.
            console.log(this.parentElement.children[0]);
            var dropdowns = document.getElementsByClassName("dropdown-content");
            this.parentElement.children[0].classList.toggle("show");
        });
        return el;
    },

    renderHTML() {
        return "<div id='myDropdown' class='dropdown-content' style='top:-178px; width:200px'><a href='#'>Once per day</a><a href='#'>Once every two days</a><a href='#'>Once every three days</a><a href='#'>Once per week</a></div><button class='dropbtn'>Followup</button>";
    },
}