function showRequirements() {
    // Get selected requirements
    const water = document.getElementById('water').checked;
    const roads = document.getElementById('roads').checked;
    const healthcare = document.getElementById('healthcare').checked;
    const electricity = document.getElementById('electricity').checked;
    const education = document.getElementById('education').checked;

    // Get the result section and list
    const resultSection = document.getElementById('result');
    const requirementsList = document.getElementById('requirements-list');
    
    // Clear previous results
    requirementsList.innerHTML = '';

    // Check if any requirement is selected
    if (!water && !roads && !healthcare && !electricity && !education) {
        resultSection.style.display = 'none';
        alert('Please select at least one requirement!');
        return;
    }

    // Add selected requirements to the list
    if (water) {
        const li = document.createElement('li');
        li.textContent = 'Water Supply';
        requirementsList.appendChild(li);
    }
    if (roads) {
        const li = document.createElement('li');
        li.textContent = 'Roads and Transport';
        requirementsList.appendChild(li);
    }
    if (healthcare) {
        const li = document.createElement('li');
        li.textContent = 'Healthcare Facilities';
        requirementsList.appendChild(li);
    }
    if (electricity) {
        const li = document.createElement('li');
        li.textContent = 'Electricity Supply';
        requirementsList.appendChild(li);
    }
    if (education) {
        const li = document.createElement('li');
        li.textContent = 'Education Facilities';
        requirementsList.appendChild(li);
    }

    // Display the result section
    resultSection.style.display = 'block';
}