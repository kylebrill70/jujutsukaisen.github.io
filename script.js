
// Add an event listener for when the page is loaded
window.addEventListener('DOMContentLoaded', function() {
  // Keep track of the currently playing video
  var currentVideo = null;

  // Function to stop the currently playing video
  function stopCurrentVideo() {
      if (currentVideo) {
          currentVideo.pause();
          currentVideo.currentTime = 0;
          currentVideo.muted = true;
      }
  }

  // Function to play the video on the target page
  function playTargetVideo(targetVideo) {
      if (targetVideo) {
          targetVideo.muted = false; // Unmute the video
          targetVideo.play();
          currentVideo = targetVideo;
      }
  }

  // Function to scroll to the target page and play its video
  function scrollToPage(pageNumber) {
      // Pause the currently playing video
      stopCurrentVideo();

      // Scroll to the target page
      var targetPage = document.getElementById('page' + pageNumber);
      if (targetPage) {
          targetPage.scrollIntoView({ behavior: 'smooth' });

          // Play the video on the target page after scrolling
          var targetVideo = targetPage.querySelector('video');
          playTargetVideo(targetVideo);
      }
  }

  // Add click event listeners to the navigation buttons
  var navButtons = document.querySelectorAll('#nav-buttons button');
  navButtons.forEach(function(button, index) {
      button.addEventListener('click', function() {
          scrollToPage(index + 1); // Page numbers start from 1
      });
  });
});
