
function setTime(){
    let ntime = new Date();
    let print = "";
    print += ntime.getFullYear() + "년 "
    print += ntime.getMonth() + "월 " 
    print += ntime.getDate() + "일 "
    if(ntime.getHours()>12){      //시간이 12보다 크다면 오후 아니면 오전
        print += "오후 ";
        print += ntime.getHours()-12+"시 ";
    } else {
        print += "오전 ";
        print += ntime.getHours()+"시 ";
    }
    print += ntime.getMinutes()+"분 ";
    print += ntime.getSeconds()+"초";
    
    return print;
}

console.log(setTime());
