function keyboards() {
    var keyboard = [[{'text':'1'},{'text':'2'}],[{'text':'3'},{'text':'4'}]]
    
    var ReplyKeyboardMakeup = {
        'keyboard': keyboard,
        'resize_keyboard': true,
        'one_time_keyboard': true,
        'selective': false
    }
    var ReplyKeyboardRemove = {
        'remove_keyboard': true,
        'selective': false
    }
    var ForceReply = {
        'force_reply': true,
        'selective': false
    }
    var payload = {
        "method": "sendMessage",
        'chat_id': id,
        'text': '請選擇一個數字',
        'reply_markup': JSON.stringify(ReplyKeyboardMakeup)
    }
    start(payload);
}
