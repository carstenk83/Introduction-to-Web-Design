document.addEventListener('DOMContentLoaded', function () {
  // Get the elements for buttons and the quote area
  const changeContentButton = document.getElementById("changeContentButton");
  const changeColorButton = document.getElementById("changeColorButton");
  const quoteElement = document.getElementById("quote");
  const h2 = document.querySelector("h2");
  const p = document.querySelector("p");
  const dayOfWeekElement = document.getElementById("dayOfWeek");

  
  const fletcherQuote = '"There are no two words in the English language more harmful than "Good job."';

  
  function showFletcherQuote() {
    if (quoteElement.textContent === "") {
      quoteElement.textContent = fletcherQuote;
      
    } else {
      quoteElement.textContent = '';
    }
    
  }

  
  function changeMood() {
    if (document.body.style.backgroundColor === "black") {
      document.body.style.backgroundColor = "#d0d2d6";
      h2.style.color = 'black';
      p.style.color = 'black';
      quoteElement.style.color = 'black';
    } else {
      document.body.style.backgroundColor = "black";
      h2.style.color = 'white';
      p.style.color = 'white';
      quoteElement.style.color = 'white';
    }
  }



  changeContentButton.addEventListener("click", showFletcherQuote);
  changeColorButton.addEventListener("click", changeMood);

  
    function updateDayOfWeek() {
        const today = new Date();
        const day = today.getDay();
        let dayText = "";
        let textColor = "";

        
        switch (day) {
            case 0:
                dayText = "It's the weekend!";
                textColor = "red";
                break;
            case 6:
                dayText = "It's the weekend!";
                textColor = "red";
                break;
            case 1:
                dayText = "Today is Monday";
                textColor = "lightblue"; 
                break;
            case 2: 
                dayText = "Today is Tuesday";
                textColor = "green"; 
                break;
            case 3: 
                dayText = "Today is Wednesday";
                textColor = "purple"; 
                break;
            case 4: 
                dayText = "Today is Thursday";
                textColor = "orange";
                break;
            case 5: 
                dayText = "Today is Friday";
                textColor = "yellow"; 
                break;
            default:
                dayText = "Unknown Day";
                textColor = "black";
        }

       
        dayOfWeekElement.textContent = dayText;
        dayOfWeekElement.style.color = textColor;
    }

    updateDayOfWeek();
});