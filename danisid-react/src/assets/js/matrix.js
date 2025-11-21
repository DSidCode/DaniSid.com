const canvases = document.querySelectorAll('.matrix-effect');
const binary = '01';
const fontSize = 16;
const canvasData = new Map();

function resizeCanvas(canvas) {
    const parent = canvas.parentElement;
    canvas.width = parent.offsetWidth;
    canvas.height = parent.offsetHeight;
}

canvases.forEach(canvas => {
    const ctx = canvas.getContext('2d');
    resizeCanvas(canvas);

    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);
    canvasData.set(canvas, { ctx, drops });

    function draw() {
        ctx.fillStyle = 'rgba(26, 26, 30, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.font = `${fontSize}px monospace`;

        for (let i = 0; i < drops.length; i++) {
            const text = binary.charAt(Math.floor(Math.random() * binary.length));
            const glow = Math.random();
            if (glow > 0.95) {
                ctx.fillStyle = '#00D4FF';
                ctx.globalAlpha = 1;
            } else if (glow > 0.7) {
                ctx.fillStyle = '#00A3CC';
                ctx.globalAlpha = 0.7;
            } else {
                ctx.fillStyle = '#007A99';
                ctx.globalAlpha = 0.4;
            }
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
        ctx.globalAlpha = 1;
    }

    setInterval(draw, 35);
});

window.addEventListener('resize', () => {
    canvases.forEach(canvas => {
        resizeCanvas(canvas);
        const newColumns = Math.floor(canvas.width / fontSize);
        const data = canvasData.get(canvas);
        data.drops = Array(newColumns).fill(1);
    });
});