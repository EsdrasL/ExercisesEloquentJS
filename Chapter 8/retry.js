//Chapter 8 - Retry
function MultiplicatorUnitFailure() {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.5)
    return a * b;
  else
    throw new MultiplicatorUnitFailure();
}

function reliableMultiply(a, b) {
  for(;;) {
    try {
      return primitiveMultiply(a, b);
    } catch(e) {
      if(e instanceof MultiplicatorUnitFailure)
        console.log("Multiplicator Unit Failure. Trying again...");
      else
        throw e;
    }
  }
}

console.log(reliableMultiply(8, 8));
