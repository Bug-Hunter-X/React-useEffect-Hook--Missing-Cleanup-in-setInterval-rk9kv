# React useEffect Hook: Missing Cleanup in setInterval
This example demonstrates a common mistake when using the `useEffect` hook with `setInterval`.  Forgetting to include a cleanup function results in memory leaks and unexpected behavior. The `setInterval` continues to run even after the component unmounts. 

The solution showcases the correct way to use `setInterval` within `useEffect` by adding a return function that uses `clearInterval` to stop the interval when the component is unmounted. 

## Bug
The original code is missing the `clearInterval` function.  This causes the `setInterval` to continue indefinitely, leading to memory leaks and performance issues.

## Solution
The solution introduces a `return` statement within the `useEffect` function. This statement contains `clearInterval(intervalId)`, effectively stopping the interval before the component is unmounted.