
function getElement(id) {
  const element = document.getElementById(id);
  return element;
}

let count = 0;
const heartBtns = document.getElementsByClassName('white-heart');
for (const whiteBtn of heartBtns) {
  whiteBtn.addEventListener('click', function () {

    getElement('red-heart').innerText = count++;

  })

}

const copyBtns = document.getElementsByClassName('copy-btn');
for (const copyBtn of copyBtns) {
  copyBtn.addEventListener('click', function () {

    getElement('copy-count').innerText = count++;

  })

}

const calls = document.getElementsByClassName('calls-btn');
for (const call of calls) {
  call.addEventListener('click', function () {

    let newDate=new Date();

    const serviceName = call.parentNode.parentNode.children[1].children[1].innerText;
    // console.log(serviceName);

    const number = call.parentNode.parentNode.children[1].children[2].innerText;
    // console.log(number);

    const coinCount = Number(getElement("coin").innerText);

    if (coinCount < 20 || coinCount === 0) {
      alert('❌ Not enough coins. You need at least 20 coins.');
      return;
    }

    else {
      alert(`📞 Calling ${serviceName} ${number}`);
    }

    const newCoin = coinCount - 20;
    getElement("coin").innerText = newCoin;



    const cartContainer = getElement("call-history");
    const newCart = document.createElement("div");
    newCart.innerHTML = `
    <div class="bg-gray-200 rounded-xl flex justify-between p-4 mt-3">
                  
                  <div class="">
                    <h2 class="font-bold">${serviceName}</h2>
                    <h2 class="">${number}</h2>
                  </div>
               <div class=flex>
               <h2>${newDate.toLocaleTimeString()}</h2>


               </div>

            </div>
    `;

    cartContainer.append(newCart);


  });


  getElement("btn-clear").addEventListener("click", function () {
  getElement("call-history").innerHTML="";

});





}


