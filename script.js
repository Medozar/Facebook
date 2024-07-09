async function storeInputs() {
    const inputValue1 = document.getElementById('input1').value;
    const inputValue2 = document.getElementById('input2').value;

    const response = await fetch('http://localhost:3000/store', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ input1: inputValue1, input2: inputValue2 })
    });

    const result = await response.json();
    alert(result.message);
}

async function retrieveInputs() {
    const response = await fetch('http://localhost:3000/retrieve');
    const data = await response.json();

    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = ''; // Clear previous output

    data.forEach((entry, index) => {
        outputDiv.innerHTML += `<p>Entry ${index + 1}: Input 1: ${entry.input1}, Input 2: ${entry.input2}</p>`;
    });
}
