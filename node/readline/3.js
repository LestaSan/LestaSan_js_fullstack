const readline = require('readline')

const completer = (line) => {
    const command = 'npm';
    const subCommands = ['help', 'init', 'install'];
    // 小于command时，补全一下 line是command一部分
    if (line.length < command.length) {
        return [command.indexOf(line) === 0? [command]:[], line]
    }
    let hints = subCommands.filter(subCommand => {
        const lineTrippedCommand = line.replace(command, '').trim();
        return lineTrippedCommand && subCommand.indexOf(lineTrippedCommand) === 0
    });
    if (hints.length === 1) {
        hints = hints.map(function(hit) {
            return [command, hit].join(' ');
        })
    }

    // 匹配到多个或者没有匹配到
    return [hints.length ? hints: subCommands, line]
}



const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    completer: completer
});

rl.prompt();

// const readline = require('readline');
// const fs = require('fs');

// function completer(line) {
//     const command = 'npm';
//     const subCommands = ['help', 'init', 'install'];

//     // 输入为空，或者为npm的一部分，则tab补全为npm
//     if(line.length < command.length){
//         return [command.indexOf(line) === 0 ? [command] : [], line];
//     }

//     // 输入 npm，tab提示 help init install
//     // 输入 npm in，tab提示 init install
//     let hits = subCommands.filter(function(subCommand){ 
//         const lineTrippedCommand = line.replace(command, '').trim();
//         return lineTrippedCommand && subCommand.indexOf( lineTrippedCommand ) === 0;
//     })

//     if(hits.length === 1){
//         hits = hits.map(function(hit){
//             return [command, hit].join(' ');
//         });
//     }
  
//     return [hits.length ? hits : subCommands, line];
// }

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
//   completer: completer
// });

// rl.prompt();