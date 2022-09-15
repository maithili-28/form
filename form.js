let userform = document.getElementById("user form");

const retrieveEntries = () =>{
    let entries = localStorage.getItem("userentries");
    if (entries) {
        entries = JSON.parse(entries);
    } else{
        entries = [];
    } 
    return entries;
}
let userEntries = retrieveEntries();

const displayEntries = () =>{

    const entries = retrieveEntries();
    /*
    <table>
    <tr>
       <th>Name</th>
       <th>Email</th>
       ...
       </tr>
       </table>
       */
       const tableEntries = entries.map((entry) =>{
        const nameCell = `<td class='border px-4 py-2'>${entry.name}</td>`;
        const emailCell = `<td class='border px-4 py-2'>${entry.email}</td>`;
        const passwardCell = `<td class='border px-4 py-2'>${entry.passward}</td>`;
        const dobCell = `<td class = 'border px-4 py-2'>${entry.dob}</td>`;
        const acceptTermsCell = `<td class = 'border px-4 py-2'>${entry.acceptedTermsAndconditions}</td>`;

        const row = `<tr>${nameCell} ${emailCell} ${passwardCell} ${dobCell} ${acceptTermsCell}</tr>`;
        return row;
      }).join("\n");

      const table = `<table class="table-auto w-full"><tr>
      
      <th class = "px-4 py-2">Name</th>
      <th class = "px-4 py-2">Email</th>
      <th class = "px-4 py-2">Passward</th>
      <th class = "px-4 py-2">dob</th>
      <th class = "px-4 py-2">acceted terms?</th>
      </tr>${tableEntries} </table>`;

      let details = document.getElementById("user-entries");
      details.innerHTML = table;

}
const saveUserform = (Event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const passward = document.getElementById("passward").value;
    const dob  = document.getElementById("dob").value;

    const acceptedTermsAndconditions = document.getElementById(acceptedTerms).checked;

    const entry = {
        name,
        email,
        passward,
        dob,
        acceptedTermsAndconditions,
    };
    userEntries.push(entry);
    localStorage.setItem("user-entries",JSON.stringify(userEntries));
    displayEntries();

}
userform.addEventListener("submit","saveUserform");
displayEntries();