const { callOnReady } = require("./ready");

module.exports.stringToHead = (str, id) => {
	callOnReady(() => {
		id = `${id}-styles`;

		let element = document.getElementById(id);

		if (element) return (element.textContent = str);

		element = document.createElement(`style`);
		element.id = id;
		element.textContent = str;
		document.head.appendChild(element);
	});
};
