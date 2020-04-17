package com.fzu.hxsky.demo.config;


import com.fzu.hxsky.demo.utils.shiro.credentials.RetryLimitHashedCredentialsMatcher;
import com.fzu.hxsky.demo.utils.shiro.realm.UserRealm;
import com.fzu.hxsky.demo.utils.shiro.spring.SpringCacheManagerWrapper;
import org.apache.shiro.codec.Base64;
import org.apache.shiro.mgt.SecurityManager;
import org.apache.shiro.session.mgt.eis.EnterpriseCacheSessionDAO;
import org.apache.shiro.session.mgt.eis.JavaUuidSessionIdGenerator;
import org.apache.shiro.session.mgt.quartz.QuartzSessionValidationScheduler;
import org.apache.shiro.spring.LifecycleBeanPostProcessor;
import org.apache.shiro.spring.security.interceptor.AuthorizationAttributeSourceAdvisor;
import org.apache.shiro.spring.web.ShiroFilterFactoryBean;
import org.apache.shiro.web.mgt.CookieRememberMeManager;
import org.apache.shiro.web.mgt.DefaultWebSecurityManager;
import org.apache.shiro.web.servlet.SimpleCookie;
import org.apache.shiro.web.session.mgt.DefaultWebSessionManager;
import org.springframework.aop.framework.autoproxy.DefaultAdvisorAutoProxyCreator;
import org.springframework.beans.factory.config.MethodInvokingFactoryBean;
import org.springframework.cache.ehcache.EhCacheCacheManager;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.DependsOn;

import javax.servlet.Filter;
import java.util.LinkedHashMap;
import java.util.Map;

@Configuration
public class ShiroConfig {


    /*
    * 本函数用于专门产生各 中Filter
   * */
    @Bean  //本注释用于让spring框架托管本函数返回的pojo
    public ShiroFilterFactoryBean shiroFilter(SecurityManager securityManager) {
      ShiroFilterFactoryBean shiroFilterFactoryBean = new ShiroFilterFactoryBean();
      shiroFilterFactoryBean.setSecurityManager(securityManager);
      //自定义各种过滤器
        Map<String, Filter> filters = new LinkedHashMap<>();
        Map<String , String> filterChainDefinitionMap = new LinkedHashMap<>();
        shiroFilterFactoryBean.setFilters(filters);
        //配置realme
        /*
        * anon: 无需登录可以访问
        * authc ： 必须认证才可以访问
        * user： 使用remeber me功能可以访问
        * perms : 有权限才可以访问
        * role: 具备响应的角色才可以访问
        * */
        //登录页面随时都可以访问
        filterChainDefinitionMap.put("/user/login", "anon");
        //退出
        filterChainDefinitionMap.put("/logout", "logout");
        //需要授权的页面, /#下面的页面都需要授权之后才可以访问
        filterChainDefinitionMap.put("/authenticated", "authc");
        //异常页面都可以访问
        filterChainDefinitionMap.put("/expection", "anon");
        //<!-- authc:所有url都必须认证通过才可以访问; anon:所有url都都可以匿名访问-->
        filterChainDefinitionMap.put("/**", "user");
        //如果不设置默认会自动寻找Web工程根目录下的"/login.jsp"页面
        shiroFilterFactoryBean.setLoginUrl("/user/login");
        shiroFilterFactoryBean.setFilterChainDefinitionMap(filterChainDefinitionMap);
        return shiroFilterFactoryBean;
    }

    /**
     * 安全管理器
     *
     * @param userRealm
     * @return
     */
    @Bean
    public DefaultWebSecurityManager securityManager(UserRealm userRealm, DefaultWebSessionManager sessionManager, SpringCacheManagerWrapper cacheManager) {
        DefaultWebSecurityManager securityManager = new DefaultWebSecurityManager();
        securityManager.setRealm(userRealm);
        securityManager.setSessionManager(sessionManager);
        securityManager.setCacheManager(cacheManager);
        securityManager.setRememberMeManager(rememberMeManager());
        return securityManager;
    }

    /**
     * 会话ID生成器
     *
     * @return
     */
    @Bean
    public JavaUuidSessionIdGenerator sessionIdGenerator() {
        return new JavaUuidSessionIdGenerator();
    }

    /**
     * 会话Cookie模板
     *
     * @return
     */
    @Bean
    public SimpleCookie sessionIdCookie() {
        SimpleCookie simpleCookie = new SimpleCookie("sid");
        simpleCookie.setHttpOnly(true);
        simpleCookie.setMaxAge(-1);
        return simpleCookie;
    }

    /**
     * 自动登陆自动登陆cookie
     *
     * @return
     */
    @Bean
    public SimpleCookie rememberMeCookie() {
        SimpleCookie simpleCookie = new SimpleCookie("rememberMe");
        simpleCookie.setHttpOnly(true);
        simpleCookie.setMaxAge(2592000);
        return simpleCookie;
    }

    /**
     * rememberMe管理器
     *
     * @return
     */
    @Bean
    public CookieRememberMeManager rememberMeManager() {
        CookieRememberMeManager cookieRememberMeManager = new CookieRememberMeManager();
        cookieRememberMeManager.setCipherKey(Base64.decode("4AvVhmFLUs0KTA3Kprsdag=="));
        cookieRememberMeManager.setCookie(rememberMeCookie());
        return cookieRememberMeManager;
    }

    /**
     * 会话DAO
     *
     * @return
     */
    @Bean
    public EnterpriseCacheSessionDAO sessionDAO() {
        EnterpriseCacheSessionDAO enterpriseCacheSessionDAO = new EnterpriseCacheSessionDAO();
        enterpriseCacheSessionDAO.setActiveSessionsCacheName("shiro-activeSessionCache");
        enterpriseCacheSessionDAO.setSessionIdGenerator(sessionIdGenerator());

        return enterpriseCacheSessionDAO;
    }

    /**
     * 会话管理器
     *
     * @return
     */
    @Bean
    public DefaultWebSessionManager sessionManager() {
        DefaultWebSessionManager sessionManager = new DefaultWebSessionManager();
        sessionManager.setGlobalSessionTimeout(1800000);
        sessionManager.setDeleteInvalidSessions(true);
//        sessionManager.setSessionValidationScheduler(sessionValidationScheduler);
        sessionManager.setSessionDAO(sessionDAO());
        sessionManager.setSessionValidationSchedulerEnabled(true);
        sessionManager.setSessionIdCookie(sessionIdCookie());
        return sessionManager;
    }

    /**
     * 会话验证调度器
     *
     * @return
     */
    @Bean
    public QuartzSessionValidationScheduler sessionValidationScheduler(DefaultWebSessionManager sessionManager) {
        QuartzSessionValidationScheduler sessionValidationScheduler = new QuartzSessionValidationScheduler();
        sessionValidationScheduler.setSessionValidationInterval(1800000);
        sessionValidationScheduler.setSessionManager(sessionManager);
        return sessionValidationScheduler;
    }

    /**
     * 缓存管理器
     *
     * @return
     */

    @Bean("shiroCacheManager")
    public SpringCacheManagerWrapper cacheManager(EhCacheCacheManager springCacheManager) {
        SpringCacheManagerWrapper cacheManager = new SpringCacheManagerWrapper();
        cacheManager.setCacheManager(springCacheManager);
        return cacheManager;
    }

    /**
     * 凭证匹配器
     *
     * @return
     */
    @Bean
    public RetryLimitHashedCredentialsMatcher credentialsMatcher(SpringCacheManagerWrapper cacheManager) {
        RetryLimitHashedCredentialsMatcher credentialsMatcher = new RetryLimitHashedCredentialsMatcher(cacheManager);
        credentialsMatcher.setHashAlgorithmName("md5");
        credentialsMatcher.setHashIterations(2);
        credentialsMatcher.setStoredCredentialsHexEncoded(true);
        return credentialsMatcher;
    }

    /**
     * Realm实现
     *
     * @return
     */
    @Bean("shiroUserRealm")
    public UserRealm userRealm(RetryLimitHashedCredentialsMatcher credentialsMatcher) {
        UserRealm userRealm = new UserRealm();
        userRealm.setCredentialsMatcher(credentialsMatcher);
        userRealm.setCachingEnabled(false);
        return userRealm;
    }

    /**
     * Shiro生命周期处理器
     *
     * @return
     */
    @Bean
    public LifecycleBeanPostProcessor lifecycleBeanPostProcessor() {
        return new LifecycleBeanPostProcessor();
    }

    /**
     * 开启Shiro的注解(如@RequiresRoles,@RequiresPermissions),需借助SpringAOP扫描使用Shiro注解的类,并在必要时进行安全逻辑验证
     * 配置以下两个bean(DefaultAdvisorAutoProxyCreator(可选)和AuthorizationAttributeSourceAdvisor)即可实现此功能
     *
     * @return
     */
    @Bean
    @DependsOn({"lifecycleBeanPostProcessor"})
    public DefaultAdvisorAutoProxyCreator advisorAutoProxyCreator() {
        DefaultAdvisorAutoProxyCreator advisorAutoProxyCreator = new DefaultAdvisorAutoProxyCreator();
        advisorAutoProxyCreator.setProxyTargetClass(true);
        return advisorAutoProxyCreator;
    }

    @Bean
    public AuthorizationAttributeSourceAdvisor authorizationAttributeSourceAdvisor(SecurityManager securityManager) {
        AuthorizationAttributeSourceAdvisor authorizationAttributeSourceAdvisor = new AuthorizationAttributeSourceAdvisor();
        authorizationAttributeSourceAdvisor.setSecurityManager(securityManager);
        return authorizationAttributeSourceAdvisor;
    }

    /**
     * 相当于调用SecurityUtils.setSecurityManager(securityManager)
     *
     * @return
     */
    @Bean
    public MethodInvokingFactoryBean methodInvokingFactoryBean(DefaultWebSecurityManager securityManager) {
        MethodInvokingFactoryBean methodInvokingFactoryBean = new MethodInvokingFactoryBean();
        methodInvokingFactoryBean.setStaticMethod("org.apache.shiro.SecurityUtils.setSecurityManager");
        methodInvokingFactoryBean.setArguments(securityManager);
        return methodInvokingFactoryBean;
    }


}
