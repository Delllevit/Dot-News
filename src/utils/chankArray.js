export const chunkArray = (array, chunk) => {
	const newArray = [];
	for (let i = 0; i < array.length; i += chunk) {
		newArray.push(array.slice(i, i + chunk));
	}
	return newArray;
}