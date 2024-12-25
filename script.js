const facts = [
    { text: 'The term "hacker" originally referred to someone who makes furniture with an axe.', image: 'https://up.yimg.com/ib/th?id=OIP.axDGu0FS81c4Qwgx9wXC7wHaFE&pid=Api&rs=1&c=1&qlt=95&w=145&h=99' },
    { text: 'White hat hackers help organizations improve their security.', image: 'https://up.yimg.com/ib/th?id=OIP.PJd7lQKPXO2ankhNHp9m6AHaE0&pid=Api&rs=1&c=1&qlt=95&w=183&h=119' },
    { text: 'The first computer virus, "Creeper," was created in the early 1970s.', image: 'https://up.yimg.com/ib/th?id=OIP.uuB3LKqDJuDtx5ZNGtpIVAHaEo&pid=Api&rs=1&c=1&qlt=95&w=181&h=113' },
    { text: 'Many hackers use their skills for good, participating in hackathons for social causes.', image: 'https://up.yimg.com/ib/th?id=OIP.EI1lOKlcWfmcQ32QlQJwOwHaNK&pid=Api&rs=1&c=1&qlt=95&w=67&h=119' },
    { text: 'Kevin Mitnick was once the most-wanted computer criminal in the U.S.', image: 'https://up.yimg.com/ib/th?id=OIP.nMCtxXaaItRzUFSX8tfkEQHaLH&pid=Api&rs=1&c=1&qlt=95&w=75&h=113' },
    { text: 'Hacktivism combines hacking with activism to promote political agendas.', image: 'https://up.yimg.com/ib/th?id=OIP.nMCtxXaaItRzUFSX8tfkEQHaLH&pid=Api&rs=1&c=1&qlt=95&w=75&h=113' },
    { text: 'Capture the Flag (CTF) competitions challenge participants to solve security-related puzzles.', image: 'https://up.yimg.com/ib/th?id=OIP.EhFgdU2ozfg7ZqLppSUNagHaEe&pid=Api&rs=1&c=1&qlt=95&w=161&h=97' },
    { text: 'The dark web is often associated with illegal activities, including the sale of stolen data.', image: 'https://up.yimg.com/ib/th?id=OIP.z1Fl9P5QfqFRfLuPS5GjQwHaFk&pid=Api&rs=1&c=1&qlt=95&w=141&h=106' },
];

let currentFactIndex = 0;

function displayFact() {
    const fact = facts[currentFactIndex];
    document.getElementById('facts-list').innerHTML = `<li>${fact.text}</li>`;
    
    const imgElement = document.getElementById('fact-image');
    
    // Fade out the image
    imgElement.style.opacity = '0'; // Start fading out
    setTimeout(() => {
        imgElement.src = fact.image; // Change the image source
        imgElement.style.display = 'block'; // Show the image
        setTimeout(() => {
            imgElement.style.opacity = '1'; // Fade in the new image
        }, 50); // Small delay to ensure the image is loaded
    }, 500); // Duration of the fade-out effect
}

function nextFact() {
    currentFactIndex = (currentFactIndex + 1) % facts.length; // Loop back to the first fact
    displayFact();
}

// Initial display
displayFact();

// Optional: Automatically change fact every few seconds
setInterval(nextFact, 5000); // Change fact every 5 seconds

