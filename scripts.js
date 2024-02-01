window.onload = function () {
  var form = document.getElementById("form");

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var search_user = document.getElementById('user_name').value;
      var githubUserData;

      axios.get('https://api.github.com/users/' + search_user)
        .then(function (response) {
          console.log(response['data']);
          document.getElementById("properties").innerHTML = '';
          for (let keys of Object.keys(response['data'])) {
            document.getElementById("properties").innerHTML +=
              `<div id = keys>
              <input type="checkbox" name="${keys}">
                <label for="${keys}" >${keys}</label>
                
                </div>
                `;
          }
          githubUserData = response['data'];
          return githubUserData; 
        })
        .then(function (githubUserData) {
          var saveButton = document.getElementById("saveButton")

          saveButton.addEventListener('click', function () {
            var checkboxes = document.querySelectorAll('input[type=checkbox]');
            var datas = document.getElementById('data')
            datas.innerHTML='';
            checkboxes.forEach(function (checkbox) {
              if (checkbox.checked) {
                // console.log(githubUserData[checkbox.name]);
                var textp = document.createElement('p');
                textp.setAttribute("id","datapoints");
                var textnode = document.createTextNode(checkbox.name+" => "+githubUserData[checkbox.name]);
                textp.appendChild(textnode);
                datas.appendChild(textp);
              }
            });
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    });
  }
};
