document.getElementById('button').addEventListener('click', loadExchange);

    // Load Currency Exchange Rates
    function loadExchange(){
      var xhr = new XMLHttpRequest();
      xhr.open('GET', 'http://apilayer.net/api/live?access_key=16d76388db3d0cdd28e6862f0a23a5b8&currencies=EUR,GBP,CAD,PLN,INR&source=USD&format=1', true);

      xhr.onload = function(){
        if(this.status == 200){
          var currency = JSON.parse(this.responseText);
          var ex_rates = currency.quotes;
          var output = '';
          
            output +=
              '<div class="currency">' +
              '<table>' +
              '<tr>' +
                '<th>Time Stamp</th>'+
                '<th>US Dollar = $1</th>' +
                '<th>Exchange Rates</th>'+
              '</tr>'+
              '<tr>'+
                '<td>'+currency.timestamp+ '</td>'+
                '<td>'+currency.source+'</td>' +
                

                '<td> <ul> <li> EUR:  ' + currency.quotes.USDEUR +'</li>' +
                  '<li> GBP:   ' + currency.quotes.USDGBP +'</li>' +
                  '<li> CAD:   ' + currency.quotes.USDCAD +'</li>' +
                  '<li> PLN:   ' + currency.quotes.USDPLN +'</li>' +
                  '<li> INR:   ' + currency.quotes.USDINR +'</li></ul></td>' +
                
              '</table>'+
              '</div>';
            

          document.getElementById('currency').innerHTML = output;
        }
      }

      xhr.onerror = function(){
      	console.log("Request Error...");
      }

      xhr.send();
    }