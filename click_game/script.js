t1count=0
        function Team1(){
            var temp2=document.getElementById("team2")
            temp2.classList.remove("active")
            t1count++
            var temp1=document.getElementById("team1")
            temp1.classList.add("active")
            temp1.innerText=`Count of Team1: ${t1count}`
            // return t1count
           
        }

        t2count=0
       function Team2(){
            var temp1=document.getElementById("team1")
            temp1.classList.remove("active")
            t2count++
            var temp2=document.getElementById("team2")
            temp2.classList.add("active")
            temp2.style.backgroundColor="#f3558e"
            temp2.innerText=`Count of Team2: ${t2count}`
            // return t2count
            
        }
        function total(){
            var sum=t1count+t2count
            // alert(sum)
            var ttt=document.getElementById("tt")
            var ttt1=document.getElementById("tt1")
            var ttt2=document.getElementById("tt2")
            ttt.classList.add("active")
            ttt1.classList.add("active")
            ttt.innerText=`Count of team1: ${t1count}`
            ttt1.innerText=`Count of team2: ${t2count}`
            ttt2.classList.add("active")
            ttt2.innerText=`Count of two teams: ${sum}`

        }
