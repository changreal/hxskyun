package com.fzu.hxsky.demo.utils.shiro.realm;

import com.fzu.hxsky.demo.domain.User;
import com.fzu.hxsky.demo.service.IPassportService;
import com.fzu.hxsky.demo.service.IUserService;
import org.apache.shiro.authc.*;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;
import org.apache.shiro.util.ByteSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

@Component
public class UserRealm extends AuthorizingRealm {

    @Autowired
    private IUserService userService;

    @Autowired
    private IPassportService passportService;


    /*
    * 本函数用于执行授权逻辑
    * */
    @Override
    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principals) {
        String username = (String) principals.getPrimaryPrincipal();

        SimpleAuthorizationInfo authorizationInfo = new SimpleAuthorizationInfo();
        authorizationInfo.setRoles(userService.queryRoles(username));
        authorizationInfo.setStringPermissions(userService.queryPermissions(username));
        return authorizationInfo;
    }


    /*
    * 本函数用于实现认证逻辑
    * */
    @Override
    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken token) throws AuthenticationException {

        String username = (String) token.getPrincipal();
        User user = null;
        if (!StringUtils.isEmpty(username)) {
            user = userService.findByName(username);
        }
        if (user == null) {
            throw new UnknownAccountException();//没找到帐号
        }
        String passworld = userService.GetPasswordByUserName(user.getName());
        //交给AuthenticatingRealm使用CredentialsMatcher进行密码匹配，如果觉得人家的不好可以自定义实现
        SimpleAuthenticationInfo authenticationInfo = new SimpleAuthenticationInfo(
                user.getName(), //用户名
                passworld, //密码
                ByteSource.Util.bytes(user.getName() + passportService.getSalt(user.getName()) ),//salt=username+salt
                getName()  //realm name
        );
        return authenticationInfo;
    }

    @Override
    public void clearCachedAuthorizationInfo(PrincipalCollection principals) {
        super.clearCachedAuthorizationInfo(principals);
    }

    @Override
    public void clearCachedAuthenticationInfo(PrincipalCollection principals) {
        super.clearCachedAuthenticationInfo(principals);
    }

    @Override
    public void clearCache(PrincipalCollection principals) {
        super.clearCache(principals);
    }

    public void clearAllCachedAuthorizationInfo() {
        getAuthorizationCache().clear();
    }

    public void clearAllCachedAuthenticationInfo() {
        getAuthenticationCache().clear();
    }

    public void clearAllCache() {
        clearAllCachedAuthenticationInfo();
        clearAllCachedAuthorizationInfo();
    }

}
