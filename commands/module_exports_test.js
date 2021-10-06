module.exports = {
    runner: "module_exports_test",
    index: (client, args, msg) => {
    msg.reply('Success! Arguements: ' + args + "\nClient: " + client.user.username)
}}