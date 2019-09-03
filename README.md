# useState-async-imeout-handling
Created with CodeSandbox

Make sure to use prev state when updating state asynchronously!

### Example
```
const handleOnClick = id => {
    setLoading(prev => ({ ...prev, [id]: true }));
    setTimeout(() => {
      // simulate the case for when error is returned after an api call.
      setLoading(prev => ({ ...prev, [id]: false }));
    }, 2000);
  };
```
