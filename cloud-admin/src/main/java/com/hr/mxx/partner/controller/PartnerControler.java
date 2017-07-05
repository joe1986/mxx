package com.hr.mxx.partner.controller;

import com.hr.mxx.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

/**
 * 合作企业信息管理
 * Created by Joe on 2017/7/4.
 */
@Controller
@RequestMapping("/partner")
public class PartnerControler {

    @Autowired
    UserService userService;

    @RequestMapping(value = "/list")
    public String list() {
        return "partner/list";
    }

    @RequestMapping(value = "/list2")
    public ModelAndView list2() {
        return new ModelAndView("partner/list").addObject("list", 10);
    }

}
