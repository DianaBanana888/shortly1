console.log('hi there!')
function useState(defaultValue) {
    // 👆🏻We create a function useState with a default value
    let value = defaultValue;
    // 👆🏻We create a local variable value = defaultValue
    function getValue() {
      // 👆🏻We create a function getValue to get the value that return the value
      return value;
    }
    function setValue(newValue) {
      // 👆🏻We create a function to set the value with parameter newValue
      value = newValue; // 👈🏻 We change the value for newValue
      render(); // 👈🏻We run the render function on our app
    }
    return [getValue, setValue];
    // 👆🏻We return an array with the value and the function
  }
  
  const [counter, setCounter] = useState(0);
  // 👆🏻We destructure the array as a return of the useState function into two value
  
  const app = document.getElementById("counter");
  const button = document.getElementById("theRightButton");
  
  button.addEventListener("click", increment);
  
  function render() {
    app.innerHTML = counter();
    
    // 👆🏻We display the counter inside our html and update when render is called
  }
  
  function increment() {
    setCounter(counter() + 1);
  }
  
  render();