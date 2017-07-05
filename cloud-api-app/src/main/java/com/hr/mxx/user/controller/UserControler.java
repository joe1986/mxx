package com.hr.mxx.user.controller;

import com.hr.mxx.dto.user.UserDto;
import com.hr.mxx.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by fangzhipeng on 2017/4/6.
 */
@RestController
public class UserControler {


    @Autowired
    UserService userService;

    @RequestMapping(value = "/login")
    public UserDto hi(@RequestParam String username, @RequestParam String password) {
        return userService.login(username, password);
    }

}
