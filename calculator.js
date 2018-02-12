function action(method) {
      
         //var a = parseInt(document.getElementById("num1").value);         
          var a = parseInt($('#num1').val());
         // var b = parseInt(document.getElementById("num2").value);
         var b = parseInt($('#num2').val());
          var result = null;

          switch (method) {
            case 'add':
              result = a + b;

              break;
            case 'subtract':
              result = a - b;
              break;
            case 'multiply':
              result = a * b;
              break;
            case 'divide':
              if (b !== 0) {
                result = a / b;
              } else {
                alert('Can\'t divide by 0');

                return;
              }

              break;
          }

          if (result !== null) {

            document.getElementById("result").value = result;
          } else {

            document.getElementById("num1").value = "";
            document.getElementById("num2").value = "";
            document.getElementById("result").value = "";
          }
        }; 
        

    