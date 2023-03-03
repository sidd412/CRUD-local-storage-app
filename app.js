document.getElementById("expForm").addEventListener("submit", addExpense);
const expenses = JSON.parse(localStorage.getItem("expenses")) || [];
const nett = document.getElementById('nett');
function addExpense(e) {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let amount = document.getElementById("amount").value;

  const expense = {
    name,
    amount,
    id: expenses.length > 0 ? expenses[expenses.length - 1].id + 1 : 1,
  };

  expenses.push(expense);
  localStorage.setItem("expenses", JSON.stringify(expenses));
  document.getElementById("expForm").reset();
  showExpenses();
}


const showExpenses = () => {
   
  const Items = document.getElementById("Items");
  Items.innerHTML = "";
  var x = 0;
  for (let i = 0; i < expenses.length; i++) {
     x = x + Number(expenses[i].amount) 
    Items.innerHTML += `
           <li> ${expenses[i].amount}  &nbsp   ${expenses[i].name} &nbsp &nbsp
           <button class="deleteButton" onclick="deleteExpense(${expenses[i].id})">Delete Product</button></li>`;
  }
  nett.innerText = x; 
};

const deleteExpense = (id) => {
  for (let i = 0; i < expenses.length; i++) {
    if (expenses[i].id == id) {
      expenses.splice(i, 1);
    }
  }
  localStorage.setItem("expenses", JSON.stringify(expenses));
  showExpenses();
};

showExpenses();
