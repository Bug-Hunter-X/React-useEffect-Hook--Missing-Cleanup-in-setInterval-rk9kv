```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect: missing return statement to cleanup the interval
    const intervalId = setInterval(() => {
      setCount(count + 1);
    }, 1000);
  }, []);

  return <div>Count: {count}</div>;
}
```