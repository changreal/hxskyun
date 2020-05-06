//package com.hxskyun.utils;
//
//import java.io.IOException;
//import javax.servlet.ServletException;
//import javax.servlet.annotation.WebServlet;
//import javax.servlet.http.HttpServlet;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//
//@WebServlet("/jsonpServlet")
//public class jsonpServlet extends HttpServlet {
//    private static final long serialVersionUID = 1L;
//
//    public jsonpServlet() {
//        super();
//    }
//
//    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
////		response.getWriter().append("Served at: ").append(request.getContextPath());
//
//        String callback = (String)request.getParameter("callback");
//        String jsonData = "{\"id\":\"3\", \"name\":\"zhangsan\", \"telephone\":\"13612345678\"}";//为了演示效果，json数据是写死的
//        String retStr = callback + "(" + jsonData + ")";
//        response.getWriter().append(retStr);
//    }
//
//    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//        doGet(request, response);
//    }
//
//}