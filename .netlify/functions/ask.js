const fetch = require('node-fetch');

exports.handler = async function(event, context) {
    const { question } = JSON.parse(event.body);
    const apiKey = process.env.OPENAI_API_KEY;  // Make sure this matches your secret name

    try {
        const response = await fetch('https://api.openai.com/v1/engines/gpt-4/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                prompt: question,
                max_tokens: 150
            })
        });
        const data = await response.json();
        return {
            statusCode: 200,
            body: JSON.stringify({ answer: data.choices[0].text.trim() })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: 'An error occurred'
        };
    }
};
