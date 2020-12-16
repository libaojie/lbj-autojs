
main()


/**
* 主函数
*/
function main(){
    toast("开始叠猫猫")


    var shengji = textContains("喂猫升级")
    
    if (shengji.exists()){
        toast("喂猫升级")
        click_button(shengji)
        zuorenwu()
    }




    var xingqu = textContains("选兴趣")
    
    if (xingqu.exists()){
        toast("选兴趣")
        click_button(xingqu)
        xuxingqu()
    }




    lingbi()


}


/**
* 选兴趣
*/
function xuxingqu(){
    sleep(2000)
    var xunhao =  textContains("选好了")
    click_button(xunhao)
    sleep(2000)
    zuorenwu()
}


/**
* 做任务
*/
function zuorenwu(){


    var zuorenwu = textStartsWith("做任务赚喵币")
    if (zuorenwu.exists()){
        toast("做任务赚喵币")
        click_button(zuorenwu)
        
    }


}


/**
* 点击button
*/
function click_button(button){
    if (button.exists()){
        var pos = button.findOne().bounds()
        toast(button.findOne().text())
        click(pos.centerX(), pos.centerY())
        // button.findOne().click()
        sleep(1000)
    }
}


/**
* 领币中心
*/
function lingbi(){


    var leiji = textContains("累计任务奖励")
    if (leiji.exists()){
        qiandao()
        liulan()
        sousuo()
        shifei()
        wancheng()
        lingqujiangli()


        toast("完成")
    }
}


/**
* 每日签到
*/
function qiandao(){
    var qiandaoText = textContains("签到")
    if (qiandaoText.exists()){
        var quwancheng = text("去完成")
        click_button(quwancheng)
    }


    toast("去签到 完成")
}


/**
* 领取奖励
*/
function lingqujiangli(){
    while(1){
        var lingqu = text("领取奖励")
        if (!lingqu.exists()){
            break
        }
        click_button(lingqu)
        sleep(2000)
    }
    toast("领取奖励 完成")
}


/**
* 去浏览
*/
function liulan(){


    while(1){
        var quliulan = text("去浏览")
        if (!quliulan.exists()){
            break
        }


        click_button(quliulan)
        sleep(20000)
        back()
        sleep(2000)
    }


    toast("去浏览 完成")
}


/**
* 去搜索
*/
function sousuo(){
    var ss = text("去搜索")


    if (ss.exists()){
        click_button(ss)
        sleep(20000)
    
        back()
        sleep(2000)
    }
    toast("去搜索 完成")
}


/**
* 去施肥
*/
function shifei(){
    var sf = text("去施肥")
    if (sf.exists()){
        click_button(sf)
        sleep(50000)
    
        // click()
    
        back()
        sleep(2000)
    }




    toast("去施肥 完成")
}


/**
* 去完成
*/
function wancheng(){
    while(1){


        if (text("去完成").find().length < 3){
            break
        }
        var wc = text("去完成").findOnce(1)
        if (wc != null){
            var pos = wc.bounds()
            click(pos.centerX(), pos.centerY())
            sleep(20000)
            back()
            sleep(2000)
        }
    }
    
    toast("去完成 完成")
}












