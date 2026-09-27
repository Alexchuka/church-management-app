// An Object of the dashbord data that will be retrieved from the backend Database
const dashboardData = {
    totalMembers: 0,
    visitors: 0,
    newMembers: 0,
    attendance: 50
};

// Variables that calls the HTML value we need to manipulate in the DOM
const memberCount = document.querySelector(".member-count");
const visitorCount = document.querySelector(".visitor-count");
const newMemberCount = document.querySelector(".new-members-count");
const attendancePercentage = document.querySelector(".attendance-percentage");

// Add the text and value to be displayed
memberCount.textContent = dashboardData.totalMembers;
visitorCount.textContent = dashboardData.visitors;
newMemberCount.textContent = dashboardData.newMembers;
attendancePercentage.textContent = `${dashboardData.attendance}%`;

// Attendance Barchart
// Declare Variables:
const chart = document.querySelector(".bar-chart");

// Create an array of Objects:
const attendanceData = [
    { dateWeek: "Week 1", day: "Sun", attendance: 33 },
    { dateWeek: "Week 2", day: "Sun", attendance: 23 },
    { dateWeek: "Week 3", day: "Sun", attendance: 64 },
    { dateWeek: "Week 4", day: "Sun", attendance: 19 },
    { dateWeek: "Week 5", day: "Sun", attendance: 48 },
];

// Use the For of Loop to grab data from the array of objects.
// Use dom manipulation to add new elements and bar charts.
for (const attResult of attendanceData) {
    const barWrapper = document.createElement("div");
    barWrapper.classList.add("bar-wrapper");

    const bar = document.createElement("div");
    bar.classList.add("bar");

    bar.style.height = `${attResult.attendance}%`;
    const label = document.createElement("span");
    label.textContent = attResult.dateWeek;

    // Show the attendance value above the bar
    const value = document.createElement("span");
    value.classList.add("bar-value");
    value.textContent = `${attResult.attendance}%`;
    bar.appendChild(value);

    // Show the Day
    const dayValue = document.createElement("span");
    dayValue.classList.add("day-value");
    dayValue.textContent = attResult.day;

    barWrapper.append(bar, label);
    chart.appendChild(barWrapper);
};

// Chart Header Buttons
const filterBtns = document.querySelectorAll(".chart-filters button");

for (const filterChart of filterBtns) {
    filterChart.addEventListener("click", () => {
        const period = button.dataset.period;
        console.log(`Selected Period: ${period}`);
    });
}

