document.getElementById('viewbtn').addEventListener('click', function() {
    try {
        // Navigate to the hotel detail page when the container is clicked
        window.location.href = 'hotel_detail_screen.html';
    } catch (error) {
        console.error('Error navigating to the page:', error);
    }
});