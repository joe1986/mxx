package com.hr.mxx.user.impl;

import com.hr.mxx.user.UserService;
import com.hr.mxx.user.mapper.UserMapper;
import com.hr.mxx.user.po.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

/**
 * Created by Joe on 2017/6/28 0028.
 */
@Service
@Transactional
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper userMapper;

    @Value("${server.port}")
    String port;

    public String login(@RequestParam String username, @RequestParam String password) {
        List<User> userList = userMapper.findUserList();
        System.out.println("当前用户数量：" + userList.size());
        return "hi " + username + ",your password:" + password + " , i am from port:" + port;
    }

}
