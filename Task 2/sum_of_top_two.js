
function sumOfTwoLargest(numbers) {
    //Edge Case   
    if (!numbers || numbers.length < 2) {
        throw new Error("Array must contain at least 2 numbers");
    }
    
    //Tìm 2 số lớn nhất
    let largest = -Infinity;
    let secondLargest = -Infinity;
    
    for (const num of numbers) {
        if (num > largest) {
            secondLargest = largest;  //Số lớn nhất ban đầu trở thành số lớn thứ hai
            largest = num;            //New largest number
        } else if (num > secondLargest) {
            secondLargest = num;      //New second largest number
        }
    }
    
    //Tổng 2 số lớn nhất
    return largest + secondLargest;
}

//Test Cases
console.log("=== Test Cases ===");

//Test Case 1: Ví dụ trong đề
const test1 = [1, 4, 2, 3, 5];
console.log("Test 1:");
console.log("Input:", test1);
console.log("Output:", sumOfTwoLargest(test1));
console.log("Expected: 9 (5 + 4)");
console.log();

//Test Case 2: Số lặp lại
const test2 = [10, 10, 9, 8, 7];
console.log("Test 2:");
console.log("Input:", test2);
console.log("Output:", sumOfTwoLargest(test2));
console.log("Expected: 20 (10 + 10)");
console.log();

//Test Case 3: Số âm
const test3 = [-1, -5, -2, -8, -3];
console.log("Test 3:");
console.log("Input:", test3);
console.log("Output:", sumOfTwoLargest(test3));
console.log("Expected: -3 (-1 + -2)");
console.log();

//Test Case 4: Số dương + âm
const test4 = [-10, 5, -3, 8, 2];
console.log("Test 4:");
console.log("Input:", test4);
console.log("Output:", sumOfTwoLargest(test4));
console.log("Expected: 13 (8 + 5)");
console.log();

//Test Case 5: Số rất lớn
const test5 = [1000000, 999999, 1, 2, 3];
console.log("Test 5:");
console.log("Input:", test5);
console.log("Output:", sumOfTwoLargest(test5));
console.log("Expected: 1999999 (1000000 + 999999)");
console.log();

//Test Case 6
const test6 = [5, 5, 5, 5, 5];
console.log("Test 6:");
console.log("Input:", test6);
console.log("Output:", sumOfTwoLargest(test6));
console.log("Expected: 10 (5 + 5)");
console.log();

//Edge Case
console.log("=== Exception ===");

try {
    console.log("Empty array test:");
    sumOfTwoLargest([]);
} catch (error) {
    console.log("✓ Correctly caught error:", error.message);
}

try {
    console.log("Single element test:");
    sumOfTwoLargest([42]);
} catch (error) {
    console.log("✓ Correctly caught error:", error.message);
}
console.log();

//Unit Test
function runUnitTests() {
    console.log("=== Unit Tests ===");
    
    const tests = [
        {
            name: "Example case",
            input: [1, 4, 2, 3, 5],
            expected: 9
        },
        {
            name: "Duplicates",
            input: [10, 10, 9, 8, 7],
            expected: 20
        },
        {
            name: "Negative numbers",
            input: [-1, -5, -2, -8, -3],
            expected: -3
        },
        {
            name: "Mixed positive/negative",
            input: [-10, 5, -3, 8, 2],
            expected: 13
        },
        {
            name: "Two elements",
            input: [15, 7],
            expected: 22
        },
        {
            name: "All same numbers",
            input: [5, 5, 5, 5, 5],
            expected: 10
        }
    ];
    
    let passed = 0;
    let total = tests.length;
    
    tests.forEach((test, index) => {
        try {
            const result = sumOfTwoLargest(test.input);
            const isCorrect = result === test.expected;
            
            console.log(`Test ${index + 1} (${test.name}): ${isCorrect ? 'PASS' : 'FAIL'}`);
            if (!isCorrect) {
                console.log(`  Expected: ${test.expected}`);
                console.log(`  Got: ${result}`);
            }
            
            if (isCorrect) passed++;
        } catch (error) {
            console.log(`Test ${index + 1} (${test.name}): FAIL - ${error.message}`);
        }
    });
    
    // Test error cases
    console.log("\nError handling tests:");
    
    const errorTests = [
        { name: "Empty array", input: [] },
        { name: "Single element", input: [42] },
        { name: "Null input", input: null }
    ];
    
    errorTests.forEach((test, index) => {
        try {
            sumOfTwoLargest(test.input);
            console.log(`Error Test ${index + 1} (${test.name}): FAIL - Should have thrown error`);
        } catch (error) {
            console.log(`Error Test ${index + 1} (${test.name}): PASS - Correctly threw error`);
            passed++;
            total++;
        }
    });
    
    console.log(`\nResults: ${passed}/${total} tests passed`);
}

// Run all tests
runUnitTests();
