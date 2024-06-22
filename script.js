
function SendToCompleted(index) {
    let tasksArrayweb = JSON.parse(localStorage.getItem("tasksArray"));
    tasksArrayweb[index].completed = true;
    localStorage.setItem("tasksArray",JSON.stringify(tasksArrayweb));
    window.location.reload();
}

function DeleteTask(index){
        let tasksArrayweb = JSON.parse(localStorage.getItem("tasksArray"));
        tasksArrayweb.splice(index, 1);
        localStorage.setItem("tasksArray",JSON.stringify(tasksArrayweb));
        window.location.reload();
    }

document.addEventListener("DOMContentLoaded", () => {
    let tasksArray = [];
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    let todaytime = `${year}-${month}-${day}`;


    let tasksArrayweb = JSON.parse(localStorage.getItem("tasksArray"));
    if(tasksArrayweb != null){
        tasksArrayweb.sort((a, b) => new Date(a.date) - new Date(b.date));
        tasksArray = tasksArrayweb;
        let x = 0;
        let y = 0;
        let z = 0;
        tasksArrayweb.forEach((item, index) => {
            if(item.date == todaytime && item.completed == false)
                {
                    x =x+1;
                    document.getElementById("Today_box_container1").innerHTML += `<div class="taskbox">
                        <p id="${index}" class="tasktext firsttext">${x}. ${item.task}</p>
                        <p class="tasktext">${item.date}</p>
                        <p class="tasktext">${item.priority}</p>
                        <div class="lasttexticon">
                            <img onclick="SendToCompleted(${index})" src="CompletedIcon.svg">
                            <img onclick="DeleteTask(${index})" src="DeleteIcon.svg">
                        </div>
                    </div>`;
                    
                }
                else if(item.completed == false) {
                    y=y+1;
                    document.getElementById("Today_box_container2").innerHTML += `<div class="taskbox">
                        <p id="${index}" class="tasktext firsttext">${y}. ${item.task}</p>
                        <p class="tasktext">${item.date}</p>
                        <p class="tasktext">${item.priority}</p>
                        <div class="lasttexticon">
                            <img onclick="SendToCompleted(${index})" src="CompletedIcon.svg">
                            <img onclick="DeleteTask(${index})" src="DeleteIcon.svg">
                        </div>
                    </div>`;
                }
                if(item.completed == true)
                    {
                        z=z+1;
                        document.getElementById("Today_box_container3").innerHTML +=`<div class="taskbox_c">
                <p id="${index}" class="tasktext1 firsttext">${z}. ${item.task}</p>
                <p class="tasktext1">${item.date}</p>
                <p class="tasktext1">${item.priority}</p>
                <div class="lasttexticon">
                    <img onclick="DeleteTask(${index})" src="blackdeleteicon.svg">
                </div>
            </div>`;

                    }
        });
    }

    document.getElementById("main_btn").addEventListener("click", CreateObject);



    function CreateObject() {
            let task = document.getElementById("task_detail").value;
            let date = document.getElementById("date").value;
            let priority = document.getElementById("priority").value;
            if(date >= todaytime){
                var obj = {"task":task,"date":date,"priority":priority,"completed": false};
                tasksArray.push(obj);
                localStorage.setItem("tasksArray",JSON.stringify(tasksArray));
                window.location.reload();
            }else {
                alert("Can not Select past Dates");
            }
            
    }

    
        





    // let tasksArray = [];
    // let FutureTask = [];
    // let TodayTask = [];
    // const date = new Date();
    // const year = date.getFullYear();
    // const month = String(date.getMonth() + 1).padStart(2, '0');
    // const day = String(date.getDate()).padStart(2, '0');
    // let todaytime = `${year}-${month}-${day}`;
    

    // function TodayContainer() {
    //     TodayTask = [];
    //     FutureTask = [];
    //     document.getElementById("Today_box_container1").innerHTML = "";
    //     document.getElementById("Today_box_container2").innerHTML = "";
    //     let tasksArray = JSON.parse(localStorage.getItem("tasksArray"));
    //     tasksArray.forEach(item => {
    //         let x = 0;
    //         let y = 0;
    //         if(item.date == todaytime)
    //             {
    //                 x =x+1;
    //                 document.getElementById("Today_box_container1").innerHTML += `<div class="taskbox">
    //                     <p class="tasktext firsttext">${x}. ${item.task}</p>
    //                     <p class="tasktext">${item.date}</p>
    //                     <p class="tasktext">${item.priority}</p>
    //                     <div class="lasttexticon">
    //                         <img src="CompletedIcon.svg">
    //                         <img src="DeleteIcon.svg">
    //                     </div>
    //                 </div>`;
    //                 // TodayTask.push(item);
                    
    //             }
    //             else {
    //                 y=y+1;
    //                 document.getElementById("Today_box_container2").innerHTML += `<div class="taskbox">
    //                     <p class="tasktext firsttext">${y}.${item.task}</p>
    //                     <p class="tasktext">${item.date}</p>
    //                     <p class="tasktext">${item.priority}</p>
    //                     <div class="lasttexticon">
    //                         <img src="CompletedIcon.svg">
    //                         <img src="DeleteIcon.svg">
    //                     </div>
    //                 </div>`;

    //                 // FutureContainer(item);
    //             }
    //     });

        
        
    // }


    // function CreateObject() {
    //     let task = document.getElementById("task_detail").value;
    //     let date = document.getElementById("date").value;
    //     let priority = document.getElementById("priority").value;
    //     if(date >= todaytime){
    //         var obj = {"task":task,"date":date,"priority":priority,"completed": false};
    //         tasksArray.push(obj);
    //         localStorage.setItem("tasksArray",JSON.stringify(tasksArray));
    //         TodayContainer();
    //     }else {
    //         alert("Can not Select past Dates");
    //     }
        
    // }
    





    // let tasksArrayweb = JSON.parse(localStorage.getItem("tasksArray"));
    //     if(tasksArrayweb != null){
    //         tasksArrayweb.forEach(item => {
    //         if(item.date == todaytime)
    //             {
    //                 x =x+1;
    //                 document.getElementById("Today_box_container1").innerHTML += `<div class="taskbox">
    //                     <p class="tasktext firsttext">${item.task}</p>
    //                     <p class="tasktext">${item.date}</p>
    //                     <p class="tasktext">${item.priority}</p>
    //                     <div class="lasttexticon">
    //                         <img src="CompletedIcon.svg">
    //                         <img src="DeleteIcon.svg">
    //                     </div>
    //                 </div>`;
    //                 // TodayTask.push(item);
                    
    //             }
    //             else {
    //                 y=y+1;
    //                 document.getElementById("Today_box_container2").innerHTML += `<div class="taskbox">
    //                     <p class="tasktext firsttext">${item.task}</p>
    //                     <p class="tasktext">${item.date}</p>
    //                     <p class="tasktext">${item.priority}</p>
    //                     <div class="lasttexticon">
    //                         <img src="CompletedIcon.svg">
    //                         <img src="DeleteIcon.svg">
    //                     </div>
    //                 </div>`;

    //                 // FutureContainer(item);
    //             }
    //     });
    // }







    // document.getElementById("main_btn").addEventListener("click", CreateObject);

    



  });