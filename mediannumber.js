var first = function (nums1, nums2) {
    var len = nums1.length + nums2.length;
    var halfLen;
    if (len % 2 === 0) {
        halfLen = len / 2;
        return (second(nums1, 0, nums2, 0, halfLen) +
            second(nums1, 0, nums2, 0, halfLen + 1)) / 2;
    }
    else {
        halfLen = (len + 1) / 2;
        return second(nums1, 0, nums2, 0, halfLen);
    }
};

function second(nums1, i, nums2, j, k) {
    if (i >= nums1.length) return nums2[j + k - 1];
    if (j >= nums2.length) return nums1[i + k - 1];
    if (k == 1) {
        return Math.min(nums1[i], nums2[j]);
    }
    var halfK = Math.floor(k / 2);
    var iIndex = i + halfK - 1;
    var jIndex = j + halfK - 1;
    var v1 = iIndex < nums1.length ? nums1[iIndex] : Infinity;
    var v2 = jIndex < nums2.length ? nums2[jIndex] : Infinity;
    if (v1 >= v2) {
    	return second(nums1, i, nums2, j + halfK, k - halfK);
    }
    else {
    	return second(nums1, i + halfK, nums2, j, k - halfK);
    }
}

var nums1 = [1,4,5,7,8,9];
var nums2 = [0,6,8,9,14];

console.log(first(nums1, nums2));
