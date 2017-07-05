package com.hr.mxx.user;

import com.hr.mxx.dto.user.UserDto;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestParam;

/**
 * Created by Joe on 2017/6/22 0022.
 */
@Component
public class UserServiceHystric implements UserService {

    @Override
    public UserDto login(@RequestParam String name, @RequestParam String password) {
        UserDto user = new UserDto();
        user.setMsg("用户名或密码错误");
        return user;
    }
}
