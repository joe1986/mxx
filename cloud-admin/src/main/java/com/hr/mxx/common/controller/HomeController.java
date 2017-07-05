package com.hr.mxx.common.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

/**
 * 主页
 * Created by Joe on 2017/7/4.
 */
@Controller
public class HomeController {

    @RequestMapping(value = "/index")
    public ModelAndView index() {
        return new ModelAndView("index");

    }

    @RequestMapping(value = "/home")
    public String home() {
        return "index";
    }

}
