package com.xswjs.entity;

import java.io.IOException;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

public class FTitle {
	private String pText;

	public String getpText() {
		return pText;
	}

	public void setpText(String pText) {
		this.pText = pText;
	}
	public String getbigtitle()
	{
		Document doc;
		 String s = "";
			try {
				doc = Jsoup.connect("http://www.hzqbyp.com/").get();
				//System.out.println(doc);
		        Elements content = doc.getElementsByClass("tt");
		        for (Element data : content) 
		        {
		           s+=data.outerHtml();
		        }
		        s = s.replaceAll("show.", "news_ftitle.action?url=show.");
		       // s = s.replaceAll("http://www.hzqbyp.comhttp://www.hzqbyp.com/uploadfile", "http://www.hzqbyp.com/uploadfile");
			   // System.out.println(s);    	      		      		        
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			return s;
	}
	public void show(){
		
	}
}
