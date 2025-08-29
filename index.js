
function getElement(id) {
  const element = document.getElementById(id);
  return element;
}

let heartCount = 0;
let copyCount = 0;
const heartBtns = document.getElementsByClassName('white-heart');
for (const whiteBtn of heartBtns) {
  whiteBtn.addEventListener('click', function () {

    getElement('red-heart').innerText = ++heartCount;

  })

}

const copyBtns = document.getElementsByClassName('copy-btn');
for (const copyBtn of copyBtns) {

  copyBtn.addEventListener('click', function () {

    const number = copyBtn.parentNode.parentNode.children[1].children[2].innerText;

    navigator.clipboard.writeText(number)
      .then(() => {

        alert(`Hotline number copied successfully! \n${number}`);
         
      })
      .catch(err => {
        console.error('Copy failed:', err);
      });

    getElement('copy-count').innerText = ++copyCount;

  })


}


const calls = document.getElementsByClassName('calls-btn');
for (const call of calls) {
  call.addEventListener('click', function (e) {
    const call=e.target;


    let newDate = new Date();

    const serviceName = call.parentNode.parentNode.children[1].children[0].innerText;
    console.log(serviceName);

    const number = call.parentNode.parentNode.children[1].children[2].innerText;
    // console.log(number);


    const coinCount = Number(getElement("coin").innerText);

    if (coinCount < 20 || coinCount === 0) {
      alert('❌ Not enough coins. You need at least 20 coins.');
      return;
    }

    else {
      alert(`📞 Calling... \n${serviceName} : ${number}`);
    }

    const newCoin = coinCount - 20;
    getElement("coin").innerText = newCoin;



    const cartContainer = getElement("call-history");
    const newCart = document.createElement("div");
    newCart.innerHTML = `
    <div class="bg-gray-200 rounded-xl flex justify-between px-2 py-3 mt-3">
                  
                  <div class=" space-y-1 ">
                    <h2 class="font-bold text-sm">${serviceName}</h2>
                    <h2 class="text-base  text-gray-700 text-left">${number}</h2>
                  </div>
               <div class=flex>
               <h2>${newDate.toLocaleTimeString()}</h2>


               </div>

            </div>
    `;

    cartContainer.append(newCart);


  });

  getElement("btn-clear").addEventListener("click", function () {
    getElement("call-history").innerHTML = "";

  });


}




