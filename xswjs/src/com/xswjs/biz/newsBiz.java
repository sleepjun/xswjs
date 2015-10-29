package com.xswjs.biz;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import com.xswjs.entity.Article;

public class newsBiz {
	
	public List<Article> getAllArt()
	{
		 Document doc;
		 List<Article> titlelist = new ArrayList<Article>();
			try {
				doc = Jsoup.connect("http://www.hzqbyp.com/").get();
				//System.out.println(doc);
				Article a = null;
				
		        
		       // System.out.println("--------------");
		        Elements contents = doc.getElementsByClass("index_con01_ul");
		        for(int i=0;i<5;i++){
			        Elements datas = contents.get(i).getElementsByTag("a");
			       
			        for (Element data : datas) 
			        {
			           //String title = data.attr("title");
			        	a = new Article();
			        	a.setTitle(data.text());
			        	a.setSrc(data.attr("href"));
			        	titlelist.add(a);
			        }
			       // System.out.println("---------------------------------------------------------");
		        }
		        contents = doc.getElementsByClass("item_listzh");
		        for(int i=0;i<2;i++){
			        Elements datas = contents.get(i).getElementsByTag("a");
			       
			        for (Element data : datas) 
			        {
			           //String title = data.attr("title");
			        	a = new Article();
			        	a.setTitle(data.text());
			        	a.setSrc(data.attr("href"));
			        	titlelist.add(a);
			        }
			       // System.out.println("---------------------------------------------------------");
		        }
		        contents = doc.getElementsByClass("tt");
		       a = new Article();
		       String s1 = contents.outerHtml();
		       s1 = s1.replaceAll("show.", "news_ftitle.action?url=show.");
		        a.setPtext(s1);
		        titlelist.add(a);
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			return titlelist;
	}
	public List<Article> getAllJMJArt()
	{
		 Document doc;
		 List<Article> titlelist = new ArrayList<Article>();
			try {
				doc = Jsoup.connect("http://qbyp.jinmajia.com/market/s/48/").get();
				System.out.println(doc);
				Article a = null;
				
		        Elements contents = doc.getElementsByClass("article");
		        for(int i=0;i<6;i++){
			        Elements datas = contents.get(i).getElementsByTag("a");
			       
			        for (Element data : datas) 
			        {
			        	a = new Article();
			        	a.setTitle(data.text());
			        	String s = data.text().toString();
			        	System.out.println(s);
			        	a.setSrc(data.attr("href"));
			        	titlelist.add(a);
			        }
			        System.out.println(titlelist.size());
		        }
		        
			} catch (IOException e) {
				e.printStackTrace();
			}
			return titlelist;
	}
}
