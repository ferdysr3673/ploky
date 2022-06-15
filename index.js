const aoijs = require("aoi.js")

const bot = new aoijs.Bot({
token: "",
prefix: "$getServerVar[prefix]",
intents: "all"
})

//Events
bot.onMessage()

bot.status({
text: "?help | $djseval[client.guilds.cache.size;yes] servers!",
type: "PLAYING",
  time:"12",
status: "online"
})



//Ready Event
bot.readyCommand({
    channel: "",
    code: `$log[Ready on $userTag[$clientID]]`
})

//-----------VARIABLE-------
bot.variables({
  prefix:"?",
  nameregister:"",
registerchannel:"",
  role:""

})

//------------------------------

bot.command({
   name:"help",
  code:`$title[1;Help Information]
$description[1;
> Prefix : **$getServerVar[prefix]**

**__Moderator__** :
setprefix,resetprefix,clear

**__Register :__**
setchannel,setrole,setname,
resetchannel,resetrole,resetname

**__Utility :__**
uptime,ping

**__Link :__**
[Support Server](https://discord.gg/MBsbxerQDt)
[Invite Bot](https://discord.com/oauth2/authorize?client_id=954632734096130078&scope=bot%20applications.commands&permissions=2146958847)
]
$footer[1; Request by $username]
$addTimestamp[1]
$color[1;#ffffff]`
})

//-----------ping command------
bot.command({
name:"ping",
  code:`$reply[$messageID;yes]
$title[1;Ping Information]
$description[1;
\`\`\`js\n$ping ms\`\`\`]
$color[1;#ffffff]
$footer[1; Request by $username]
$addTimestamp[1]
`
})

           //prefix command
bot.command({
  name:"setprefix",
  code: `
$title[1;✅ Accepted]

$description[1;You have successfully changed the prefix to $message]
$footer[1; Request by $username]

$color[1;ffffff]

$setServerVar[prefix;$message] 

$onlyIf[$message[1]!=;Please enter the prefix you want to set, example $getServerVar[prefix]setprefix **!**] 

$onlyPerms[admin; Only Admin Can Use This Command]`

}) 
//---------resetprefix------
bot.command({
  name:"resetprefix",
  code:`
$setServerVar[prefix;]
 
$onlyPerms[admin;Only Admin Can Use This Command]
$title[1;✅ Accepted]
$description[1;Have you successfully reset the prefix to the default prefix ?.]
$footer[1;Request by $username]
$color[1;#ffffff]
$addTimestamp[1]`
})

//---------UPTIME---------
bot.command({
  name:"uptime",
  aliases:['up'],
code:`$reply[$messageID;yes]
$title[1;Uptime Information]
$description[1;
\`\`\`js\n$uptime\`\`\`
]
$footer[1; Request by $username]
$color[1;#ffffff]
$addTimestamp[1]`
})

        //--------registsr-----
bot.command({
name: "register",
  code: `
$reply[$messageID;yes]
$changeNickname[$authorID;$getServerVar[nameregister] $noMentionMessage
]

$giveRole[$guildID;$authorID;$getServerVar[role]]
$suppressErrors[:x: Your role is too high for me, I can't register you!]

$title[1;✅ Accepted]
$description[1; > $noMentionMessage _Successfully registered on the server **$serverName[$guildID]**_]

$footer[1;Request by $username]
$addTimestamp[1]



$onlyIf[$hasPerms[$guildID;$authorID;admin]!=true;:x:You're an admin, so you can't register!]

$onlyIf[$getServerVar[role]!=;**Role Register Not Set** | __$getServerVar[prefix]setrole__]


$onlyForChannels[$getServerVar[registerchannel]; **Can Only Be Used On » <#$getServerVar[registerchannel]>**]

$onlyIf[$getServerVar[registerchannel]!=;**Channel Register Not Set** | __$getServerVar[prefix]setchannel__]
$onlyBotPerms[managenicknames;**Your bot must have __Manage Nickname__ permission in order to register**]
$onlyBotPerms[manageroles;**Your bot must have __Manage Roles__ permission in order to register**]
$onlyBotPerms[admin;**Your bot must have __administrator__ permission in order to register**]

$onlyIf[$checkContains[$message;<;#;@]==false; :x:Do not enter it when registering,please try again.] 

$onlyIf[$charCount[$message]<=24;:x: Your nickname is too long!] 

$onlyIf[$message!=;$getServerVar[prefix]register Your_Name] 


$color[1;#ffffff]

`
  
})

//------SET-ROLE-----
bot.command({
  name:"setrole",
  code:`$setServerVar[role;$mentionedRoles[1]]
$argsCheck[1;tag the role that you want to be a role register!]
$onlyPerms[admin;Can only be used by admin]
$title[1;✅ Accepted]
$description[1;You have successfully set up the role register.]
$color[1;ffffff]
$footer[1;Request by $username]
$addTimestamp[1]`
})
  
//------SET-ROLE
bot.command({
  name:"setrole",
  code:`$setServerVar[role;$mentionedRoles[1]]
$argsCheck[1;tag the role that you want to be a role register!]
$onlyPerms[admin;Can only be used by admin]
$title[1;✅ Accepted]
$description[1;You have successfully set up the role register.]
$color[1;ffffff]
$footer[1;Request by $username]
$addTimestamp[1]`
})

//--------SET-CHANNEL--------
bot.command({
  name:"setchannel",
  code:`$setServerVar[registerchannel;$mentionedChannels[1;no]]
$argsCheck[1;tag the channel you want to register for!]
$onlyPerms[admin;Can only be used by admin]
$title[1;✅ Accepted]
$description[1;You have successfully set up the channel register.]
$color[1;ffffff]
$footer[1;Request by $username]
$addTimestamp[1]`
})

//------SET-NAME------
bot.command({
  name:"setname",
  code:`$setServerVar[nameregister;$message]
$title[1;✅Accepted]
$onlyPerms[admin;Can only be used by admin]
$description[1;you have successfully set the name register]
$color[1;ffffff]
$footer[1;Request by $username]
$addTimestamp[1]`
})

//-------RESET--ROLE
bot.command({
  name:"resetrole",
  code:`
$setServerVar[role;]
 
$onlyPerms[admin; Only Admin Can Use This Command]
$title[1;✅ Accepted]
$description[1;You have successfully reset the role register.]
$footer[1;Request by $username]
$color[1;#ffffff]
$addTimestamp[1]`
})

//-----RESET-CHANNEL----
bot.command ({
  name:"resetchannel",
  code:`
$setServerVar[registerchannel;]
 
$onlyPerms[admin; Only Admin Can Use This Command]
$title[1;✅ Accepted]
$description[1;You have successfully reset the channel register.]
$footer[1;Request by $username]
$color[1;#ffffff]
$addTimestamp[1]`
})

//------RESET-NAME----
bot.command ({
  name:"resetname",
  code:`
$setServerVar[nameregister;]
 
$onlyPerms[admin; Only Admin Can Use This Command]
$title[1;✅ Accepted]
$description[1;You have successfully reset the name register.]
$footer[1; Request by $username]
$color[1;ffffff]
$addTimestamp[1]`
})


//-------
bot.command ({
  name:"<@954632734096130078>",
  nonPrefixed: true,
code:`$title[1; Hello!]
$description[1;My Prefix : $getServerVar[prefix]
If you need help please type $getServerVar[prefix]help]
$color[1;ffffff]
$footer[1;Tags From $username]
$addTimestamp[1]`
})

//------ clear command
bot.command({
  name:"clear",
  code:`
$onlyIf[$message!=;Enter the number of messages you want to delete max 100 messages!]
$clear[$message]
$onlyPerms[admin; :x:Only Admin Can Use This Command]
$onlyBotPerms[admin;Bot must have **__administrator __** permission in order to delete messages]

`
})



bot.loopCommand({
 channel: "980736799024504863",
 code: `$editMessage[980737004474105896;Ping: $ping
Uptime: $uptime]
    $onlyForServers[872412446936141836;]`,
 executeOnStartup: true,
 every: 10000 //20 seconds
}) 