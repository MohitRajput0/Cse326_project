// Function to switch between tabs
function showTab(tabId) {
    // Hide all tabs
    let tabs = document.querySelectorAll('.tab');
    tabs.forEach(function(tab) {
      tab.style.display = 'none';
    });
  
    // Show the selected tab
    document.getElementById(tabId).style.display = 'block';
  }