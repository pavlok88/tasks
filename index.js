const forever = require("async/forever");

// =========simple forever method  usage examle ============

// const random = () => {
//   const random = Math.random().toFixed(1) * 10;
//   console.log(random);
//   return random;
// }; // random from 0 to 10

// forever(
//   function (next) {
//     setTimeout(() => {
//       const r = random();
//       r ? next() : next('error "random = 0"');
//     }, 500);
//   },
//   function (err) {
//     setTimeout(random, 10 * 1000);
//     console.log(err);
//   }
// );

//===============================================


//=========  native async/await =======


const random = () => {
    const random = Math.random().toFixed(1) * 10;
    if (!random) {
        throw new Error("random=0");
    }
    console.log(random);
    return random;
  }; // random from 0 to 10
  
  async function foreverNative(targetFunction) {
    let i = true;
    while (i) {
      (async function f() {
        try {
          const result = await targetFunction();
        } catch (error) {
          i = false;
          console.log(error.message);
        }
      })();
    }
    setTimeout(() => {
      targetFunction();
    }, 10 * 1000);
  }
  
  foreverNative(random);