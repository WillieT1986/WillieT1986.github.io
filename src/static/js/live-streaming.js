// Fetch Twitch live status
fetch('https://api.twitch.tv/helix/streams?user_login=warmad2', {
    method: 'GET',
    headers: {
        'Client-ID': 'warmad2' // Replace with your Client-ID
    }
})
.then(response => response.json())
.then(data => {
    const liveDot = document.getElementById('live-dot');
    if (data.data.length > 0) {
        liveDot.classList.add('active'); // Show the live indicator
    } else {
        liveDot.classList.remove('active'); // Hide the live indicator when offline
    }
})
.catch(error => console.error('Error checking Twitch live status:', error));

// Example live status toggle (you can adapt this based on your streaming platform's API)
document.addEventListener("DOMContentLoaded", function () {
  const liveDot = document.getElementById("live-dot");

  // Assuming live status is retrieved via API, we set it here manually for testing
  const twitchLiveStatus = true; // Set to 'true' when live

  if (twitchLiveStatus) {
    liveDot.style.backgroundColor = 'lightgreen'; // Green when live
  } else {
    liveDot.style.backgroundColor = 'gray'; // Gray when offline
  }
});