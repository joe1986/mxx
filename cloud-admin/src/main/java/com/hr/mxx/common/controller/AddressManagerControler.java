package com.hr.mxx.common.controller;

import com.hr.mxx.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

/**
 * 城市地址数据关系管理
 * Created by Joe on 2017/7/4.
 */
@RestController
public class AddressManagerControler {

    @Autowired
    UserService userService;

}
