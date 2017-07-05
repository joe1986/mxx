package com.hr.mxx.partner.controller;

import com.hr.mxx.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 企业下所属用户管理
 * Created by Joe on 2017/7/4.
 */
@Controller
@RequestMapping("/customer")
public class CustomerControler {

    @Autowired
    UserService userService;

    @RequestMapping(value = "/list")
    public String login() {
        return "partner/list";
    }
}
