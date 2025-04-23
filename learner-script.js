// learner-script.js

// WebSocket server to receive data from the teacher's application
const socket = new WebSocket('ws://localhost:8080'); // Update with your WebSocket server URL

const outputContainer = document.getElementById('output-container');

// Handle incoming messages
socket.addEventListener('message', (event) => {
  const message = JSON.parse(event.data);
  outputContainer.innerHTML = ''; // Clear previous output

  switch (message.type) {
    case 'voice':
      const voiceText = document.createElement('p');
      voiceText.textContent = message.data;
      outputContainer.appendChild(voiceText);
      break;

    case 'scan':
      const scanText = document.createElement('p');
      scanText.textContent = message.data;
      outputContainer.appendChild(scanText);
      break;

    case 'image':
      const img = document.createElement('img');
      img.src = message.data;
      outputContainer.appendChild(img);
      break;

    case 'summary':
      const summaryText = document.createElement('p');
      summaryText.textContent = message.data;
      outputContainer.appendChild(summaryText);
      break;

    default:
      console.error('Unknown message type:', message.type);
  }
});

// Expand the board
document.getElementById('expand-btn').addEventListener('click', () => {
  document.getElementById('board').classList.toggle('fullscreen');
});