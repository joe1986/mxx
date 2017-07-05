package com.hr.mxx.user.controller;

import com.hr.mxx.dto.user.UserDto;
import com.hr.mxx.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

/**
 * Created by Joe on 2017/7/4.
 */
@Controller
@RequestMapping("/user")
public class LoginControler {

    @Autowired
    UserService userService;

    @RequestMapping(value = "/login")
    public String login() {
        return "user/login";
    }

    @RequestMapping(value = "/signIn")
    public UserDto signIn(@RequestParam String username, @RequestParam String password) {
        return userService.login(username, password);
    }

}
