// Dark Mode Toggle Functionality
(function() {
  'use strict';

  // Check if dark mode is supported
  if (!window.matchMedia) {
    return;
  }

  const darkModeBtn = document.getElementById('dark-mode-btn');
  const darkModeIcon = document.getElementById('dark-mode-icon');
  const STORAGE_KEY = 'dark-mode-preference';

  // Get initial state
  function getInitialState() {
    // Check localStorage first
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored !== null) {
      return stored === 'true';
    }
    
    // Fall back to system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  // Apply dark mode
  function applyDarkMode(isDark) {
    document.documentElement.classList.toggle('dark-mode', isDark);
    localStorage.setItem(STORAGE_KEY, isDark.toString());
    
    // Update icon
    if (darkModeIcon) {
      darkModeIcon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
    }
  }

  // Toggle dark mode
  function toggleDarkMode() {
    const isCurrentlyDark = document.documentElement.classList.contains('dark-mode');
    applyDarkMode(!isCurrentlyDark);
  }

  // Initialize
  function init() {
    if (!darkModeBtn || !darkModeIcon) {
      return;
    }

    // Apply initial state
    const initialDarkMode = getInitialState();
    applyDarkMode(initialDarkMode);

    // Add click event listener
    darkModeBtn.addEventListener('click', toggleDarkMode);

    // Listen for system preference changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addListener(function(e) {
      // Only update if no manual preference is stored
      if (localStorage.getItem(STORAGE_KEY) === null) {
        applyDarkMode(e.matches);
      }
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
