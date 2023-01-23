console.log("Hallo von extraJS again");

document.addEventListener("alpine:init", () => {
	Alpine.data("dropdown", () => ({
		open: false,
		toggle() {
			this.open = !this.open;
		},
	}));
});
