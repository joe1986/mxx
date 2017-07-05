/**
 * @(#)UserController.java, 十月 28, 2016.
 * <p>
 * Copyright 2016 fenbi.com. All rights reserved.
 * FENBI.COM PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */
package com.hr.mxx.user.rest;

import com.hr.mxx.dto.user.UserDto;
import com.hr.mxx.user.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class UserController {

    private static final Logger LOG = LoggerFactory.getLogger(UserController.class);

    @Autowired
    UserService userService;

    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public UserDto login(@RequestParam String username,
                         @RequestParam String password) {
        UserDto userDto = new UserDto();
        userDto.setUserName(username);
        userDto.setPassword(password);
        String msg = userService.login(username, password);
        userDto.setMsg(msg);
        LOG.info("request come to here!");
        return userDto;
    }
}