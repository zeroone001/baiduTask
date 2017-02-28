window.onload=function () {
    var col=12;
    var level=0;
    var goalList=[4,3,4,4,3,5,5,6,5,4];
    var origin=[54,15,39,29,17,21,45,94,39,56];
    var goal=goalList[level];
    var position=origin[level];
    var builder=[
        [
            0,0,0,0,3,3,3,0,0,0,0,0,
            0,0,0,0,3,1,3,0,0,0,0,0,
            0,0,0,0,3,2,3,3,3,3,0,0,
            0,0,3,3,3,4,2,4,1,3,0,0,
            0,0,3,1,2,4,2,3,3,3,0,0,
            0,0,3,3,3,3,4,3,0,0,0,0,
            0,0,0,0,0,3,1,3,0,0,0,0,
            0,0,0,0,0,3,3,3,0,0,0,0
        ],
        [
            0,0,3,3,3,3,3,0,0,0,0,0,
            0,0,3,2,2,2,3,0,0,0,0,0,
            0,0,3,2,4,4,3,0,3,3,3,0,
            0,0,3,2,4,2,3,0,3,1,3,0,
            0,0,3,3,3,2,3,3,3,1,3,0,
            0,0,0,3,3,2,2,2,2,1,3,0,
            0,0,0,3,2,2,2,3,2,2,3,0,
            0,0,0,3,2,2,2,3,3,3,3,0,
            0,0,0,3,3,3,3,3,0,0,0,0
        ],
        [
            0,0,3,3,3,3,3,3,3,0,0,0,
            0,0,3,2,2,2,2,2,3,3,3,0,
            0,3,3,4,3,3,3,2,2,2,3,0,
            0,3,2,2,2,4,2,2,4,2,3,0,
            0,3,2,1,1,3,2,4,2,3,3,0,
            0,3,3,1,1,3,2,2,2,3,0,0,
            0,0,3,3,3,3,3,3,3,3,0,0
        ],
        [
            0,0,0,0,3,3,3,3,0,0,0,0,
            0,0,0,3,3,2,2,3,0,0,0,0,
            0,0,0,3,2,2,4,3,0,0,0,0,
            0,0,0,3,3,2,2,3,3,0,0,0,
            0,0,0,3,3,4,4,2,3,0,0,0,
            0,0,0,3,1,4,2,2,3,0,0,0,
            0,0,0,3,1,1,2,1,3,0,0,0,
            0,0,0,3,3,3,3,3,3,0,0,0
        ],
        [
            0,0,0,3,3,3,3,3,0,0,0,0,
            0,0,0,3,2,2,3,3,3,0,0,0,
            0,0,0,3,2,4,2,2,3,0,0,0,
            0,0,3,3,3,2,3,2,3,3,0,0,
            0,0,3,1,3,2,3,2,2,3,0,0,
            0,0,3,1,4,2,2,3,2,3,0,0,
            0,0,3,1,2,2,2,4,2,3,0,0,
            0,0,3,3,3,3,3,3,3,3,0,0
        ],
        [
            0,0,0,0,3,3,3,3,3,3,3,0,
            0,0,0,3,3,2,2,3,2,2,3,0,
            0,0,0,3,2,2,2,3,2,2,3,0,
            0,0,0,3,4,2,4,2,4,2,3,0,
            0,0,0,3,2,4,3,3,2,2,3,0,
            0,3,3,3,2,4,2,3,2,3,3,0,
            0,3,1,1,1,1,1,2,2,3,0,0,
            0,3,3,3,3,3,3,3,3,3,0,0
        ],
        [
            0,0,0,0,3,3,3,3,3,3,0,0,
            0,0,3,3,3,2,2,2,2,3,0,0,
            0,3,3,1,2,4,3,3,2,3,3,0,
            0,3,1,1,4,2,4,2,2,2,3,0,
            0,3,1,1,2,4,2,4,2,3,3,0,
            0,3,3,3,3,3,3,2,2,3,0,0,
            0,0,0,0,0,0,3,3,3,3,0,0
        ],
        [
            0,0,3,3,3,3,3,3,3,3,3,0,
            0,0,3,2,2,3,3,2,2,2,3,0,
            0,0,3,2,2,2,4,2,2,2,3,0,
            0,0,3,4,2,3,3,3,2,4,3,0,
            0,0,3,2,3,1,1,1,3,2,3,0,
            0,3,3,2,3,1,1,1,3,2,3,3,
            0,3,2,4,2,2,4,2,2,4,2,3,
            0,3,2,2,2,2,2,3,2,2,2,3,
            0,3,3,3,3,3,3,3,3,3,3,3
        ],
        [
            0,0,0,0,3,3,3,3,3,3,0,0,
            0,0,0,0,3,2,2,2,2,3,0,0,
            0,0,3,3,3,4,4,4,2,3,0,0,
            0,0,3,2,2,4,1,1,2,3,0,0,
            0,0,3,2,4,1,1,1,3,3,0,0,
            0,0,3,3,3,3,2,2,3,0,0,0,
            0,0,0,0,0,3,3,3,3,0,0,0
        ],
        [
            0,0,3,3,3,3,0,0,3,3,3,3,3,
            3,3,2,2,3,0,0,3,2,2,2,3,
            3,2,4,2,3,3,3,3,4,2,2,3,
            3,2,2,4,1,1,1,1,2,4,2,3,
            3,3,2,2,2,2,3,2,2,2,3,3,
            0,3,3,3,3,3,3,3,3,3,3,0
        ]
    ];

    $("#selectLevel").click(function () {
        level=$("#select").val();
        goal = goalList[level];
        position = origin[level];
        create(level);
    });

    var areas=$("div");



    // 第一次创建地图
        !function levelFirst() {
            create();
        }();


        function create() {
            areas.each(function (index) {

                areas.eq(index).removeClass("type1").removeClass("type2").removeClass("type3").removeClass("type4").removeClass("pusher")

            });
            areas.each(function (index) {
                if (builder[level][index-1]){
                    areas.eq(index-1).addClass("type"+builder[level][index-1]);
                }
            });
            areas.eq(origin[level]).addClass("pusher");
        }

     $(document).keydown(function (e) {
         var key=e.which;
         switch(key){
             case 87:
             case 38:
                 move(-col);
             break;
             case 83:
             case 40:
                move(col);
             break;
             case 65:
             case 37:
                 move(-1);
             break;
             case 68:
             case 39:
                 move(1);
             break;
         }
         if($(".type1.type4").length===goal){
             if(level<9) {
                 alert("过关了");
                 level++;
                 goal = goalList[level];
                 position = origin[level];
                 create(level);
             }else {
                 alert("通关了")
             }

         }
     });

        $("#btn1").click(function () {
            move(-col);
            if($(".type1.type4").length===goal){
                if(level<9) {
                    alert("过关了");
                    level++;
                    goal = goalList[level];
                    position = origin[level];
                    create(level);
                }else {
                    alert("通关了")
                }

            }
        });
    $("#btn2").click(function () {
        move(col);
        win();
    });

    $("#btn3").click(function () {
        move(-1);
        win();
    });

    $("#btn4").click(function () {
        move(1);
        win();
    });



    function win() {
        if($(".type1.type4").length===goal){
            if(level<9) {
                alert("过关了");
                level++;
                goal = goalList[level];
                position = origin[level];
                create(level);
            }else {
                alert("通关了")
            }

        }
    }

    function move(step) {
        if ((!areas.eq(position+step).hasClass("type4"))&&(areas.eq(position+step).hasClass("type1")||areas.eq(position+step).hasClass("type2"))){
            areas.eq(position).removeClass("pusher");
            areas.eq(position+step).addClass("pusher");
            position=position+step;
        }else if(areas.eq(position+step).hasClass("type4")&&(!areas.eq(position+2*step).hasClass("type4"))&&(areas.eq(position+2*step).hasClass("type1")||areas.eq(position+2*step).hasClass("type2")))
        {
            areas.eq(position).removeClass("pusher");
            areas.eq(position+step).addClass("pusher").addClass("type2");
            areas.eq(position+step).removeClass("type4");
            areas.eq(position+2*step).addClass("type4");
            position=position+step;
        }
    }

    
    
    
};