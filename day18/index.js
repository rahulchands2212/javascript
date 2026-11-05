const info = {
    name : 'rahul',
    address : 'khatima'
};

function order(info,callback) {
  console.log(` ${info.name} order your iteam`);

  setTimeout(() => {
    console.log(`${info.name} pay the payment`);
    callback(info);
  }, 3000);
}

function prepra(info,callback) {
  console.log(` ${info.name} your oder perperaing`);

  setTimeout(() => {
    console.log(`${info.name} your oder perperaing successfull `);
    callback(info);
  }, 3000);
}

function dilevery(callback) {
  console.log(` ${info.name}your dilvery partner assign`);

  setTimeout(() => {
    console.log(`your order arived for ${info.address}`);
    callback();
  }, 3000);
}

function suc(){
    console.log("dilver successfull");
}

order(info,(info)=>{
    prepra(info,(info)=>{
        dilevery(()=>{
            suc();
        });
    });
});
