package com.hr.mxx.user.mapper;

import com.hr.mxx.user.po.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * Created by Joe on 2017/6/29 0029.
 */
@Mapper
public interface UserMapper {
    @Select("select id, user_name as userName, password as password from user")
    List<User> findUserList();
}
