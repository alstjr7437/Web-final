//=========================================================================
function gid(id) {return document.getElementById(id);}
//=========================================================================

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
        list.con.push(item.innerHTML.replace('<strong>','').replace('</strong>', ''));
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
function saveButtonClickHandler(){
    saveList("tbodyToDo");
    saveList("tbodyDone");
}

//로그인
function login(){
    let inputId = gid("login");
    let inputPassword =  gid("password");

    if(inputId.value == "alstjr" && inputPassword.value == "0324"){
        alert("로그인 성공!")
        console.log("로그인 하였습니다.")
    }
    else if(inputId.value == "alstjr" && inputPassword.value != "0324"){        
        alert("비밀번호를 다시 입력하세요!");
        console.log("비밀번호X");
        inputPassword.value = "";
    }
    else {
        alert("로그인 실패!")

        inputId.value = "";
        inputPassword.value = "";
        console.log("로그인 실패")
    }
}
function keydownHandler2(){
    if(event.keyCode == 13){
        login();
    }
}