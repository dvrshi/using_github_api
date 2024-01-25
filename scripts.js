
// window.onload = function () {


    var form = document.getElementById("form")

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            var search_user = document.getElementById('user_name').value;
            
           fetch("https://api.github.com/users/"+search_user)
           .then((result) => result.json())
           .then((data)=> {
            console.log(data['location'])
           })
        });
    } else {
        console.error('Form element not found');
    }

// }