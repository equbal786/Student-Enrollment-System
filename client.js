
var row = 1;
var entry = document.getElementById("entry");
entry.addEventListener("click",displayDetails);
function displayDetails(){
    var Date = document.getElementById("date").value;
    var Course = document.getElementById("s1c1").value;
    var Institute = document.getElementById("institute").value;
    var Branch = document.getElementById("s1c2").value;
    var Students_name = document.getElementById("name").value;
    var E_number = document.getElementById("enumber").value;
    var Mob_number = document.getElementById("number").value;
    var Email = document.getElementById("Email").value;
    var Cbox = document.getElementById('cbox');
    if(!Cbox.checked){
        var newText = document.getElementById("text1");
        newText.innerHTML = "Please Fill the All Details!";
        return false;
    }

    if(!Date || !Course || !Institute || !Branch || !Students_name || !E_number || !Mob_number || !Email) {
        var newText = document.getElementById("text1");
        newText.innerHTML = "Please fill the all details!"
        return false;
    }
    var display = document.getElementById("display");
    var newRow = display.insertRow(row);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);
    var cell7 = newRow.insertCell(6);
    var cell8 = newRow.insertCell(7);

    cell1.innerHTML = Date;
    cell2.innerHTML = Course;
    cell3.innerHTML = Institute;
    cell4.innerHTML = Branch;
    cell5.innerHTML = Students_name;
    cell6.innerHTML = E_number;
    cell7.innerHTML = Mob_number;
    cell8.innerHTML = Email;

    row++;
}

function populate(s1,s2){
     var s1 = document.getElementById(s1);
     var s2 = document.getElementById(s2);
     s2.innerHTML = "";
     if(s1.value == "BE"){
         var optionArray = ['Automobile Engineering|Automobile Engineering', 'Mechanical Engineering|Mechanical Engineering', 'Electrical Engineering|Electrical Engineering',
                            'Civil Engineering|Civil Engineering', 'Electrical & Electronics Engineering|Electrical & Electronics Engineering','Computer Science & Engg|Computer Science & Engineering', 'Information Technology|Information Technology'];
     }
     else if(s1.value == "B.Pharma"){
         var optionArray = ['B.Pharma|Bachelor of Pharmacy'];
     }
     else if(s1.value == "Diploma"){
         var optionArray = ['Civil Engineering|Civil Engineering', 'Electrical Engineering|Electrical Engineering', 'Electronics & Communication|Electronics & Communication','Mechanical Engineering|Mechanical Engineering'];
     }
     else if(s1.value == "MCA"){
         var optionArray = ['MCA|MCA'];
     }
     else if(s1.value == "MBA"){
         var optionArray = ['MBA|MBA'];
     }
     else if(s1.value == "ME"){
         var optionArray = ['Advanced Prodction System|Advanced Production System', 'Power System|Power System', 'Structural Engg|Structural Engg.'];
     }
     else if(s1.value == "M.Pharma"){
         var optionArray = ['pharmaceutical|Pharmaceutical Chemistry', 'pharmaceutics|Pharmaceutics', 'quality assurance|Quality Assurance'];
     }
     else if(s1.value == "M.Tech"){
         var optionArray = ['Computer Tech & App|Computer Tech & App', 'Cyber Forensics|Cyber Forensics', 'Data Science|Data Science', 'Information technology|Information Technology'];
     }
     else if(s1.value == "B.Arch"){
         var optionArray = ['B.arch|B.Arch'];
     }
     else if(s1.value == "Phd"){
         var optionArray = ['Faculty of Mathematics|Faculty of Mathematics', 'Faculty of Pharmacy|Faculty of Pharmacy'];
     }
     for (var option in optionArray){
         var pair = optionArray[option].split("|");
         var newoption = document.createElement("option");
         newoption.value = pair[0];
         newoption.innerHTML = pair[1];
         s2.options.add(newoption);
     }
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbx_TZKR24wQhJuLgE1tUAHuD2E7eTSomoPvaqPz0vZoO6aOAPNDyl2cULatfnLPESIPFQ/exec'
const form = document.forms['google-sheet']
              
        form.addEventListener('submit', e => {
            e.preventDefault()
            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response =>  alert("Successfully Submited!.."))
            .catch(error => console.error('Error!', error.message))
        })

function noFault(){
    alert("Successfully logged out..!");
    window.location.replace("index.html",'_self');
}