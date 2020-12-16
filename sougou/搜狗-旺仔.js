main()



/**
* 主函数
*/
function main(){
    toast("开始聊天")

    var button = textContains("发送")
    
    if (button.exists()){
        toast("yes")
        var pos = button.findOne().bounds()
        toast(pos.bottom-pos.top)
        // 唤出旺仔
        click(pos.right, pos.bottom+80)
        sleep(1000)
        // 选择文字
        click(pos.left, pos.bottom+80)
    }
    toast("1111")
}