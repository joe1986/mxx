package com.hr.mxx.order.impl;

import com.google.common.collect.Lists;
import com.hr.mxx.base.BaseService;
import com.hr.mxx.order.OrderService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by Joe on 2017/6/28 0028.
 */
@Service
@Transactional
public class OrderServiceImpl extends BaseService implements OrderService  {


    public List findList() {
        return Lists.newArrayList();
    }

}
