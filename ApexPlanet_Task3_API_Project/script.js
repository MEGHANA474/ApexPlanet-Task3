const jokeBtn = document.getElementById('getJokeBtn');
const jokeContainer = document.getElementById('jokeContainer');

jokeBtn.addEventListener('click', async () => {
  try {
    const response = await fetch('https://official-joke-api.appspot.com/random_joke');
    const data = await response.json();
    jokeContainer.innerHTML = `<p>${data.setup} <br> <strong>${data.punchline}</strong></p>`;
  } catch (error) {
    jokeContainer.innerHTML = `<p>Failed to load joke. Please try again.</p>`;
  }
});
