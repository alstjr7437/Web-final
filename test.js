
function gid(id) {return document.getElementById(id);}

function btnFinishHandler(){
    let parentId = this.parentNode.parentNode.getAttribute('id');

    console.log(parentId);
    if(parentId == "tbodyToDo"){
        gid("tbodyDone").appendRow(this);
    } else {
        gid("tbodyDone").appendRow(this);
    } 
}

function appendRow(newword, date, time) {

    //tbodyToDo를 이용하여 새 행을 생성한다
    let tbodyToDo = gid("tbodyToDo")
    let newRow = tbodyToDo.insertRow(tbodyToDo.rows.length);
    //생성된 새 행(newRow)을 이용하여 내부에 두개의 행을 생성한다.
    let cell0 = newRow.insertCell(0);
    let cell1 = newRow.insertCell(1);
    let cell2 = newRow.insertCell(2);
    let cell3 = newRow.insertCell(3);
    let cell4 = newRow.insertCell(4);
    let cell5 = newRow.insertCell(5);

    //생성된 셀에 필요한 내용을 저장한다.

    cell1.innerHTML
    if(date == NaN){
        cell2.innerHTML = "오늘"
    } else {
        cell2.innerHTML = "<strong>" + date + "</strong>";
    }
    cell3.innerHTML = "<strong>" + time + "</strong>"; 
    cell4.innerHTML = "<Strong>" + newword + "</Strong>";
    cell5.innerHTML = "<Strong>" + "삭제" + "</Strong>";

    //생성된 셀에 필요한 이벤트 핸들러를 저장한다.
    $(cell1).click(btnFinishHandler);
    $(cell5).click(btnDeleteHandler);
}
appendRow();
btnFinishHandler();