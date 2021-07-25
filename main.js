display=() =>{
    let form=document.getElementById("form");
    let uname=document.getElementById("name").value;
    let uabout=document.getElementById("about").value;
    let uaddr=document.getElementById("addr").value;
    let uphone=document.getElementById("phone").value;
    let ucollege=document.getElementById("college").value;
    let uName=document.getElementById("uName");
    uName.innerHTML=""+uname;
    let uAbout=document.getElementById("uAbout");
    uAbout.innerHTML=""+uabout;
    let uAddress=document.getElementById("uAddress");
    uAddress.innerHTML=""+uaddr;
    let uPhone=document.getElementById("uPhone");
    uPhone.innerHTML=""+uphone;
    let uCollege=document.getElementById("uCollege");
    uCollege.innerHTML=""+ucollege;
    }