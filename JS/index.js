let input = document.querySelector('input');
let btn = document.querySelector('button');
let list = document.getElementById('list');

function fetchData(searchText) {
  axios.get(`https://api.tvmaze.com/search/shows?q=${searchText}`)
  .then(function(response) {
    manipulateDOM(response.data);
  })
}

function manipulateDOM(data) {
  while(list.firstChild) {
    // list.firstChild.remove();
  }

  for (let d of data) {
    if (d.show.image) {
      let img = document.createElement('img');
      img.setAttribute('src', d.show.image.original);
      list.appendChild(img);
    }  
  }
}

btn.addEventListener('click', function() {
  let searchText = input.value;
  let data = fetchData(searchText);
})
