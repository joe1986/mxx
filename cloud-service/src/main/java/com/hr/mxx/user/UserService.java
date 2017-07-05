package com.hr.mxx.user;

import org.springframework.web.bind.annotation.RequestParam;

/**
 * Created by Joe on 2017/6/28 0028.
 */
public interface UserService {

    public String login(@RequestParam String userName, @RequestParam String password);

}
