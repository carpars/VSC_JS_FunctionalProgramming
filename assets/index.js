{
  "use strict";
  const capify = (str) => [str.charAt(0).toUpperCase(), str.substring(1)].join("");
  const processWords = (fn, str) => str.split(" ").map(fn).join(" ");
  let getValue = (e) => console.log(processWords(capify, prompt("Give me to capitalize:")));
  // document.getElementById("butt").addEventListener("click", getValue);
  let element = document.getElementById("result-curriedFn1");
  // element.innerText = greetCurried("gg");
  const greetHello1 = greetCurried("Hii");
  element.innerText = greetHello1("Heidy");
  element = document.getElementById("result-curriedFn2");
  const greetHello2 = greetCurried("Hii");
  element.innerText = greetHello2();
  element = document.getElementById("result-curriedFn3");
  const greetHello3 =greetCurried();
  element.innerText = greetHello3("Heidy");


  function greetCurried(greeting) {
    return function (name) {
      if (typeof (greeting) != "string") {
        // console.log(typeof (greeting));
        return ("Greetings!");
      }
      else if (typeof (name) != "string") {
        return (greeting);
      }
      return (`${greeting}, ${name}`);
    }
  }

  // Currying:
  // Way #1
  console.log(greetCurried("hi")("dear"));

  // Way #2: 'Wrapped', so said  -as seen here in Currying, in this course of Functional programming
 function toWhoCurried(name) {
    return name;
  }
  var iMakeMyGreet = greetCurried("Hii my..");
  var iGreetSomebody = toWhoCurried("Dear Dino");
  console.log(iMakeMyGreet(iGreetSomebody));

  // Way #3: COMPARISON fnName()() & fnName(())
  // See that it is the same: 
    // fnName()()  
    // fnName(())
    
    console.log("COMPARISON fnName()() & fnName(()): \n\rfnName()(): " + greetCurried("Hii my..")(iGreetSomebody) + ", fnName(()): " + iMakeMyGreet(iGreetSomebody));
  

// ********* Currying with inner function being not-anonymous function:

  function greetCurriedInnerFnNonAnonymous(greeting) {
    console.log("EXAMPLE: CURRIYNG INNER FN NON-ANONYMOUS FN: outer's received param: '" + greeting + "', inner's received param: '" + name + "'");
    //return greetName(name); 
    return function(name){
      return name;
    }
  }
  function greetName(name) {
    if (typeof (name) != "string") {
      console.log("inside greetName(): will return ''");
      return;
    }
    console.log("inside greetName(): name= " + name);
    return name;
  }
  var iGreetSomeone = greetName("Dino");
  var iGreetSomehow = greetCurriedInnerFnNonAnonymous("Hi yeaah..");
  console.log("EXAMPLE: CURRIYNG INNER FN NON-ANONYMOUS FN:  its return is '" + iGreetSomehow(iGreetSomeone) + "'");


  // Comparison with closures  - -as seen in the VSC project about Closures

  // Closure
 function greetCurriedClosure(greeting) {
    return function () {
      return (`${greeting}, generic friend`);
    }
  }

  var iMakeMyGreetToGeneric = greetCurriedClosure("Hii there..");
  console.log(iMakeMyGreetToGeneric());  // waits for the callback from greetCurriedClosure() -callback which is the inner anonymous fn

  // CONCLUSION:

  // Currying are implementing 'kind of' closure but with a 'parameter' fn as inner fn
  // Closures' inner functions are 'parameterless' functions

  // Currying:
  // Because of the parameter needed, Currying needs an 'intermediate' fn to be created, as for receiving that parameter:
      // function toWhoCurried(name) { return name; }  -its return could be variable but it's fair enough it returns just the parameter), 
      
  // This fn is passed as param to the outer function:
      // 1. var iMakeMyGreet = greetCurried("Hii my..");
      // 2. var iGreetSomebody = toWhoCurried("Dear Dino");
      // 3. console.log(iMakeMyGreet(iGreetSomebody));

  // Closures:
  // But in closures we just make a call without parameter: ..()
      // 1. var iMakeMyGreetToGeneric = greetCurriedClosure("Hii there..");
      // 2. console.log(iMakeMyGreetToGeneric());  -parameterless call
    };
