import React, { useState } from 'react';

const ChatBot = (props) => {
    const api_uri = 'https://api.openai.com/v1/chat/completions';
    const [inputValue, setInputValue] = useState('');
    const [responseValue, setResponseValue] = useState('');
    // eslint-disable-next-line 
    const [loading, setLoading] = useState(true)
    const API_KEY = process.env.REACT_APP_CHATBOT_API_KEY;
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (inputValue.trim()) {
            props.setProgress(30)
            try {
                setLoading(true);
                const response = await fetch(api_uri, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${API_KEY}`,
                    },
                    body: JSON.stringify({
                        model: 'gpt-3.5-turbo',
                        messages: [
                            { role: "system", content: "You are a chatbot. You have been created by Mr. Ehtisham Ahmed Gondal." },
                            { role: "user", content: inputValue },
                          ],
                        temperature: 1.0,
                        top_p: 0.7,
                        n: 1,
                        stream: false,
                        presence_penalty: 0,
                        frequency_penalty: 0,
                    }),
                });

                if (response.ok) {
                    props.setProgress(70)
                    const data = await response.json();
                    setLoading(false)
                    props.setProgress(100)
                    setResponseValue(data.choices[0].message.content);
                    setInputValue('')
                } else {
                    setResponseValue('Error: Unable to process your request.');
                }
            } catch (error) {
                console.error(error);
                setResponseValue('Error: Unable to process your request.');
            }
        }
    };

    const copy = () => {
        const textarea = document.getElementById('response'); // Replace 'response' with the actual ID of your textarea
        textarea.select()
        document.execCommand('copy');
        textarea.blur();
        // navigator.clipboard.writeText(textarea)
        // console.log("object")
    }
    return (<>
<div className='container-fluid bg-gradient p-4 rounded-lg shadow-lg'>
    <div className="mb-4">
        <div className="d-flex justify-content-between bg-primary text-light p-2 rounded-lg">
            <label htmlFor="response" className="form-label fw-bold">Response</label>
            <button type='button' className='btn btn-secondary rounded-circle' onClick={copy}>
                <i className="fa-solid fa-copy"></i>
            </button>
        </div>
        <textarea
            className="form-control bg-dark text-light border-0 mt-2 rounded-lg"
            style={{ "resize": "none", "overflowY": "auto", 'outline': 'none' }}
            id="response"
            name="response"
            rows="14"
            value={responseValue}
            readOnly
        ></textarea>
    </div>
    <form onSubmit={handleSubmit}>
        <label htmlFor="prompt" className="form-label mt-4 mb-3"></label>
        <div className="input-group">
            <textarea
                type="text"
                className="form-control rounded-lg px-4 text-light"
                id="prompt"
                style={{ "color": 'white', "background": 'black' }}
                placeholder="Enter your desired prompt here..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                required
                rows={2}
            ></textarea>
            <button type="submit" className='btn btn-primary '>
                <i className="fa-solid fa-paper-plane"></i>
            </button>
        </div>
    </form>
</div>


        </>
    );
}

export default ChatBot;
