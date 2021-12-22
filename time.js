//=========================================================================
function gid(id) {return document.getElementById(id);}
//==========================================================================
//--------------------------------------------------------------------------
//현재시간을 보여주기 위한 함수
function setTime(){
    let divClock = gid("divClock");
    let ntime = new Date();

    let print = "";
    print += ntime.getFullYear() + "년 "
    print += ntime.getMonth() + 1 + "월 " 
    print += ntime.getDate() + "일 <br>"
    if(ntime.getHours()>12){      //시간이 12보다 크다면 오후 아니면 오전
        print += "오후 ";
        print += ntime.getHours()-12+"시 ";
    } else {
        print += "오전 ";
        print += ntime.getHours()+"시 ";
    }
    print += ntime.getMinutes()+"분 ";
    print += ntime.getSeconds()+"초";
    
    document.all.divClock.innerHTML = print
}

//-------------------------------------------------------------------------
//지난시간 표시하는 함수
function overTime(date, time){
    let setDate = new Date(`${date}T${time}:00+0900`)
    let now = new Date();
        // D-day 날짜의 연,월,일 구하기
    let setDateYear = setDate.getFullYear();
    let setDateMonth = setDate.getMonth() + 1;
    let setDateDay = setDate.getDate();
    
    let distance = setDate.getTime() - now.getTime();
    let day, hours, minutes, title;
    
    if (distance > 0) {
        day = Math.floor(distance/(1000*60*60*24));
        hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));
        minutes = Math.floor((distance % (1000*60*60))/(1000*60));
        second = Math.floor((distance % (1000*60) / 1000));
        if(day == 0){
            title = `<strong>${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${second < 10 ? `0${second}` : second}</strong>`;
        }
        else {
            title = `<strong>${day}일 ${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${second < 10 ? `0${second}` : second}</strong>`;
        }
    }
    else  {
        distance = now.getTime() - setDate.getTime(); 
        day = Math.floor(distance/(1000*60*60*24));
        hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));
        minutes = Math.floor((distance % (1000*60*60))/(1000*60));
        second = Math.floor((distance % (1000*60) / 1000));
        if(day == 0){
            title = `<strong id = 'later'>${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${second < 10 ? `0${second}` : second}</strong>`;
        }
        else {
            title = `<strong id = 'later'> ${day}일 ${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${second < 10 ? `0${second}` : second}</strong>`;
        }
    }
    return title;
    }

//-------------------------------------------------------------------------
//시간별로 순서대로 테이블에 들어가도록 하는 함수
function order(date, time, table){
let row = table.children;
let trData1 = [];
let trData2 = [];
let rowIndex = 0;
let year = date.slice(0,4);
let month = date.slice(5,7);
let day = date.slice(8,10);
let hour = time.slice(0,2);
let minutes = time.slice(3,5);
aTime = new Date(year,month-1,day,hour,minutes)

for(let tr of row){
    trData1.push(tr.children[2].innerHTML);
    trData2.push(tr.children[3].innerHTML);
    
}
for(let i=0; i<row.length; i++){
    year = trData1[i].slice(8,12);
    month = trData1[i].slice(13,15);
    day = trData1[i].slice(16,18);
    hour = trData2[i].slice(8,10);
    minutes = trData2[i].slice(11,13);
    bTime = new Date(year,month-1,day,hour,minutes);
    
    if(bTime - aTime > 0){
        rowIndex = i;
        break;
    }
    else {
        rowIndex = i + 1;
    }
}
return rowIndex;

}

//-------------------------------------------------------------------------
//시간별로 테두리 색이 달라지는 함수
function backColor(date, time) {
    let setDate = new Date(`${date}T${time}:00+0900`)
    let now = new Date();
        // D-day 날짜의 연,월,일 구하기
    let setDateYear = setDate.getFullYear();
    let setDateMonth = setDate.getMonth() + 1;
    let setDateDay = setDate.getDate();
    
    let distance = setDate.getTime() - now.getTime();
    let day, hours, minutes, backNum;

    day = Math.floor(distance/(1000*60*60*24));
    hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));
    minutes = Math.floor((distance % (1000*60*60))/(1000*60));
    second = Math.floor((distance % (1000*60) / 1000));

    if(setDate.getTime() < now.getTime()){
        backNum = "table-dark";
    } else {4
        if(day < 365) {
            backNum = "table-danger";
            if(day < 30) {
                backNum = "table-light";
                if(day < 7) {
                    backNum = "table-info";
                    if(day < 1) {
                        backNum = "table-primary";
                        if(day < 1 && hours < 12) {
                            backNum = "table-success";
                            if (day < 1 && hours < 3) {
                                backNum = "table-warning";
                                if (day < 1 && hours < 1) {
                                    backNum = "table-danger";
                                }
                            }
                        }
                    }
                }
            }
        } 
    }
    return backNum;
}
