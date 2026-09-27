// Declare Variables
const toggleThemeBtn = document.querySelector("#toggleTheme");
const rootElement = document.documentElement;
const themeText = document.querySelector(".theme-text");

// Function to Set Theme
function setTheme(theme) {
    rootElement.setAttribute("data-theme", theme);

    localStorage.setItem("theme", theme);

    if (theme === "dark") {
        themeText.textContent = "Light";
    } else {
        themeText.textContent = "Dark";
    }
}

// Function to Toggle Theme from Light to Dark and Vice Versa.
function toggleTheme() {
    const currentTheme = rootElement.getAttribute("data-theme");

    if (currentTheme === "dark") {
        setTheme("light");
    } else {
        setTheme("dark");
    }
}

// Function to Load the Saved theme so it stays when we refresh the page
function loadTheme() {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        setTheme("light");
    }
}

// Listen to check if the toggle Theme button has been clicked
toggleThemeBtn.addEventListener("click", toggleTheme);

// Call the load theme to save user's choice.
loadTheme();