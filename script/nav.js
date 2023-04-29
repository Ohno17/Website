const menu = document.getElementById("mobilenav");

function toggleMenu() {
	const state = menu.getAttribute("data-menuopen");

	// Toggle value
	if (state == "true") {
		menu.setAttribute("data-menuopen", "false");
	} else {
		menu.setAttribute("data-menuopen", "true");
	}
	
}