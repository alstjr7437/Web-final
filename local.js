//=========================================================================
function gid(id) {return document.getElementById(id);}
//=========================================================================
let test = 0;

//localStorage함수들..
//localStorage에 테이블 내용 저장하는 함수
function saveList(listName) {
    //수집할 정보 빈 객체 생성
    let list = {
        con: [],
        date: [],
        time: [],
        listName: listName
    }
    let conArray = gid(listName).querySelectorAll('#localitem')
    let dateArray = gid(listName).querySelectorAll('#localdate')
    let timeArray = gid(listName).querySelectorAll('#localtime')

    for(let item of conArray)
        list.con.push(item.innerHTML.replace('<strong>','').replace('</strong>', ''));  //replcae를 이용하여 strong 빼주기
    for(let item of dateArray)
        list.date.push(item.innerHTML.replace('<strong>','').replace('</strong>', ''));
    for(let item of timeArray)
        list.time.push(item.innerHTML.replace('<strong>','').replace('</strong>', ''));
    
    localStorage.setItem(listName, JSON.stringify(list));
}
//--------------------------------------------------------------------------
//--------------------------------------------------------------------------
//처음 시작할때 불러오는 함수
function readList(){
    let check = localStorage.getItem("tbodyToDo");

    if(check == null)
        return;

    let tbodyToDo = JSON.parse(check);
    let tbodyDone = JSON.parse(localStorage.getItem("tbodyDone"));

    for(let i in tbodyToDo.con){
        appendRow(tbodyToDo.con[i], tbodyToDo.date[i], tbodyToDo.time[i], tbodyToDo.listName);
    }

    for(let i in tbodyDone.con){
        appendRow(tbodyDone.con[i], tbodyDone.date[i], tbodyDone.time[i], tbodyDone.listName);
    }
}
//--------------------------------------------------------------------------
//각 테이블 저장하는 함수
function saveTable(){
    saveList("tbodyToDo");
    saveList("tbodyDone");
}

//=========================================================================
//로그인
function login(){
    //localStorage 들고오기!
    let check = localStorage.getItem("divLogin");
    let user = JSON.parse(check);

    //아이디 비밀번호 박스 들고오기
    let inputId = gid("login");
    let inputPassword =  gid("password");
    let inputName = gid("name");

    for(let i in user.userId){
        //로그인 성공시
        if(inputId.value == user.userId[i] && inputPassword.value == user.userPassword[i]){
            alert("로그인 성공!");
            console.log("로그인 하였습니다.");
            console.log(test);
            
            inputName.value = user.name[i];
            return;
        }
        //비밀번호 틀릴시
        else if(inputId.value == user.userId[i] && inputPassword.value != user.userPassword[i]){        
            alert("비밀번호를 다시 입력하세요!");
            console.log("비밀번호X");
            inputPassword.value = "";
            return;
        }
    }
 
    for(let i in user.userId){
        //아이디 없을시
        if(inputId.value != user.userId[i] && inputPassword.value != user.userPassword[i]) {
            inputId.value = "";
            inputPassword.value = "";
        }
    }
    alert("없는 아이디입니다!")
}
function keydownHandler2(){
    if(event.keyCode == 13){
        login();
    }
}
//처음 계정 생성(user를 선언하기 위해)
function saveUser2(listName) {
    //수집할 정보 빈 객체 생성
    let user = {
        name: [],
        userId: [],
        userPassword: [],
        listName: listName 
    }
    let nameArray = gid(listName).querySelectorAll('#name');
    let IdArray = gid(listName).querySelectorAll('#login');
    let PasswordArray = gid(listName).querySelectorAll('#password');

    for(let item of nameArray){
        user.name.push(item.value);  
        alert(`${item.value}님 새로운 계정이 만들어졌습니다!!`)
    }
    for(let item of IdArray)
        user.userId.push(item.value);
    for(let item of PasswordArray)
        user.userPassword.push(item.value);

    localStorage.setItem(listName, JSON.stringify(user));
}

//사용자 계정 저장
function saveUser(listName) {
    let check = localStorage.getItem("divLogin");
    let user = JSON.parse(check);
    //수집할 정보 빈 객체 생성
    let nameArray = gid(listName).querySelectorAll('#name');
    let IdArray = gid(listName).querySelectorAll('#login');
    let PasswordArray = gid(listName).querySelectorAll('#password');

    for(let item of nameArray){
        user.name.push(item.value);  
        alert(`${item.value}님 새로운 계정이 만들어졌습니다!!`)
    }
    for(let item of IdArray)
        user.userId.push(item.value);
    for(let item of PasswordArray)
        user.userPassword.push(item.value);

    localStorage.setItem(listName, JSON.stringify(user));
}

function saveLogin(){
    saveUser("divLogin");
}
function saveLogin2(){
    saveUser2("divLogin");
}