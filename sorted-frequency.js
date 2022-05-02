function sortedFrequency(arr, num) {
	let firstId = findFirst(arr, num);
	if (firstId === -1) {
		return firstId;
	}
	let lastId = findLast(arr, num);
	return lastId - firstId + 1;
}

function findFirst(arr, num, low = 0, high = arr.length - 1) {
	if (high >= low) {
		let mid = Math.floor((low + high) / 2);
		if (arr[mid] === num && (arr[mid - 1] < num || mid === 0)) {
			return mid;
		} else if (arr[mid] < num) {
			return findFirst(arr, num, mid + 1, high);
		} else {
			return findFirst(arr, num, low, mid - 1);
		}
	}
	return -1;
}

function findLast(arr, num, low = 0, high = arr.length - 1) {
	if (high >= low) {
		let mid = Math.floor((low + high) / 2);
		if (arr[mid] === num && (arr[mid + 1] > num || mid === arr.length - 1)) {
			return mid;
		} else if (arr[mid] > num) {
			return findLast(arr, num, low, mid - 1);
		} else {
			return findLast(arr, num, mid + 1, high);
		}
	}
	return -1;
}

module.exports = sortedFrequency;
