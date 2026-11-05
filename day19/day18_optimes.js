const info = {
  name: "rahul",
  address: "khatima",
};

function order(info) {
  console.log(`${info.name} order your iteam`);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random()> 0.1) {
        console.log(`${info.name} pay the payment`);
        resolve(info);
      } else {
        reject("payment is fail");
      }
    }, 3000);
  });
}

function prepra(info) {
  console.log(`${info.name} your oder perperaing`);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`${info.name} your oder perperaing successfull `);
      resolve(info);
    }, 3000);
  });
}

function dilevery(info) {
  console.log(`${info.name} your dilvery partner assign`);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`your order arived for ${info.address}`);
      resolve();
    }, 3000);
  });
}

function suc() {
  return new Promise((resolve, reject) => {
    console.log("dilver successfull");
    resolve();
  });
}

order(info)
  .then((info) => prepra(info))
  .then((info) => dilevery(info))
  .then((info) => suc())
  .catch((error) => {
    console.log("error : ", error);
  })
.finally(()=>{
    console.log('task is finished');
  })
