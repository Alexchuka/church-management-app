// Declare all Variables
const sidebar = document.querySelector(".sidebar");
const sidebarToggle = document.querySelector("#sidebarToggle");
const toggleIcon = document.querySelector(".icon-toggle");

// Restore sidebar state
function restoreSidebarState() {
    const savedSidebarState = localStorage.getItem("sidebarState");

    if (savedSidebarState === "collapsed") {
        sidebar.classList.add("collapsed");
    }
}

// Save Current Sidebar State
function saveSidebarState() {
    if (sidebar.classList.contains("collapsed")) {
        localStorage.setItem("sidebarState", "collapsed");
        toggleIcon.style.maskImage = 'url("../svg/toggle-right.svg")';
    } else {
        localStorage.setItem("sidebarState", "expanded");
        toggleIcon.style.maskImage = 'url("../svg/toggle-left.svg")';
    }
}

// Toggle Side bar
function toggleSidebar() {
    sidebar.classList.toggle("collapsed");
    saveSidebarState();
}

// Listen for the toggle button when clicked
sidebarToggle.addEventListener("click", toggleSidebar);

// Restore sidebar state when the page loads
restoreSidebarState();