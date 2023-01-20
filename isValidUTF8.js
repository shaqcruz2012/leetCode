// Given an integer array `data` representing the data, return whether it is a valid **UTF-8** encoding (i.e. it translates to a sequence of valid UTF-8 encoded characters).

// A character in **UTF8** can be from **1 to 4 bytes** long, subjected to the following rules:

// 1. For a **1-byte** character, the first bit is a `0`, followed by its Unicode code.
// 2. For an **n-bytes** character, the first `n` bits are all one's, the `n + 1` bit is `0`, followed by `n - 1` bytes with the most significant `2` bits being `10`.

// This is how the UTF-8 encoding would work:

// ```
//      Number of Bytes   |        UTF-8 Octet Sequence
//                        |              (binary)
//    --------------------+-----------------------------------------
//             1          |   0xxxxxxx
//             2          |   110xxxxx 10xxxxxx
//             3          |   1110xxxx 10xxxxxx 10xxxxxx
//             4          |   11110xxx 10xxxxxx 10xxxxxx 10xxxxxx

// ```

// `x` denotes a bit in the binary form of a byte that may be either `0` or `1`.

// **Note:** The input is an array of integers. Only the **least significant 8 bits** of each integer is used to store the data. This means each integer represents only 1 byte of data.

// ```
var isValidUTF8 = function(data) {
    let i = 0;
    while (i < data.length) {
        let byte = data[i];
        let byteCount;
        if ((byte & 0b10000000) === 0) byteCount = 1;
        else if ((byte & 0b11100000) === 0b11000000) byteCount = 2;
        else if ((byte & 0b11110000) === 0b11100000) byteCount = 3;
        else if ((byte & 0b11111000) === 0b11110000) byteCount = 4;
        else return false;
        i++;
        for (let j = 1; j < byteCount; j++) {
            if (i >= data.length || (data[i] & 0b11000000) !== 0b10000000) return false;
            i++;
        }
    }
    return true;
};

// ```

// This implementation uses a pointer to iterate through the input array, and for each element, it uses bitwise operations to check if the first few bits match the pattern of a valid UTF-8 encoded character. For example, if the first bit is 0, then it's a 1-byte character, if the first three bits are 110, then it's a 2-byte character, and so on.
// It also checks if the next byteCount bytes of the input are valid, if the next byte starts with '10' and also checks if the pointer is not out of bound.
// At the end, if all the bytes are valid UTF-8 encoded characters, the function returns true, otherwise it returns false.

// This algorithm has a linear time complexity of O(n), where n is the number of bytes in the input data.