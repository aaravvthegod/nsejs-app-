// Function to load the saved state of checkboxes from localStorage
function loadChecklistState() {
  // Get all checkboxes by their IDs
  const checklistItems = [
    "mathematical-tools", "optics", "motion", "laws", "fluids", "work-energy", "wave-sound",
    "electricity", "magnetism", "heat", "cell", "tissue", "diversity", "human-health",
    "improvement-food", "life-processes", "control-coordination", "reproduction", 
    "inheritance-variation", "evolution", "molecular-inheritance", "microbes", "ecology",
    "misc-biology", "mole", "reaction-equations", "stoichiometry", "acid-base-salt", 
    "gas-laws", "metal-nonmetal", "periodic-classification", "structure-atom", "misc-chemistry"
  ];

  // Loop through all checklist items and set the checkbox state from localStorage
  checklistItems.forEach(id => {
    const checkbox = document.getElementById(id);
    if (checkbox) {
      // If there's a saved state in localStorage, set the checkbox's checked state
      checkbox.checked = localStorage.getItem(id) === 'true';
    }
  });
}

// Function to save the state of checkboxes to localStorage whenever they change
function saveChecklistState(event) {
  const checkbox = event.target;
  // Save the state of the checkbox to localStorage
  localStorage.setItem(checkbox.id, checkbox.checked);
}

// Event listener to monitor checkbox changes
document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
  checkbox.addEventListener('change', saveChecklistState);
});

// Load checklist state when the page loads
window.onload = loadChecklistState;
