document.getElementById('query-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const question = document.getElementById('question').value;

    document.getElementById('response').innerHTML = 'Loading...';

    try {
        const response = await fetch('/.netlify/functions/ask', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ question })
        });
        const data = await response.json();
        document.getElementById('response').innerHTML = `<p>${data.answer}</p>`;
    } catch (error) {
        document.getElementById('response').innerHTML = 'An error occurred. Please try again later.';
    }
});
