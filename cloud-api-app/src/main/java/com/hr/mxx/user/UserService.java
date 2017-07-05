package com.hr.mxx.user;

import com.hr.mxx.dto.user.UserDto;
import com.netflix.hystrix.contrib.javanica.annotation.HystrixCommand;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

/**
 * Created by Joe on 2017/6/22 0022.
 */
@Service
public class UserService {

    @Autowired
    RestTemplate restTemplate;

    @HystrixCommand(fallbackMethod = "LoginErr")
    public UserDto login(String userName, String password) {
        return restTemplate.getForObject("http://cloud-service/login?username=" + userName + "&password=" + password, UserDto.class);
    }

    public UserDto LoginErr(String userName, String password) {
        UserDto user = new UserDto();
        user.setMsg("用户名或密码错误");
        return user;
    }
}