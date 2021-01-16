module.exports = function check(str, bracketsConfig) {
      for(let i=0;i<bracketsConfig.length+1;i++){
        for(conf of bracketsConfig){
            let br = conf[0]+conf[1]
            while(~str.indexOf(br)){
                if(str.includes(br)){
                    str = str.slice(0,str.indexOf(br)) + str.slice(str.indexOf(br)+2)
                }
            }
        }
    }
    return str ? false : true
}
