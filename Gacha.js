var times= 0;
//datavefity bs ms 3xchl rmb 2x 3x 
var bs = ms = chl = rmb = x2 =x3 =0;
jQuery(document).ready(function (param) { 
    console.log("模块：公主连结扭蛋模拟器已经成功载入");
});
function getRand(a){
    if(a==null) a=10000;
    let tmp = Math.ceil(Math.random()*a);
    return tmp;
}
function setVar(Gbs,Gms,Gchl,Gcs,Grmb) { 
    $("#gacha_bs").html(Gbs);
    $("#gacha_ms").html(Gms);
    $("#gacha_chl").html(Gchl);
    $("#gacha_cs").html(Gcs);
    $("#gacha_rmb").html(Grmb);
 }
 function isPc(){
    var UserAgent = navigator.userAgent.toLowerCase();
    var isiPad = UserAgent.match(/ipad/i) == "ipad";
    var isiPhone = UserAgent.match(/iphone os/i) == "iphone os";
    var isUc = UserAgent.match(/ucweb/i) == "ucweb";
    var isAndroid = UserAgent.match(/android/i) == "android";
    var iswechat = UserAgent.match(/MicroMessenger/i) == "micromessenger";
    if(!(isAndroid||isUc||isiPad||isiPhone||iswechat))
        return true;
    else
        return false;
 }

 $("#reset").click(function(){
    times = 0;
    bs = ms = chl = rmb = x2 =x3 =0;
    setVar(bs,ms,chl,times,rmb);
    $("#all3x").html("");
    console.info("模块:公主连结扭蛋模拟器:已重置记录");
 });

//是否触发10连保底
var jing = false;
 //单抽一次
 $("#gacha1").click(function(){
    cleartb();
    result = [[0,0]];
    gacha();
    times++;
    consumecal();
    setVar(bs,ms,chl,times,rmb);
    filltb();
 });

 $("#gacha10").click(function(){
    cleartb();
    result = [[0,0]];
    jing = false;
    times+=10;
    for(i=1;i<=9;i++){
        gacha();
    }
    gacha(jing);
    consumecal();
    setVar(bs,ms,chl,times,rmb);
    filltb();
 });
var char1=[ 
    [0,'up精选名字','headpicsrc'],
    //[1,'佩可莉姆','https://patchwiki.biligame.com/images/pcr/6/67/rpznjh1epytf8mbp0t1dq91svg9dcti.png'],
   // [2,'凯露','https://patchwiki.biligame.com/images/pcr/3/39/lgcqculc5zh699k6f391kiwnwcn94me.png'],
   // [3,'可可萝','https://patchwiki.biligame.com/images/pcr/a/a4/mrwruc57npoamhw5y9ttd76s0l76xzd.png'],
    [4,'绫濑由加莉','https://patchwiki.biligame.com/images/pcr/c/cd/mpjpf8q3fczqdn5stzx5epe7a1whb1n.png'],
    [5,'莉玛','https://patchwiki.biligame.com/images/pcr/0/04/lo60ot9xodirhcikbgsp5ys5j1semxf.png'],
    [6,'玉泉美咲','https://patchwiki.biligame.com/images/pcr/6/69/1295ipvt0ha6zly43nr690rj7qsl4py.png'],
    [7,'双叶碧','https://patchwiki.biligame.com/images/pcr/2/28/dwctebo5xojfp84t1dl8rzwf5semv7n.png'],
    [8,'天野铃莓','https://patchwiki.biligame.com/images/pcr/c/cc/gwnmpp3h76m69ewd0oqnl22gtmt6hje.png'],
    [9,'风宫依里','https://patchwiki.biligame.com/images/pcr/6/62/h81lrn1gzun78rl6l0354xauni9yqs0.png'],
    [10,'栗林胡桃','https://patchwiki.biligame.com/images/pcr/0/0f/nwn0d9rx7uo8zxbhxcrrx1s3v4ugkfc.png'],
    [11,'未奏希','https://patchwiki.biligame.com/images/pcr/1/1d/biyc1gryppcb7c5tzdvqti6bmcyd55w.png'],
    [12,'士条怜','https://patchwiki.biligame.com/images/pcr/3/33/gcfzk5nghr9krp81u4x59jsbpph41qr.png'],
    //[13,'草野优衣','https://patchwiki.biligame.com/images/pcr/1/18/h8ni7jp1oej5mk2al7v1rjofkd4nqis.png'],
    [14,'春咲日和莉','https://patchwiki.biligame.com/images/pcr/3/37/264hu9xzlhbahpe8tzexwysq3g13x3n.png'],

];
var char2=[ 
    [0,'up精选名字','headpicsrc'],
    [1,'风宫茜里','https://patchwiki.biligame.com/images/pcr/1/14/8pn703o0duodmiyou1c565wjczj5b5o.png'],
    [2,'出云宫子','https://patchwiki.biligame.com/images/pcr/6/62/nu4e4h9eopdciqg2va9hf4c8fqjzq3q.png'],
    [3,'虹村雪','https://patchwiki.biligame.com/images/pcr/c/c3/f8eexvpqyqkccbjad1uucs9z9whwnuy.png'],
    [4,'美波铃奈','https://patchwiki.biligame.com/images/pcr/e/e5/6d00c5yutzbikc8vnta72rjzppu5wvj.png'],
    [5,'喜屋武香织','https://patchwiki.biligame.com/images/pcr/5/59/516euuhwnsfoqvolt8usv5z1jq0kfov.png'],
    [6,'茜美美','https://patchwiki.biligame.com/images/pcr/4/41/fwg0kohgsjgf76yxk3t7uleary1rho4.png'],
    [7,'仓石惠理子','https://patchwiki.biligame.com/images/pcr/4/49/md183zh8ewq7lupcmo9smuymjw749cm.png'],
    [8,'上喜忍','https://patchwiki.biligame.com/images/pcr/e/e1/bh7jkgsmitpvxulkc6mc217pzge6jzx.png'],
    [9,'野户真阳','https://patchwiki.biligame.com/images/pcr/2/2e/o6c9lsjthg36mzdt7cysolok3cv3pvm.png'],
    [10,'柏崎栞','https://patchwiki.biligame.com/images/pcr/0/05/exnyc4y1iuhrbjg3gxe7fncrj2mevmh.png'],
    [11,'三角千歌','https://patchwiki.biligame.com/images/pcr/d/db/egxfjidgjrjc8uatgi30dhvwzb3hkwn.png'],
    [12,'远见空花','https://patchwiki.biligame.com/images/pcr/b/b5/672mvpqoxo64iv5t5dkr6vs31ko148k.png'],
    [13,'宫坂珠希','https://patchwiki.biligame.com/images/pcr/3/39/dvomjvmcbbyliifd5hvb97mmqwtocjf.png'],
    [14,'大神美冬','https://patchwiki.biligame.com/images/pcr/c/ce/fbvjbat2po9fy580a3jyj0z2q4tmf2l.png'],
    [15,'宵浜深月','https://patchwiki.biligame.com/images/pcr/e/ed/mez3hg9iq9s5h6gor8ih6om9n9ln2za.png'],

];
var char3=[ 
    [0,'up精选名字','headpicsrc'],
    [1,'柊杏奈','https://patchwiki.biligame.com/images/pcr/7/72/edy145bksvw972yhfpfgp8qbquhsi1j.png'],
    [2,'姬宫真步','https://patchwiki.biligame.com/images/pcr/7/72/jb3637kcjwh7z9559n3ca377tkldr0t.png'],
    [3,'衣之咲璃乃','https://patchwiki.biligame.com/images/pcr/a/a5/jsara36yjh1e8kj1srxtkztghdhmljd.png'],
    [4,'柏崎初音','https://patchwiki.biligame.com/images/pcr/b/ba/e1q3ot9mhbtqh7nsgpnc5bp39idld6s.png'],
    [5,'支仓伊绪','https://patchwiki.biligame.com/images/pcr/8/82/a1pquxl61ls6ahhinzptb63tvadus03.png'],
    [6,'佐佐木咲恋','https://patchwiki.biligame.com/images/pcr/8/8c/dy0rtln3fvhxkkqfxsnbnws61k8qqjh.png'],
    [7,'樱井望','https://patchwiki.biligame.com/images/pcr/e/e3/ccy9fdczpyc94sfm20q7uucw6g0vm5j.png'],
    [8,'妮侬・朱贝尔','https://patchwiki.biligame.com/images/pcr/9/91/4h2e4w8p876oxtcu1xv2e9anb16od6s.png'],
    [9,'藤堂秋乃','https://patchwiki.biligame.com/images/pcr/a/a9/hj9uxkawbpguzfrpkrr6ymjwff6vmym.png'],
    [10,'安芸真琴','https://patchwiki.biligame.com/images/pcr/2/27/ergoy0815kqjqqpqn3sa0yuz2be4pco.png'],
    [11,'白银纯','https://patchwiki.biligame.com/images/pcr/9/98/4qostpj00cvuozwjjl2po690k9iu994.png'],
    [12,'星野静流','https://patchwiki.biligame.com/images/pcr/0/00/0koylmjvym7s63y8xmz9skaa1xfuo0t.png'],
    [13,'莫妮卡·拜斯温特','https://patchwiki.biligame.com/images/pcr/0/03/smxy5tsyd5t92fqk5onwy56hlvbobb1.png'],
    [13,'姬塔','https://patchwiki.biligame.com/images/pcr/7/7f/j62dyqwinraqa1jhcey51t2xgpl3kkq.png'],

];

//扭蛋
var result = [[0,0]];
 function gacha(a){
    var rand = getRand(); 
    if(a==null||a){
        if(rand<=250){//pick 3x
            ms+=50;
            x3++;
            result.push([3,pickchar(3,rand)]);
            jing = true;
        }else if(rand>250&&rand<=8200){//pick 1x
            ms+=1;
            result.push([1,pickchar(1,rand)]);
        }else{//pick 2x
            ms+=10;
            x2++;
            result.push([2,pickchar(2,rand)]);
            jing = true;
        }
    }else{
        console.log("扭蛋模拟器：触发十连保底");
        if(rand<=250){//pick 3x
            ms+=50;
            x3++;
            result.push([3,pickchar(3,rand)]);
        }else{//pick 2x
            ms+=10;
            x2++;
            result.push([2,pickchar(2,rand)]);
        }
    }
 }
//从角色列表中获取一个角色
 function pickchar(a,b){
     var rand = 0;
     switch(a){
         case 1:{
            rand= getRand(char1.length-1);
            console.log("扭蛋模拟器：抽取到"+char1[rand][1]+"(1星),父随机数："+b);
            return rand;
         }
         case 2:{
            rand= getRand(char2.length-1);
            console.log("扭蛋模拟器：抽取到"+char2[rand][1]+"(2星),父随机数："+b);
            return rand;
         }
         case 3:{
            rand= getRand(char3.length-1);
            console.log("扭蛋模拟器：抽取到"+char3[rand][1]+"(3星),父随机数："+b);
            return rand;
         }
         default:{
             console.log("模块：公主连结扭蛋模拟器:获取指定角色出错");
         }
     }

 }
 //计算消耗
 function consumecal() {
    bs = times*150;
    chl = (x3/times*100).toFixed(3);
    rmb = (times*(15.54)).toFixed(2);
}
//将抽卡结果填充至panel区
function filltb(){
    num = 0;
    for(i = 0;i<result.length;i++){
        switch(result[i][0]){
            case 1:{
                num = result[i][1];
                var str = "<span style='display: inline-block ;margin: 5% 4%;'> <a href='https://wiki.biligame.com/pcr/"+ char1[num][1]+"' target='_block'><img width='85px' height='85px'src='"+char1[num][2]+"' style='margin: auto;border: 4px solid; border-color: rgb(167, 167, 167); border-radius: 10px;'></a></span>"
                $("#gacharesult").append(str);
                break;
            }
            case 2:{
                num = result[i][1];
                var str = "<span style='display: inline-block ;margin: 5% 4%;'> <a href='https://wiki.biligame.com/pcr/"+ char2[num][1]+"' target='_block'><img width='85px' height='85px'src='"+char2[num][2]+"' style='margin: auto;border: 4px solid; border-color: rgb(255, 227, 104); border-radius: 10px;'></a></span>"
                $("#gacharesult").append(str);
                break;
            }
            case 3:{
                    num = result[i][1];
                    var str = "<span style='display: inline-block ;margin: 5% 4%;'> <a href='https://wiki.biligame.com/pcr/"+ char3[num][1]+"' target='_block'><img class='got3x' width='85px' height='85px'src='"+char3[num][2]+"' style='margin: auto;border: 4px solid; border-color: rgb(255, 129, 188); border-radius: 10px;'></a></span>"
                    var str1 = "<span style='display: inline-block ;margin:3px 1%;'> <a href='https://wiki.biligame.com/pcr/"+ char3[num][1]+"' target='_block'><img width='55px' height='55px'src='"+char3[num][2]+"' style='margin: auto;border: 1px solid; border-color: rgb(255, 129, 188); border-radius: 10px;'></a></span>"
                    $("#gacharesult").append(str);
                    $("#all3x").append(str1);
                    break;
                }
            default:break;
        }
        
    }
}
//清空panel区
function cleartb(){
$("#gacharesult").html("");
}