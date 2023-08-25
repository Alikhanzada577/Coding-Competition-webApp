let url = "https://kontests.net/api/v1/all"
let response = fetch(url)
response.then((v) => {
  return v.json()
}).then((contests) => {
  console.log(contests)
  ihtml = ""
  const imageUrls = [
  "https://www.hp.com/us-en/shop/app/assets/images/uploads/prod/5%20Best%20Coding%20Programs%20for%20Aspiring%20Programmers1650304687858345.jpg",
  "https://www.bloemfonteincourant.co.za/wp-content/uploads/2018/07/digital-coding-785.jpg",
    "https://149695847.v2.pressablecdn.com/wp-content/uploads/2019/06/chris-ried-512801-unsplash.jpg"
];
  for (let item = 0; item < contests.length; item++) {
    console.log(contests[item])
    const contest = contests[item];
    ihtml += `
     <div class="card" style="width: 22rem;">
      <img src="${imageUrls[item % 3]}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${contest.name}</h5>
        <p class="card-text"><a href="${contest.url}">Visit Contest</a></p>
        <p>Starts at: ${contest.start_time} </p>
        <p>ends at: ${contest.end_time} </p>
        <p>Status: ${contest.status} </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    `
    cardContainer.innerHTML = ihtml
  }
  document.getElementById('your-container').innerHTML = ihtml;
})
