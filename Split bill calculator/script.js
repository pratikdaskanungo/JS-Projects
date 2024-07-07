function split() {
    let amount = document.getElementById('amount');
    let people = document.getElementById('people');
  
    if (amount.value === "" || people.value === "" || isNaN(amount.value) || isNaN(people.value)) {
      alert('Please enter valid number');
    } else {
      let result = (amount.value / people.value).toFixed(2);
      document.getElementById('result').innerHTML = result;
    }
  
    amount.value = "";
    people.value = "";
    
  }
 
