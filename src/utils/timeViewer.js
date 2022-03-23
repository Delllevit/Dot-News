export const getTimeString = (time) => {

	let ostTime = Date.now() - time;
	let str = "";
	if(ostTime < 30000) {
		str = "Щойно";
	} else if(ostTime < 60000) {
		str = "1хв тому";
	} else if(ostTime < 180000) {
		str = "3хв тому";
	} else if(ostTime < 300000) {
		str = "5хв тому";
	} else if (ostTime < 600000) {
		str = "10хв тому";
	} else if (ostTime < 900000) {
		str = "15хв тому";
	} else if (ostTime < 1800000) {
		str = "30хв тому";
	} else if (ostTime < 3600000) {
		str = "1г тому";
	} else if (ostTime < 7200000) {
		str = "2г тому";
	} else if (ostTime < 10800000) {
		str = "3г тому";
	} else {
		str = new Date(time).getDate().toString() + '/' + new Date(time).getMonth().toString();
	}


	return str;
}