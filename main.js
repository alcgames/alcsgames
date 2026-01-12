// 1. ADD YOUR GAMES HERE
const games = [
    { name: "Buckshot Roulette", folder: "buckshot-roulette" },
    { name: "Getting Over It", folder: "getting-over-it" },
    { name: "Pizza Tower", folder: "pizza-tower" },
    { name: "Slender", folder: "slender" },
    { name: "Sonic.exe", folder: "sonic.exe" }
];

// 2. Load Games into Grid
function loadGames() {
    const grid = document.getElementById('game-grid');
    grid.innerHTML = games.map(game => `
        <div class="game-card">
            <h3>${game.name}</h3>
            <button class="play-btn" onclick="launchGame('${game.folder}')">PLAY</button>
        </div>
    `).join('');
}

// 3. Navigation & Sidebar
function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('collapsed');
}

function showSection(id) {
    document.querySelectorAll('.content-section').forEach(s => s.style.display = 'none');
    document.getElementById(id).style.display = 'block';
    
    // Update active button state
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');
}

// 4. Launch Game
function launchGame(folder) {
    const frame = document.getElementById('game-frame');
    const overlay = document.getElementById('game-overlay');
    frame.src = `./games/${folder}/index.html`;
    overlay.style.display = 'block';
}

function closeGame() {
    document.getElementById('game-overlay').style.display = 'none';
    document.getElementById('game-frame').src = "";
}

// Initial Load
window.onload = loadGames;
