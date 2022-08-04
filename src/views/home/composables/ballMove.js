export const useBallMove = (containerDomClass, ballDomClass) => {
  const speed = ref(1)
  const container = ref()
  const cwidth = ref()
  const circles = ref([])
  const maxW = ref(0)
  const maxH = ref(0)

  //碰撞函数
  const crash = (a) => {
    var ball1x = container.value[a].cx; //在数组中任意球的圆心坐标
    var ball1y = container.value[a].cy;//思路：先随便拿一个球，然后遍历所有球，拿这个球和所有球的圆心距离比较
    for (var i = 0; i < container.value.length; i++) {
      if (i !== a) { //判断取出来的球不是本身，才能和其他球进行距离判断
        var ball2x = container.value[i].cx; //将其他球的圆心坐标赋值给球2
        var ball2y = container.value[i].cy;
        //圆心距 求两个点之间的距离,开平方
        var distence = Math.sqrt((ball1x - ball2x) * (ball1x - ball2x) + (ball1y - ball2y) * (ball1y - ball2y));
        if (distence <= cwidth.value) { //球心距离和求直径比较
          if (ball1x > ball2x) { //当前位于未知求的右方
            if (ball1y > ball2y) {//预设未知球撞当前球，然后当前球改变运动
              container.value[a].movex = 1; //1表示为正值，对应的右和下
              container.value[a].movey = 1;//0表示为负值，对应的左和上
            } else if (ball1y < ball2y) {
              container.value[a].movex = 1;
              container.value[a].movey = 0;
            } else {
              container.value[a].movex = 1;
            }
          } else if (ball1x < ball2x) {
            if (ball1y > ball2y) {
              container.value[a].movex = 0;
              container.value[a].movey = 0;
            } else if (ball1y < ball2y) {
              container.value[a].movex = 0;
              container.value[a].movey = 1;
            } else {
              container.value[a].movex = 0;
            }
          } else {
            if (ball1y > ball2y) {
              container.value[a].movey = 1;
            } else if (ball1y < ball2y) {
              container.value[a].movey = 0;
            }
          }
        }
      }

    }
  }

  //移动函数
  const move = (balls) => { //每个球单独有定时器
    balls.timer = setInterval(function () {
      if (balls.movex === 1) { //如果往右跑，则一直加速度，碰到边界，改为反方向运动
        balls.x += balls.speed;
        if (balls.x + balls.speed >= maxW.value) {//防止小球出界
          balls.x = maxW.value;
          balls.movex = 0;//小球运动方向发生改变
        }
      } else {
        balls.x -= balls.speed; // 1和0表示正反方向
        if (balls.x - balls.speed <= 0) {
          balls.x = 0;
          balls.movex = 1;
        }
      }
      if (balls.movey === 1) {
        balls.y += balls.speed;
        if (balls.y + balls.speed >= maxH.value) {
          balls.y = maxH.value;
          balls.movey = 0;
        }
      } else {
        balls.y -= balls.speed;
        if (balls.y - balls.speed <= 0) {
          balls.y = 0;
          balls.movey = 1;
        }
      }
      balls.cx = balls.x + circles.value[0].offsetWidth / 2;//小球圆心等于：运动中x的值加上自身的半径
      balls.cy = balls.y + circles.value[0].offsetHeight / 2;
      circles.value[balls.index].style.left = balls.x + 'px';//小球相对于屏幕的位置
      circles.value[balls.index].style.top = balls.y + 'px';
      crash(balls.index); //每个小球进行碰撞检测
    }, 25);
  }

  const ballMove = () => {
    let main = document.querySelector(containerDomClass);  //获取运动边界和10个div
    circles.value = main.querySelectorAll(ballDomClass);
    container.value = [];//存放10个球的每个具体信息，包括坐标，速度等值
    let arr = [];
    maxW.value = 0;//初始化运动的最大宽和高，初始定义0
    maxH.value = 0;
    cwidth.value = circles.value[0].offsetWidth; //小球的直径

    //根据浏览器窗口的大小自动调节小球的运动空间
    window.onresize = function () {
      maxW.value = main.offsetWidth - circles.value[0].clientWidth;//为了让小球不卡在浏览器边缘，
      maxH.value = main.offsetHeight - 38 - circles.value[0].clientHeight;// 所以要减去自身的宽高
      main.style.width = '100%';   //将容器的宽高和文档显示区宽高相等
      main.style.height = '100%';
    };
    onresize();
    //数组对象的初始化
    for (let i = 0; i < circles.value.length; i++) {
      arr = [];
      arr.x = Math.floor(Math.random() * (maxW.value + 1));//初始x坐标
      arr.y = Math.floor(Math.random() * (maxH.value + 1));//初始y坐标
      arr.cx = arr.x + circles.value[0].offsetWidth / 2;//圆心x坐标
      arr.cy = arr.y + circles.value[0].offsetHeight / 2;//圆心y坐标
      arr.movex = Math.floor(Math.random() * 2);//x轴移动方向
      arr.movey = Math.floor(Math.random() * 2);//y轴移动方向
      arr.speed = Math.random()// speed.value 
      arr.timer = null;//计时器
      arr.index = i;//索引值
      container.value.push(arr); //存放所有的属性值
      circles.value[i].style.left = arr.x + 'px';//小球位置初始化
      circles.value[i].style.top = arr.y + 'px';
    }

    //对每一个小球绑定计时器，让小球动起来
    for (var i = 0; i < container.value.length; i++) {
      move(container.value[i]);
    }

    var isDrag = false;         //是否可拖动
    //鼠标移动
    document.onmousemove = function (e) {//鼠标移动e
      var e = e || window.event;
      var mouseX = e.pageX;
      var mouseY = e.pageY;
      var moveX = 0, moveY = 0;
      if (isDrag === true) {
        moveX = mouseX - mouseOffsetX; //移动的距离等于鼠标指针减去上面获取的差值
        moveY = mouseY - mouseOffsetY;
        //限定移动范围
        var PW = document.documentElement.clientWidth;//窗口的宽高
        var PH = document.documentElement.clientHeight;

        var redW = red.offsetWidth; //元素红色泡泡的自身的宽高
        var redH = red.offsetHeight;

        var maxX = PW - redW; //最大的宽度为窗口可视区宽减去自身的宽
        var maxY = PH - redH;
        moveX = Math.min(maxX, Math.max(0, moveX));// 取值范围
        moveY = Math.min(maxY, Math.max(0, moveY));
        red.style.left = moveX + 'px';
        red.style.top = moveY + 'px';

        //下面部分是判断部分
        var _redx = parseInt(red.style.left + redW / 2); //红球的球心坐标
        var _redy = parseInt(red.style.top + redH / 2);

        var dsetination = circles.value[0].offsetWidth / 2 + redW / 2; //红球和蓝球的半径之和
        for (var i = 0; i < container.value.length; i++) {  //取出数组中所有球
          var bx = container.value[i].cx;//球的圆心坐标
          var by = container.value[i].cy;
          var dis1 = (_redx - bx) * (_redx - bx) + (_redy - by) * (_redy - by);//两个圆心之间的距离
          var dis2 = Math.floor(Math.sqrt(dis1)); //开平方后再取整
          if (dis2 <= dsetination) { //球心距离和求直径比较
            if (_redx > bx) { //当前位于未知求的右方
              if (_redy > by) {//预设未知球撞当前球，然后被撞击球改变运动
                container.value[i].movex = 0;
                container.value[i].movey = 0;
              } else if (_redy < by) {
                container.value[i].movey = 1;
                container.value[i].movex = 0;
              } else if (_redy = by) {
                container.value[i].movex = 0;
              }
            } else if (_redx < bx) {  //红球在蓝球的左下方
              if (_redy > by) {
                container.value[i].movex = 1;
                container.value[i].movey = 0;
              } else if (_redy < by) {//红球在蓝球的左上方
                container.value[i].movex = 1;
                container.value[i].movey = 1;
              } else if (j_redy = by) {
                container.value[i].movex = 1;
              }
            }
          }
        }
      }
    }
      ;
    //鼠标松开
    document.onmouseup = function () {
      isDrag = false;
    };
  }

  const theWorld = () => {
    container.value.forEach(item => {
      clearInterval(item.timer)
    })
  }

  const timeContinuesToFlow = () => {
    container.value.forEach(item => {
      move(item)
    })
  }


  onMounted(() => {
    ballMove()
  })

  return {
    theWorld,
    timeContinuesToFlow
  }
}

