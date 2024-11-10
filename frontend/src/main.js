const fetchEvents = async () => {
    const response = await fetch('http://localhost:3000/api/events');
    const events = await response.json();
    const eventsList = document.getElementById('events-list');
    eventsList.innerHTML = events.map(event => `<p>${event.name} - ${event.date} en ${event.location}</p>`).join('');
};

fetchEvents();
