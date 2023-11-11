// Extracts the profile from the current URL path and capitalizes the first letter
function getCapitalized(url) {
	if(url != '/') {
		let pathname = url;
		let parts = pathname.split('/');
		let profile = parts[1];
		let capitalizedProfile = profile.charAt(0).toUpperCase() + profile.slice(1);
		return capitalizedProfile;
	} else {
		return "Home"
	}
}

// Export the function if you are using a module system
export { getCapitalized };
