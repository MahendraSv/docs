let a = [ 1, 3, 5, 2, 3, 1, 1];

// Method 1
[...new Set(a)].sort()

// Method 2
a.filter((value, index) => a.lastIndexOf(value) === index)

// Method 3
a.reduce((acc, v) => {
  console.log(acc, v); 
  return acc.indexOf(v) > -1 ?  acc : [...acc, v]
}, [])
