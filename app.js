function showChecklist() {
    document.getElementById('content').innerHTML = `
        <h2>Chapter Checklist</h2>
        <ul>
            <li><input type="checkbox"> Mathematical Tools</li>
            <li><input type="checkbox"> Optics</li>
            <li><input type="checkbox"> Motion</li>
            <!-- Add more chapters -->
        </ul>`;
}

function showNotes() {
    document.getElementById('content').innerHTML = `
        <h2>Chapter Notes</h2>
        <p>Coming soon!</p>`;
}

function startQuiz() {
    document.getElementById('content').innerHTML = `
        <h2>Quiz</h2>
        <p>Coming soon!</p>`;
}

function openChat() {
    document.getElementById('content').innerHTML = `
        <h2>AI Chatbot</h2>
        <p>Chatbot functionality coming soon!</p>`;
}
// app.js
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js')
        .then((registration) => {
          console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch((error) => {
          console.log('Service Worker registration failed:', error);
        });
    });
  }
