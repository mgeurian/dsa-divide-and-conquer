function linearSearch(arr, target) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === target) {
			return i;
		}
		return -1;
	}
}

function binarySearch(arr, target) {
	let leftIdx = 0;
	let rightIdx = arr.length - 1;

	while (leftIdx <= rightIdx) {
		let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
		let middleVal = arr[middleIdx];

		if (middleVal < target) {
			leftIdx = middleIdx + 1;
		} else if (middleVal > target) {
			rightIdx = middleIdx - 1;
		} else {
			return middleIdx;
		}
	}
	return -1;
}
