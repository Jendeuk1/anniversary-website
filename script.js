// Countdown Timer
const countdownElement = document.getElementById('countdown');
const specialMessage = document.getElementById('specialMessage');

// Target Date
const targetDate = new Date('2024-12-08T00:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (timeLeft < 0) {
        // Hentikan countdown
        clearInterval(countdownFunction);
        countdownElement.textContent = "It's our anniversary! 🎉";

        // Menampilkan pesan spesial setelah countdown selesai
        specialMessage.style.display = "block";
    }
}

// Update every second
const countdownFunction = setInterval(updateCountdown, 1000);
