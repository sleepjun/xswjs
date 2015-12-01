package com.xswjs.action;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.websocket.Session;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import com.opensymphony.xwork2.ActionSupport;
import com.xswjs.biz.newsBiz;
import com.xswjs.entity.Article;

public class NewsAction extends ActionSupport{
	Article art = new Article();
	String url = "";
	String informlist = "";
	public String getInformlist() {
		return informlist;
	}

	public void setInformlist(String informlist) {
		this.informlist = informlist;
	}

	public String getUrl() {
		return url;
	}
	
	public void setUrl(String url) {
		this.url = url;
	}
	List<Article> titlelist = null;
	public List<Article> getTitlelist() {
		return titlelist;
	}
	public void setTitlelist(List<Article> titlelist) {
		this.titlelist = titlelist;
	}
	newsBiz nBiz = null;
	public newsBiz getnBiz() {
		return nBiz;
	}
	public void setnBiz(newsBiz nBiz) {
		this.nBiz = nBiz;
	}
	public String getAllArt()
	{
		try {			
			titlelist = nBiz.getAllArt();
			informlist = nBiz.getinform();
		} catch (Exception e) {
			// TODO: handle exception
		}
		
		 return "success";
	}
	//info
	public String info()
	{
		Document doc;
		 String s = "";
			try {
				doc = Jsoup.connect("http://qbyp.jinmajia.com/"+url).get();
				//System.out.println(doc);
		        Elements content = doc.getElementsByClass("cont");
		        s = content.outerHtml();
		        //s = s.replaceAll("/uploadfile/image/", "http://www.hzqbyp.com/uploadfile/image/");
		        //http://www.hzqbyp.comhttp://www.hzqbyp.com/uploadfile
		        //http://www.hzqbyp.com
		        //s = s.replaceAll("http://www.hzqbyp.comhttp://www.hzqbyp.com/uploadfile", "http://www.hzqbyp.com/uploadfile");
		        s = s.replaceAll("show.", "news_ftitle.action?url=show.");
		        s = s.replaceAll("&amp;", "");
		        s = s.replaceAll("list.asp", "news_getNextinform.action?url=list.asp");
		       // s = s.replaceAll("http://www.hzqbyp.comhttp://www.hzqbyp.com/uploadfile", "http://www.hzqbyp.com/uploadfile");
			    System.out.println(s);    	      		      		        
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			art.setData(s);
			return "MessageInfo";
	}
	
	//pinfo
		public String pinfo()
		{
			Document doc;
			 String s = "";
				try {
					doc = Jsoup.connect("http://qbyp.jinmajia.com/"+url).get();
					//System.out.println(doc);
			        Elements content = doc.getElementsByClass("cont");
			        s = content.outerHtml();
			        //s = s.replaceAll("/uploadfile/image/", "http://www.hzqbyp.com/uploadfile/image/");
			        //http://www.hzqbyp.comhttp://www.hzqbyp.com/uploadfile
			        //http://www.hzqbyp.com
			        //s = s.replaceAll("http://www.hzqbyp.comhttp://www.hzqbyp.com/uploadfile", "http://www.hzqbyp.com/uploadfile");
			        s = s.replaceAll("show.", "news_ftitle.action?url=show.");
			        s = s.replaceAll("&amp;", "");
			        s = s.replaceAll("list.asp", "news_getNextinform.action?url=list.asp");
			       // s = s.replaceAll("http://www.hzqbyp.comhttp://www.hzqbyp.com/uploadfile", "http://www.hzqbyp.com/uploadfile");
				    System.out.println(s);    	      		      		        
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				art.setData(s);
				return "PhoneMessageInfo";
		}
	///gggs
	public String goal(String goalurl)
	{
		Document doc;
		 String s = "";
			try {
				doc = Jsoup.connect(goalurl).get();
				System.out.println(doc);
		        Elements content = doc.getElementsByClass("cont_right");
		        s = content.outerHtml();
		        s = s.replaceAll("/article", "news_info.action?url=/article");

		        s = s.replaceAll("/lyzt", "news_info.action?url=/lyzt");

		        s = s.replaceAll("http://www.jinmajia.com", "");

		        System.out.println(s);
		        s = s.replaceAll("show.", "news_ftitle.action?url=show.");
		        s = s.replaceAll("&amp;", "");
		        s = s.replaceAll("list.asp", "news_getNextinform.action?url=list.asp");
			    System.out.println(s);    	      		      		        
			} catch (IOException e) {
				e.printStackTrace();
			}
			art.setData(s);
			return "GGGS";
	}
	///gggs
		public String pgoal(String goalurl)
		{
			Document doc;
			 String s = "";
				try {
					doc = Jsoup.connect(goalurl).get();
					System.out.println(doc);
			        Elements content = doc.getElementsByClass("cont_right");
			        s = content.outerHtml();
			        s = s.replaceAll("/article", "news_pinfo.action?url=/article");

			        s = s.replaceAll("/lyzt", "news_pinfo.action?url=/lyzt");

			        s = s.replaceAll("http://www.jinmajia.com", "");

			        System.out.println(s);
			        s = s.replaceAll("show.", "news_ftitle.action?url=show.");
			        s = s.replaceAll("&amp;", "");
			        s = s.replaceAll("list.asp", "news_getNextinform.action?url=list.asp");
				    System.out.println(s);    	      		      		        
				} catch (IOException e) {
					e.printStackTrace();
				}
				art.setData(s);
				return "PGGGS";
		}
	public String goal()
	{
		Document doc;
		 String s = "";
			try {
				doc = Jsoup.connect(url).get();
				System.out.println(doc);
				//System.out.println(doc);
		        Elements content = doc.getElementsByClass("cont_right");
		        s = content.outerHtml();
		        s = s.replaceAll("/article", "news_info.action?url=/article");
		        //http://www.hzqbyp.comhttp://www.hzqbyp.com/uploadfile
		        //http://www.hzqbyp.com
		        s = s.replaceAll("http://www.hzqbyp.comhttp://www.hzqbyp.com/uploadfile", "http://www.hzqbyp.com/uploadfile");
		        s = s.replaceAll("show.", "news_ftitle.action?url=show.");
		        s = s.replaceAll("&amp;", "");
		        s = s.replaceAll("list.asp", "news_getNextinform.action?url=list.asp");
		       // s = s.replaceAll("http://www.hzqbyp.comhttp://www.hzqbyp.com/uploadfile", "http://www.hzqbyp.com/uploadfile");
			    System.out.println(s);    	      		      		        
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			art.setData(s);
			return "GGGS";
	}

	public String ybzx()
	{
		return goal("http://qbyp.jinmajia.com/article/mtbd/qbyp/bszx/");
	}
	//secondnav
	public String rksq()
	{
		return goal("http://localhost:8080/xswjs/jinmajia2/qbyp.jinmajia.com/article/mtbd/qbyp/gggs/rksq/index.htm");
	}
	public String sggp()
	{
		return goal("http://qbyp.jinmajia.com/article/mtbd/qbyp/gggs/sggp/");
	}
	public String pttz()
	{
		return goal("http://qbyp.jinmajia.com/article/mtbd/qbyp/gggs/pttz/");
	}
	public String qbml()
	{
		return goal("http://qbyp.jinmajia.com/lyzt/2014/02/coin/ybml/qbml.shtml");
	}
	public String ypml()
	{
		return goal("http://qbyp.jinmajia.com/lyzt/2014/02/coin/ybml/ypml.shtml");
	}
	public String yzfpml()
	{
		return goal("http://qbyp.jinmajia.com/lyzt/2014/02/coin/ybml/yzfpml.shtml");
	}
	public String pzml()
	{
		return goal("http://qbyp.jinmajia.com/lyzt/2014/02/coin/ybml/pzml.shtml");
	}
	
	public String gprice()
	{
		return goal("http://qbyp.jinmajia.com/lyzt/2014/02/coin/price/gprice.shtml");
	}
	public String sprice()
	{
		return goal("http://qbyp.jinmajia.com/lyzt/2014/02/coin/price/sprice.shtml");
	}
	public String xprice()
	{
		return goal("http://qbyp.jinmajia.com/lyzt/2014/02/coin/price/xprice.shtml");
	}
	public String jygz()
	{
		return goal("http://qbyp.jinmajia.com/article/mtbd/qbyp/jygz/");
	}
	public String gpwj()
	{
		return goal("http://qbyp.jinmajia.com/article/mtbd/qbyp/gpwj/");
	}
	//downsoft
	//news_jywj.action
	public String bank()
	{
		
		return "BANK";
	}
	public String reg()
	{
		
		return "REG";
	}
	public String downsoft()
	{
		
		return "DOWNLOAD";
	}
	public String yhzc()
	{
		
		return "YHZC";
	}
	public String jdjg()
	{		
		return "GDJG";
	}
	public String leftjygz()
	{
		return goal("http://qbyp.jinmajia.com/article/mtbd/qbyp/jygz/");
	}
	public String leftgpwj()
	{
		return goal("http://qbyp.jinmajia.com/article/mtbd/qbyp/gpwj/");
	}
	public String leftjylc()
	{
		return goal("http://qbyp.jinmajia.com/article/mtbd/qbyp/jyzn/jylc/");
	}
	public String leftczzn()
	{
		return goal("http://qbyp.jinmajia.com/article/mtbd/qbyp/jyzn/czzn/");
	}
	public String leftptbz()
	{
		return goal("http://qbyp.jinmajia.com/article/mtbd/qbyp/jyzn/ptbz/");
	}
	public String leftptqa()
	{
		return goal("http://qbyp.jinmajia.com/article/mtbd/qbyp/jyzn/ptqa/");
	}
	//gggs
	public String gggs()
	{
		return goal("http://qbyp.jinmajia.com/lyzt/2014/02/coin/gggs/");
	}
	
	//phone
	public String pgggs()
	{
		return pgoal("http://qbyp.jinmajia.com/lyzt/2014/02/coin/gggs/");
	}
	public String pybml()
	{
		return pgoal("http://qbyp.jinmajia.com/lyzt/2014/02/coin/list.shtml");
	}
	public String pybjg()
	{
		return pgoal("http://qbyp.jinmajia.com/lyzt/2014/02/coin/price/index1.shtml");
	}
	public String pjywj()
	{
		return pgoal("http://qbyp.jinmajia.com/lyzt/2014/02/coin/jygz/index3.shtml");
	}
	public String pjyzn()
	{
		return pgoal("http://qbyp.jinmajia.com/lyzt/2014/02/coin/jyzn/index2.shtml");
	}
	public String ybml()
	{
		return goal("http://qbyp.jinmajia.com/lyzt/2014/02/coin/list.shtml");
	}
	public String ybjg()
	{
		return goal("http://qbyp.jinmajia.com/lyzt/2014/02/coin/price/index1.shtml");
	}
	public String jywj()
	{
		return goal("http://qbyp.jinmajia.com/lyzt/2014/02/coin/jygz/index3.shtml");
	}
	public String jyzn()
	{
		return goal("http://qbyp.jinmajia.com/lyzt/2014/02/coin/jyzn/index2.shtml");
	}
	
	public Article getArt() {
		return art;
	}

	public void setArt(Article art) {
		this.art = art;
	}
}
