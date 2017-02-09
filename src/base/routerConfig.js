import restate from "../lib/routerJS/router.js";
import viewUrlConfig, {index} from "../viewUrlConfig.js";
import config from "web.config";

// webInfoService.getInfo(function(data){
  // window.webInfo = data;
  var stateman = restate();
  var urlConfig = viewUrlConfig(config.webName);
  for(var key in urlConfig) {
    var v = urlConfig[key];
    stateman.state(key, v.component, v.config);
  }

  stateman.on("notfound", function(){
    this.go(index)
  }).start();

  // 前端用户登录权限过滤
  stateman.on("end", ()=>{
    if(stateman.current.name.indexOf('user.') == 0 && !isLogin()){
      stateman.go("signin");
    }
    if((stateman.current.name == 'supervise' || stateman.current.name.indexOf('supervise.') == 0) && !isSpLogin()){
      stateman.go("superviseLogin");
    }
  });
// });