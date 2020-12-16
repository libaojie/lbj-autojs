main()



/**
* 主函数
*/
function main(){
    toast("开始聊天")

    for (var i=0;i<300000;i++){
        shuru(i)
        sleep(2000)
    }

}


/**
 * 一次输入
 */
function shuru(){
    var 输入框 = textContains("说点什么")
    
    if (输入框.exists()){
        click_button(输入框)


        var 输入框2 = textContains("说点什么")
        if (输入框2.exists()){
            click_button(输入框2)
            // 输入框2.setText(text)
           

            var 发送 = textContains("发送")
            if(发送.exists()){
                sleep(1000)
                var pos = 发送.findOne().bounds()
                 // 唤出旺仔
                click(pos.right, pos.bottom+80)
                sleep(1000)
                // 选择文字
                click(pos.left, pos.bottom+80)
                sleep(1000)
                click_button(发送)
            }
        }
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