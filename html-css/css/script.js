const copyButtons = document.querySelectorAll(".copy-button");

for (const button of copyButtons) {
	button.addEventListener("click", () => {
		const code = button.previousElementSibling.querySelector("code").innerText;
		navigator.clipboard.writeText(code).then(() => {
			button.innerText = "Copied!";
			setTimeout(() => {
				button.innerText = "Copy";
			}, 2000);
		});
	});
}