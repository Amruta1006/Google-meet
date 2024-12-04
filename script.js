const participants = [
    { name: 'Amruta', image: 'woman-1.png' },
      { name: 'Prathamesh', image: 'boy-1.png' },
      { name: 'Harshad', image: 'boy-2.png' },
      { name: 'Shreedhar', image: 'boy-1.png' },
      { name: 'Vishakha', image: 'woman-2.png' },
      { name: 'Saurabh', image: 'boy-1.png' },
      { name: 'Krishna', image: 'boy-2.png' },
      { name: 'Radha', image: 'woman-2.png' },
      { name: 'Rutuja', image: 'woman-1.png' },
      { name: 'Sunny', image: 'boy-1.png' },
      { name: 'Prasad', image: 'boy-2.png' },
      { name: 'Vedika', image: 'woman-1.png' },
      { name: 'Vedanti', image: 'woman-2.png' },
      { name: 'Siddhi', image: 'woman-1.png' },
      { name: 'Aishwarya', image: 'woman-2.png' },
      { name: 'Tejas', image: 'boy-2.png' },
      { name: 'Kanha', image: 'woman-1.png'},
    ];
    
    const participantsContainer = document.getElementById('participants-container');
    
    function displayParticipants(participantList) {
      participantsContainer.innerHTML = '';
      participantList.forEach((participant) => {
        participantsContainer.innerHTML += `
          <div class='participant-card'>
            <img src="${participant.image}" alt="${participant.name}">
            <span>${participant.name}</span>
          </div>
        `;
      });
    }
    
    displayParticipants(participants);
    
    function filterParticipants() {
      const searchQuery = document.getElementById('search').value.toLowerCase();
      const filteredParticipants = participants.filter(participant => 
        participant.name.toLowerCase().includes(searchQuery)
      );
      displayParticipants(filteredParticipants);
    }
    