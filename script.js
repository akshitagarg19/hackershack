const facts = [
    "The term 'hacker' originally referred to someone who makes furniture with an axe.",
    "White hat hackers help organizations improve their security.",
    "The first computer virus, 'Creeper,' was created in the early 1970s.",
    "Many hackers use their skills for good, participating in hackathons for social causes.",
    "Kevin Mitnick was once the most-wanted computer criminal in the U.S.",
    "Hacktivism combines hacking with activism to promote political agendas.",
    "Capture the Flag (CTF) competitions challenge participants to solve security-related puzzles.",
    "The dark web is often associated with illegal activities, including the sale of stolen data."
];

function generateFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('fact').innerText = facts[randomIndex];
}

// Generate a fact when the page loads
window.onload = generateFact;
