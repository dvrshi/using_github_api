
window.onload = function () {

  var form = document.getElementById("form")

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var search_user = document.getElementById('user_name').value;
      axios.get('https://api.github.com/users/' + search_user)
        .then(function (response) {
          // console.log(response['data'])
          
          for (let keys of Object.keys(response['data']))
            {
              document.getElementById("properties").innerHTML+=
              `<input type="checkbox" id=${keys} name="${keys}">
              <label for="${keys}">${keys}</label>
              <br>`
            }
        })
        .catch(function (error) {
          console.log(error);
        });
    })
  }


}

