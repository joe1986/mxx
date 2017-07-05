package com.hr.mxx.user;

import com.hr.mxx.dto.user.UserDto;
import org.springframework.cloud.netflix.feign.FeignClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

/**
 * Created by Joe on 2017/6/22 0022.
 */
//value="与远程服务名称一致，enreka-client
// enreka-client模块中配置bootstrap.yml
// spring:
//  application:
//          name: cloud-service
@FeignClient(value = "cloud-service",fallback = UserService.class)
public interface UserService {

    @RequestMapping(value = "/login", method = RequestMethod.GET) //value="与远程接口服务中的方法名一致"
    UserDto login(@RequestParam(value="username") String username, @RequestParam(value="password") String password);
}

