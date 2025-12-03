
document.getElementById("dobForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);

    const zodiac = getZodiacSign(day, month);
    
    // Show the result container
    document.getElementById("resultContainer").style.display = "block";

    // Display the results
    document.getElementById("resultMessage").innerText = `Hello, ${name} ${surname}!`;
    document.getElementById("zodiacSign").innerText = `Your Zodiac Sign is: ${zodiac}`;
});

function getZodiacSign(day, month) {
    const zodiacSigns = [
        { sign: "Capricorn", start: { month: 12, day: 22 }, end: { month: 1, day: 19 }},
        { sign: "Aquarius", start: { month: 1, day: 20 }, end: { month: 2, day: 18 }},
        { sign: "Pisces", start: { month: 2, day: 19 }, end: { month: 3, day: 20 }},
        { sign: "Aries", start: { month: 3, day: 21 }, end: { month: 4, day: 19 }},
        { sign: "Taurus", start: { month: 4, day: 20 }, end: { month: 5, day: 20 }},
        { sign: "Gemini", start: { month: 5, day: 21 }, end: { month: 6, day: 20 }},
        { sign: "Cancer", start: { month: 6, day: 21 }, end: { month: 7, day: 22 }},
        { sign: "Leo", start: { month: 7, day: 23 }, end: { month: 8, day: 22 }},
        { sign: "Virgo", start: { month: 8, day: 23 }, end: { month: 9, day: 22 }},
        { sign: "Libra", start: { month: 9, day: 23 }, end: { month: 10, day: 22 }},
        { sign: "Scorpio", start: { month: 10, day: 23 }, end: { month: 11, day: 21 }},
        { sign: "Sagittarius", start: { month: 11, day: 22 }, end: { month: 12, day: 21 }}
    ];

    for (let zodiac of zodiacSigns) {
        if ((month === zodiac.start.month && day >= zodiac.start.day) || 
            (month === zodiac.end.month && day <= zodiac.end.day)) {
            return zodiac.sign;
        }
    }

    return "Unknown"; 
}
