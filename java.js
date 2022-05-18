paypal.Buttons({
    style:{
        layout:  'horizontal',
        shape:   'pill',
        label:   'paypal',
        size: 'large',
    },
    createOrder: function(data, actions) {
        // This function sets up the details of the transaction, including the amount and line item details.
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: '100'
            }
          }]
        });
      },
      onApprove: function(data, actions) {
        // This function captures the funds from the transaction.
        return actions.order.capture().then(function(details) {
          // This function shows a transaction success message to your buyer.
          console.log(details);
          window.location.replace("http://localhost/The%20Spark%20Foundation%20Task/Paypal%20payment/success.php");
        });
      },
      onCancel: function (data) {
        console.log(data);
        window.location.replace("http://localhost/The%20Spark%20Foundation%20Task/Paypal%20payment/failure.php");

      }
    }).render('#paypal_btn');



// //This function displays Smart Payment Buttons on your web page.
