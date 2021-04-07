const urlPath = "https://raw.githubusercontent.com/hexschool/js-training/main/travelApi.json";
let ticketCartArea = document.querySelector('.ticketCard-area');
let str ='';

axios.get(urlPath)
    .then(function(response){
        let data = response.data.data;
        console.log(data);//讀取陣例測試

      data.forEach((item) => {
        str += `
        <li class="ticketCard">
        <div class="ticketCard-img">
          <a href="#">
            <img src="${item.imgUrl}" alt="${item.name}">
          </a>
          <div class="ticketCard-region">${item.area}</div>
          <div class="ticketCard-rank">${item.rate}</div>
        </div>
        <div class="ticketCard-content">
          <div>
            <h3>
              <a href="#" class="ticketCard-name">${item.name}</a>
            </h3>
            <p class="ticketCard-description">
              ${item.description}
            </p>
          </div>
          <div class="ticketCard-info">
            <p class="ticketCard-num">
              <span><i class="fas fa-exclamation-circle"></i></span>
              剩下最後 <span id="ticketCard-num"> ${item.group} </span> 組
            </p>
            <p class="ticketCard-price">
              TWD <span id="ticketCard-price">$${item.price}</span>
            </p>
          </div>
        </div>
      </li>
        `;
      })
      ticketCartArea.innerHTML = str;



})