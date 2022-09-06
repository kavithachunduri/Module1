let address= [{
    house: 1234,
    street: "Lonely St.",
    city: "Soldotna",
    zipcode: 99669,
    state: "AK"
  },
  {
    house: 14,
    street: "Lone St.",
    city: "Solna",
    zipcode: 9969,
    state: "PA"
  },
  {
    house: 234,
    street: "Lone\ly St.",
    city: "Soldo]tna",
    zipcode: 9969,
    state: "AK"
  },
  {
    house: 1534,
    street: "Lonetly St.",
    city: "Sold5otna",
    zipcode: 995669,
    state: "AK"
  },{
    house: 1234,
    street: "Lonely St.",
    city: "Soldotna",
    zipcode: 99669,
    state: "PA"
  }
]
//console.log(address[2].state);

let newAddress= [];
function count(address) {
    let count=0;
    //console.log(address.length);
 for (let i=0; i<address.length;i++){
    if (address[i].state==address[i+1].state){
      let obj= {
        state:address[i].state,
        count: count++
 
    }
    console.log (newAddress.push(obj));

 }
   
 
 }
 }
 count(address);