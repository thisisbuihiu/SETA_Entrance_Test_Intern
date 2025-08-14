
function mostFrequentStringLengths(strings) {
    //Mảng rỗng
    if (!strings || strings.length === 0) {
        return [];
    }
    
    //Đếm độ dài của các strings
    const lengthFrequency = {};
    
    for (const str of strings) {
        const length = str.length;
        lengthFrequency[length] = (lengthFrequency[length] || 0) + 1;
    }
    
    //Tìm frequency xuất hiện nhiều nhất
    const maxFrequency = Math.max(...Object.values(lengthFrequency));
    
    //Tìm tất cả các strings có tần suất xuất hiện nhiều nhất
    const mostFrequentLengths = [];
    for (const [length, frequency] of Object.entries(lengthFrequency)) {
        if (frequency === maxFrequency) {
            mostFrequentLengths.push(parseInt(length));
        }
    }
    
    //Lọc các strings có độ dài xuất hiện nhiều nhất
    return strings.filter(str => mostFrequentLengths.includes(str.length));
}

// Test Cases
console.log("=== Test Cases ===");

// Test Case 1: Ví dụ trong đề
const test1 = ['a', 'ab', 'abc', 'cd', 'def', 'gh'];
console.log("Test 1:");
console.log("Input:", test1);
console.log("Output:", mostFrequentStringLengths(test1));
console.log("Expected: ['ab', 'cd', 'gh']");
console.log();

// Test Case 2: 
const test2 = ['hello', 'world', 'test', 'code'];
console.log("Test 2:");
console.log("Input:", test2);
console.log("Output:", mostFrequentStringLengths(test2));
console.log("Expected: ['hello', 'world', 'test', 'code'] (all have length 4-5, but 4 appears once, 5 appears twice)");
console.log();

// Test Case 3:
const test3 = ['a', 'ab', 'abc'];
console.log("Test 3:");
console.log("Input:", test3);
console.log("Output:", mostFrequentStringLengths(test3));
console.log("Expected: ['a', 'ab', 'abc'] (all lengths appear once)");
console.log();

// Test Case 4:
const test4 = [];
console.log("Test 4:");
console.log("Input:", test4);
console.log("Output:", mostFrequentStringLengths(test4));
console.log("Expected: []");
console.log();

// Test Case 5
const test5 = ['single'];
console.log("Test 5:");
console.log("Input:", test5);
console.log("Output:", mostFrequentStringLengths(test5));
console.log("Expected: ['single']");
console.log();

// Test Case 6
const test6 = ['cat', 'dog', 'bat', 'rat'];
console.log("Test 6:");
console.log("Input:", test6);
console.log("Output:", mostFrequentStringLengths(test6));
console.log("Expected: ['cat', 'dog', 'bat', 'rat']");
console.log();

// Optional: Simple Unit Test Function
function runTests() {
    console.log("=== Unit Tests ===");
    
    const tests = [
        {
            name: "Example case",
            input: ['a', 'ab', 'abc', 'cd', 'def', 'gh'],
            expected: ['ab', 'cd', 'gh']
        },
        {
            name: "Empty array",
            input: [],
            expected: []
        },
        {
            name: "Single string",
            input: ['hello'],
            expected: ['hello']
        },
        {
            name: "All same length",
            input: ['cat', 'dog', 'bat'],
            expected: ['cat', 'dog', 'bat']
        }
    ];
    
    let passed = 0;
    let total = tests.length;
    
    tests.forEach((test, index) => {
        const result = mostFrequentStringLengths(test.input);
        const isEqual = JSON.stringify(result.sort()) === JSON.stringify(test.expected.sort());
        
        console.log(`Test ${index + 1} (${test.name}): ${isEqual ? 'PASS' : 'FAIL'}`);
        if (!isEqual) {
            console.log(`  Expected: ${JSON.stringify(test.expected)}`);
            console.log(`  Got: ${JSON.stringify(result)}`);
        }
        
        if (isEqual) passed++;
    });
    
    console.log(`\nResults: ${passed}/${total} tests passed`);
}

// Run the tests
runTests();
