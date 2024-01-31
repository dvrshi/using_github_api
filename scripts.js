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
              `<input type="checkbox" id=${keys} name="${keys}">
                <label for="${keys}">${keys}</label>
                <br>`;
          }
          githubUserData = response['data'];
          return githubUserData; // Return the data to be used in the next then block
        })
        .then(function (githubUserData) {
          var saveButton = document.getElementById("saveButton")

          saveButton.addEventListener('click', function () {
            var checkboxes = document.querySelectorAll('input[type=checkbox]');
            checkboxes.forEach(function (checkbox) {
              if (checkbox.checked) {
                console.log(githubUserData[checkbox.id]);
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
