package com.hr.mxx.partner.controller;

import com.hr.mxx.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

/**
 * 企业发票信息管理
 * Created by Joe on 2017/7/4.
 */
@RestController
public class InvoiceControler {

    @Autowired
    UserService userService;

}
