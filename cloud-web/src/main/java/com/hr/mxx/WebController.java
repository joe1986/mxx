package com.hr.mxx;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

/**
 * Created by Joe on 2017/7/4 0004.
 */
@Controller
@EnableAutoConfiguration
public class WebController {


    @RequestMapping("/home")
    public ModelAndView getListaUtentiView(){
        ModelMap model = new ModelMap();
        model.addAttribute("name", "Spring Boot");
        return new ModelAndView("index", model);
    }

    @RequestMapping(value="/index",method= RequestMethod.GET)
    public String index(Model model){

        return "index";
    }

}