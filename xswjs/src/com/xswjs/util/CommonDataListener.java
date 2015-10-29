package com.xswjs.util;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletContext;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

import com.xswjs.action.NewsAction;
import com.xswjs.biz.newsBiz;
import com.xswjs.entity.Article;


public class CommonDataListener implements ServletContextListener{

	public newsBiz nbiz = new newsBiz();//new QxBizImpl();
	Article artlistener = new Article();
	@Override
	public void contextDestroyed(ServletContextEvent arg0) {
		// TODO Auto-generated method stub

	}

	@Override
	public void contextInitialized(ServletContextEvent arg0) {
		// TODO Auto-generated method stub
		ServletContext ctx = arg0.getServletContext();
		//WebApplicationContext wctx = WebApplicationContextUtils.getRequiredWebApplicationContext(ctx);
		//nbiz = (newsBiz)wctx.getBean("nbiz");
		List<Article> titlelist = new ArrayList<Article>();
		String informlist = "";
		titlelist = nbiz.getAllJMJArt();
		//informlist = nbiz.getinform();
		ctx.setAttribute("titlelist", titlelist);
		//ctx.setAttribute("informlist", informlist);
		//artlistener.setData(informlist);
	}
}
