
class LNode{
value;
next;
constructor(value){
this.value=value;
this.next=null;

}
}
class Llist{
head;
size;
constructor(){
this.size=0;
}

getSize(){
    return this.size;
}
WriteOut(){
    let prnode;
    prnode=this.head;
    console.log(prnode.value);
    while(prnode.next!=null){
        prnode=prnode.next;
        console.log(prnode.value);
    }
}

delete(number){
let count=1;
let dnav;
let pnav;
if(number==1){
    this.head=this.head.next;
}else if(number<this.size){
    
dnav=this.head;
while(count!=number){
    count+=1;
    pnav=dnav;
    dnav=dnav.next;
    
    if(number==count){
       pnav.next=dnav.next;
        
       
    }
}
}else if(number==this.size){
 dnav=this.head;
 while(dnav.next!=null){
    pnav=dnav;
    dnav=dnav.next;

 }
 pnav.next=null;
}
}


generate(nodevalue){
let noded;
    this.size+=1;
let gnav;
if(this.head==null){
    
    
    this.head=new LNode(nodevalue);
    noded=this.head;
}else if(this.head!=null && this.head.next==null){
    this.head.next=new LNode(nodevalue);
    noded=this.head.next;
   

}else if(this.head!=null && this.head.next!=null){
    gnav=this.head.next;
    while(gnav.next!=null){
        gnav=gnav.next;
        
        }
    gnav.next=new LNode(nodevalue);
    noded=gnav.next;
}

   
return noded;
}
}
function getRandomInt(){

return Math.floor((Math.random()%100)*100);
}

let InputText;
let RandomValue;

const Container=document.getElementById('container');

function CreateNode(InputText){

let reg = new RegExp("^([1-9][0-9]?|100)$");

if(reg.test(InputText)==false){

}else if(reg.test(InputText)==true){
const DivNode = document.createElement("div");
const TextNode = document.createTextNode(InputText);
const Buttonorb = document.createElement("button");
const Buttontext = document.createTextNode("remove");
const PointerNode = document.createElement("img");
PointerNode.setAttribute("src","pointer.png");
Buttonorb.setAttribute("class","nodebutton");
Buttonorb.appendChild(Buttontext);
DivNode.appendChild(TextNode);
DivNode.appendChild(Buttonorb);
DivNode.setAttribute("class","NodeCircle");
Container.appendChild(DivNode);
Container.appendChild(PointerNode);

}
}
function DeleteNode(InputValue){
let scanode;
let ncount=1;
scanode=Lista.head;
while(scanode.value!=InputValue && scanode.next!=null){
    ncount+=1;
    scanode=scanode.next;
    
    
}
Lista.delete(ncount);
ncount=1;


}
                                            
let Lista = new Llist;
console.log("started");

document.getElementById('enterbutton').onclick=()=>{
    Input=document.getElementById('inputext').value;
    let nodea=Lista.generate(Input);
    CreateNode(nodea.value);
    
    
    
    
    }
    
    document.getElementById('randombutton').onclick=()=>{
        RandomValue=getRandomInt();
        let nodeb=Lista.generate(RandomValue);
        CreateNode(nodeb.value);
    
    }   

document.getElementById('container').addEventListener('click',event =>{
let sibling;
let nodalvalue;
let nodalnumber;
const targett = event.target;
if(targett.matches('.nodebutton')){
    sibling=targett.parentNode.nextElementSibling;
    Container.removeChild(targett.parentNode);
    Container.removeChild(sibling);




}
nodalvalue=targett.parentNode.textContent;
nodalnumber=nodalvalue.replace("remove","");
DeleteNode(nodalnumber);
}
)