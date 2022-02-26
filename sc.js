var k=0;
var i=0;
var ru=new Array();
var tr=new Array();
var bg= new Array("4671D5", "F93E58", "DC63C2", "5CCCCC", "F46E8F");
var bd= new Array("1240AB", "F30021", "B90091", "1D7373", "E9003A");
function add() {
var rus=document.words.ru.value;
var trs=document.words.tr.value;
ru[k]=rus;
tr[k]=trs;
    k++;
}
function ready() {
while(i!=k) {
   // add();
    var div = document.createElement('div');
    var p = document.createElement('p');
    var p2 = document.createElement('p');
  p.className="slova"
  p2.className="perevod"
  div.className = "front";
  p.innerHTML = ru[i]; 
  p2.innerHTML = tr[i];
   var elem=document.getElementById("ff");
   elem.appendChild(div);
   div.appendChild(p);
   div.appendChild(p2);
   div.setAttribute('onclick', 'nazhal('+i+')');
   div.setAttribute('id', 'card'+i);
     p2.setAttribute('id', 'tra'+i);
   div.style.top=i+3+"vh";
   div.style.backgroundColor="#"+bg[i];
   div.style.borderColor="#"+bd[i];
i++;
}
}
function nazhal(r) {
var word = document.getElementById("tra"+r);
word.style.display="block";
    //alert("кек номер"+r);
}
