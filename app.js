import { HfInference } from '@huggingface/inference';

const hf = new HfInference('<YOUR_HUGGING_FACE_API_KEY>');

document.getElementById('send').addEventListener('click', async () => {
    const inputText = document.getElementById('input').value;
    const responseDiv = document.getElementById('response');

    try {
        const response = await hf.textGeneration({
            model: 'xenova/gpt4',
            inputs: inputText,
        });

        responseDiv.innerHTML = `<p>${response.data[0].generated_text}</p>`;
    } catch (error) {
        responseDiv.innerHTML = `<p>Error: ${error.message}</p>`;
    }
});
