document.addEventListener('DOMContentLoaded', function () {
        // Get the elements to be styled
        const h1 = document.querySelector("h1");
        const h2 = document.querySelector("h2");
        const p = document.querySelector("p");
        const button = document.getElementById("color-toggle");

        function changeMood() {
            if (document.body.style.backgroundColor === "black") {
                document.body.style.backgroundColor = "#748D92";
                h1.style.color = '#D3D9D4';
                h2.style.color = '#D3D9D4';
                p.style.color = '#D3D9D4';
                button.style.backgroundColor = "#f0f0f0";
                button.style.color = "#333";
            } else {
                document.body.style.backgroundColor = "black";
                h1.style.color = 'white';
                h2.style.color = 'white';
                p.style.color = 'white';
                button.style.backgroundColor = "#333";
                button.style.color = "white";
            }
        }

        button.addEventListener("click", changeMood);
    });