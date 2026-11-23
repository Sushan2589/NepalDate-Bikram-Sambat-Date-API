
const today = document.getElementById("today");
const adDate = document.getElementById("adDate");
const bsDate = document.getElementById("bsDate");

const adResult = document.getElementById("adResult");
const bsResult = document.getElementById("bsResult");

// Get today's Nepali date
async function getToday() {
    const response = await fetch("/api/today");
    const data = await response.json();

    today.textContent = JSON.stringify(data.date);
}

// AD to BS
async function convertAD() {
    const date = adDate.value;

    const response = await fetch(`/api/ad-bs?date=${date}`);
    const data = await response.json();

    adResult.textContent = JSON.stringify(data.date);
}

// BS to AD
async function convertBS() {
    const date = bsDate.value;

    const response = await fetch(`/api/bs-ad?date=${date}`);
    const data = await response.json();

    bsResult.textContent = JSON.stringify(data.date);
}

document.getElementById("adButton").addEventListener("click", convertAD);
document.getElementById("bsButton").addEventListener("click", convertBS);

getToday();
