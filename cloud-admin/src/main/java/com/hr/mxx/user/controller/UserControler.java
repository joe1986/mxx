package com.hr.mxx.user.controller;

import com.hr.mxx.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by Joe on 2017/7/4.
 */
@RestController
public class UserControler {

    @Autowired
    UserService userService;

}
